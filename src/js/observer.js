
import observeElementInViewport from 'https://unpkg.com/observe-element-in-viewport?module';

// const intersectionObserver = new IntersectionObserver((entries) => {
//   // If intersectionRatio is 0, the target is out of view
//   // and we do not need to do anything.
// //   if (entries[0].intersectionRatio <= 0) return;

//   // loadItems(10);
//   console.log(entries[0]);
// });
// // start observing
// intersectionObserver.observe(document.querySelector(".observe_this"));


const target = document.querySelector('.observe_this');

console.log();