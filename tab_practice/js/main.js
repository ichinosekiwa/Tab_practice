'use strict';

const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.contents li');

tabs.forEach((tab, item) => {
  tab.addEventListener('click', () => {
    tabs.forEach((a) => a.classList.remove('active'));
    contents.forEach((b) => b.classList.remove('active'));
    
    tab.classList.add('active');
    contents[item].classList.add('active');
  });
});

// //tabが0〜数だけ繰り返す
// for (let i = 0; i < tabs.length; i++) {
//   //tabをクリックしたら
//   tabs[i].addEventListener('click', function () {
//     //全てのactiveを消す
//     for (let j = 0; j < tabs.length; j++) {
//       tabs[j].classList.remove('active');
//     }
//     for (let j = 0; j < contents.length; j++) {
//       contents[j].classList.remove('active');
//     }
//     //クリックしたtabとcontentにactiveつける
//     tabs[i].classList.add('active');
//     contents[i].classList.add('active');
//   });
// }

