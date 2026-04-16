import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function initGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}


type RevealOptions = {
  trigger?: Element | string;
  scroller?: Element | string;
  start?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
};

export function setupReveal(
  targets: string,
  {
    trigger,
    scroller,
    start = "top 80%",
    y = 40,
    duration = 0.8,
    stagger = 0.12,
    ease = "power2.out",
  }: RevealOptions = {},
) {
  initGsap();

  const elements = gsap.utils.toArray<HTMLElement>(targets);
  if (!elements.length) return;

  elements.forEach((element) => {
    gsap.killTweensOf(element);
  });

  const resolvedTrigger =
    typeof trigger === "string"
      ? document.querySelector(trigger)
      : trigger || elements[0];

  if (!resolvedTrigger) return;

 const resolvedScroller =
    typeof scroller === "string"
      ? document.querySelector(scroller)
      : scroller;

  ScrollTrigger.getAll().forEach((scrollTrigger) => {
    if (scrollTrigger.trigger === resolvedTrigger) {
      scrollTrigger.kill();
    }
  });

  gsap.set(elements, {
    autoAlpha: 0,
    y,
  });

  gsap.to(elements, {
    autoAlpha: 1,
    y: 0,
    duration,
    stagger,
    ease,
    scrollTrigger: {
      trigger: resolvedTrigger,
      scroller: resolvedScroller || undefined,
      start,
      once: true,
    },
  });
}
