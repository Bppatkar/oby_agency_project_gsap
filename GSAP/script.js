// function locoScoll() {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
//   });

//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector(".main").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }
// // _________________________________________________

// locoScoll();

let tl = gsap.timeline();
tl.from(".line h1", {
  opacity: 0,
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from(" #line1_part1,.line h2", {
  opacity: 0,
  onStart: function () {
    const h5Timer = document.querySelector("#line1_part1 h5");
    let grow = 0;
    setInterval(() => {
      if (grow < 100) {
        h5Timer.innerHTML = grow++;
      } else {
        h5Timer.innerHTML = grow;
      }
    }, 30);
  },
});
tl.to(".loader", {
  opacity: 0,
  duration: 0.4,
  delay: 4,
});
