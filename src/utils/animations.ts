import gsap, { type Timeline } from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as Three from "three";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target: string, animationProps: gsap.TweenVars, scrollProps?: ScrollTrigger.Vars) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: Timeline,
  rotationRef: React.RefObject<Three.Group>,
  rotationState: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: gsap.TweenVars,
) => {
  timeline.to(rotationRef.current?.rotation ?? {}, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  (timeline as unknown as any).to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );

  (timeline as unknown as any).to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );
};
