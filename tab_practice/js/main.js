'use strict';

const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.contents li');

tabs.forEach((tab, i) => {
  tab.addEventListener('click' , function() {
    //全ての1actioveを消す
    tabs.forEach((tab) => tab.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));
    //クリックしたtabとcontentのactiveをつける
    tab.classList.add('active');
    contents[i].classList.add('active');
  });
});
