import { loadGsap } from "./loadGsap";

type ProjectItem = {
  title: string;
  insight: string;
  location: string;
  surface: string;
  imageLabel: string;
  image: string;
};

function setFaceContent(face: HTMLElement | null, item: ProjectItem | undefined) {
  if (!face || !item) return;
  const title = face.querySelector<HTMLElement>("[data-face-title]");
  const insight = face.querySelector<HTMLElement>("[data-face-insight]");
  const location = face.querySelector<HTMLElement>("[data-face-location]");
  const surface = face.querySelector<HTMLElement>("[data-face-surface]");
  const imageLabel = face.querySelector<HTMLElement>("[data-face-image-label]");
  const image = face.querySelector<HTMLImageElement>("[data-face-image]");

  if (title) title.textContent = item.title;
  if (insight) insight.textContent = item.insight;
  if (location) location.textContent = item.location;
  if (surface) surface.textContent = item.surface;
  if (imageLabel) imageLabel.textContent = item.imageLabel;
  if (image) {
    image.src = item.image;
    image.alt = `Realizace: ${item.title}`;
  }
}

function setMeta(root: HTMLElement, item: ProjectItem, activeIndex: number, total: number) {
  const progress = root.querySelector<HTMLElement>("[data-project-progress]");
  const title = root.querySelector<HTMLElement>("[data-project-meta-title]");
  const insight = root.querySelector<HTMLElement>("[data-project-meta-insight]");
  const location = root.querySelector<HTMLElement>("[data-project-meta-location]");
  const surface = root.querySelector<HTMLElement>("[data-project-meta-surface]");
  const bar = root.querySelector<HTMLElement>("[data-project-progress-bar]");

  if (progress) progress.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  if (title) title.textContent = item.title;
  if (insight) insight.textContent = item.insight;
  if (location) location.textContent = item.location;
  if (surface) surface.textContent = item.surface;
  if (bar) {
    const width = ((activeIndex + 1) / total) * 100;
    bar.style.width = `${width}%`;
  }
}

export async function initProjectsFlip(root: HTMLElement) {
  if (!root || root.dataset.motionInitialized === "true") return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 1024px)").matches;
  if (prefersReduced || !desktop) {
    root.dataset.motionMode = prefersReduced ? "reduced" : "mobile";
    return;
  }

  const items = JSON.parse(root.dataset.items || "[]") as ProjectItem[];
  if (!Array.isArray(items) || items.length < 2) return;

  const fallback = root.querySelector<HTMLElement>("[data-projects-fallback]");
  const stage = root.querySelector<HTMLElement>("[data-projects-stage]");
  const pin = root.querySelector<HTMLElement>("[data-projects-pin]");
  const cardInner = root.querySelector<HTMLElement>("[data-flip-card-inner]");
  const frontFace = root.querySelector<HTMLElement>("[data-flip-face='front']");
  const backFace = root.querySelector<HTMLElement>("[data-flip-face='back']");

  if (!stage || !pin || !cardInner || !frontFace || !backFace) return;

  const { gsap, ScrollTrigger } = await loadGsap();
  if (!root.isConnected) return;

  root.dataset.motionInitialized = "true";
  root.dataset.motionMode = "desktop";
  stage.classList.remove("hidden");
  fallback?.classList.add("hidden");

  let segment = 0;
  let visibleIndex = 0;
  const maxSegment = items.length - 1;

  setFaceContent(frontFace, items[0]);
  setFaceContent(backFace, items[1]);
  setMeta(root, items[0], 0, items.length);

  gsap.set(cardInner, { rotateY: 0, transformPerspective: 1400 });

  const trigger = ScrollTrigger.create({
    trigger: stage,
    start: "top top+=96",
    end: `+=${Math.round(window.innerHeight * (items.length * 1.25))}`,
    scrub: 0.35,
    pin,
    anticipatePin: 1,
    onUpdate: (self: any) => {
      const scaled = self.progress * maxSegment;
      const nextSegment = Math.min(maxSegment - 1, Math.floor(scaled));
      const localProgress = Math.max(0, Math.min(1, scaled - nextSegment));

      if (nextSegment !== segment) {
        segment = nextSegment;
        setFaceContent(frontFace, items[segment]);
        setFaceContent(backFace, items[segment + 1]);
      }

      gsap.set(cardInner, { rotateY: localProgress * 180 });

      const nextVisibleIndex = localProgress >= 0.5 ? segment + 1 : segment;
      if (nextVisibleIndex !== visibleIndex) {
        visibleIndex = nextVisibleIndex;
        setMeta(root, items[visibleIndex], visibleIndex, items.length);
      }
    },
  });
  let active = true;

  const viewportGuard = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || reduced) {
      if (active) {
        trigger.disable();
        active = false;
      }
      gsap.set(cardInner, { clearProps: "transform" });
      stage.classList.add("hidden");
      fallback?.classList.remove("hidden");
      root.dataset.motionMode = reduced ? "reduced" : "mobile";
      return;
    }

    if (!active) {
      trigger.enable();
      active = true;
      stage.classList.remove("hidden");
      fallback?.classList.add("hidden");
      root.dataset.motionMode = "desktop";
    }

    trigger.refresh();
  };
  window.addEventListener("resize", viewportGuard, { passive: true });
  window.addEventListener("orientationchange", viewportGuard, { passive: true });
}
