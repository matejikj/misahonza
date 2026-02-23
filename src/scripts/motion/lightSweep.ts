import { loadGsap } from "./loadGsap";

export async function initLightSweep(root: HTMLElement) {
  if (!root || root.dataset.motionInitialized === "true") return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 1024px)").matches;
  if (prefersReduced || !desktop) {
    root.dataset.motionMode = prefersReduced ? "reduced" : "mobile";
    return;
  }

  const beam = root.querySelector<HTMLElement>("[data-light-sweep-beam]");
  const beamSoft = root.querySelector<HTMLElement>("[data-light-sweep-beam-soft]");
  const texture = root.querySelector<HTMLElement>("[data-light-sweep-texture]");
  const panel = root.querySelector<HTMLElement>("[data-light-sweep-panel]");
  const stateItems = Array.from(
    root.querySelectorAll<HTMLElement>("[data-light-sweep-state-item]"),
  );

  if (!beam || !beamSoft || !texture || !panel) return;

  const { gsap, ScrollTrigger } = await loadGsap();
  if (!root.isConnected) return;

  root.dataset.motionInitialized = "true";
  root.dataset.motionMode = "desktop";
  root.classList.add("light-sweep-motion-ready");

  gsap.set([beam, beamSoft], { xPercent: -65 });
  gsap.set(texture, { scale: 1.03, rotate: -0.25 });

  const setActiveState = (index: number) => {
    stateItems.forEach((item, itemIndex) => {
      const active = itemIndex === index;
      item.dataset.active = active ? "true" : "false";
      item.classList.toggle("border-transparent", active);
      item.classList.toggle("bg-highlight", active);
      item.classList.toggle("text-text", active);
      item.classList.toggle("hairline", !active);
      item.classList.toggle("bg-surface", !active);
      item.classList.toggle("text-text-muted", !active);
    });
  };

  const trigger = ScrollTrigger.create({
    trigger: root,
    start: "top 80%",
    end: "bottom top",
    scrub: 0.4,
    onUpdate: (self: any) => {
      const p = self.progress;
      gsap.set(beam, { xPercent: -60 + p * 160, opacity: 0.35 + p * 0.25 });
      gsap.set(beamSoft, { xPercent: -45 + p * 145, opacity: 0.22 + p * 0.2 });
      gsap.set(texture, { scale: 1.03 - p * 0.03, rotate: -0.25 + p * 0.5 });
      gsap.set(panel, { y: p * -6 });

      const stateIndex = Math.min(2, Math.floor(p * 3));
      setActiveState(stateIndex);
    },
  });
  let active = true;

  const refreshOnResize = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isDesktop || reduced) {
      if (active) {
        trigger.disable();
        active = false;
      }
      gsap.set([beam, beamSoft, texture, panel], { clearProps: "transform,opacity" });
      root.dataset.motionMode = reduced ? "reduced" : "mobile";
      return;
    }
    if (!active) {
      trigger.enable();
      active = true;
      root.dataset.motionMode = "desktop";
    }
    trigger.refresh();
  };
  window.addEventListener("resize", refreshOnResize, { passive: true });
}
