let cached: Promise<{
  gsap: any;
  ScrollTrigger: any;
}> | null = null;

export function loadGsap() {
  if (cached) return cached;

  cached = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
    ([gsapModule, scrollTriggerModule]) => {
      const gsap = (gsapModule as any).gsap ?? (gsapModule as any).default ?? gsapModule;
      const ScrollTrigger =
        (scrollTriggerModule as any).ScrollTrigger ??
        (scrollTriggerModule as any).default ??
        scrollTriggerModule;
      const globals = gsap.core?.globals?.() ?? {};

      if (!globals.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      return { gsap, ScrollTrigger };
    },
  );

  return cached;
}
