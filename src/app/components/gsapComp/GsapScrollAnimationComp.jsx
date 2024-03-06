import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateElement = (elementRef) => {
  gsap.to(elementRef.current, {
    scrollTrigger: {
      trigger: elementRef.current,
      toggleActions: "restart restart none none",
    },
    duration: 1.5,
    opacity: 1,
    y: 0,
  });
};

const GsapScrollAnimationComp = () => {
  const gsapScrollRefs = {
    TextSlidingHeadingRef: useRef(),
    TextSlidingSliderRef: useRef(),
    TextSlidingSliderTextRef: useRef(),
    headingAndSwipperTitleRef: useRef(),
    headingAndSwipperHeadingRef: useRef(),
    headingAndSwipperRef: useRef()
  };

  useEffect(() => {
    animateElement(gsapScrollRefs.TextSlidingHeadingRef);
    animateElement(gsapScrollRefs.TextSlidingSliderRef);
    animateElement(gsapScrollRefs.TextSlidingSliderTextRef);
    animateElement(gsapScrollRefs.headingAndSwipperTitleRef);
    animateElement(gsapScrollRefs.headingAndSwipperHeadingRef);
    animateElement(gsapScrollRefs.headingAndSwipperRef);
  }, []);

  return gsapScrollRefs;
};

export default GsapScrollAnimationComp;





// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GsapScrollAnimationComp = () => {
//   const gsapScrollRefs = {

//     /* Text Sliding Component Refs */
//     TextSlidingHeadingRef: useRef(),
//     TextSlidingSliderRef: useRef(),
//     TextSlidingSliderTextRef: useRef(),

//     /* Heading And Swipper Component Refs */
//     headingAndSwipperTitleRef : useRef(),
//     headingAndSwipperHeadingRef : useRef(),
//     headingAndSwipperRef : useRef(),
//   };

//   useEffect(() => {
//     gsap.to(gsapScrollRefs.TextSlidingHeadingRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.TextSlidingHeadingRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.TextSlidingSliderRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.TextSlidingSliderRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.TextSlidingSliderTextRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.TextSlidingSliderTextRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.headingAndSwipperTitleRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.headingAndSwipperTitleRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.headingAndSwipperHeadingRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.headingAndSwipperHeadingRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.headingAndSwipperRef.current, {
//       scrollTrigger: {
//         trigger:gsapScrollRefs.headingAndSwipperRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });
//   }, []);

//   return gsapScrollRefs;
// };

// export default GsapScrollAnimationComp;
