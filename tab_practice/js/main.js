'use strict';

const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.contents li');
const firstTabs = document.querySelector('.first-tabs');
const secondTabs = document.querySelector('.second-tabs');
const arrow = document.querySelector('.arrow');
const arrow2 = document.querySelector('.arrow-2');

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

arrow.forEach((arrow, i) => {
  arrow.addEventListener('click', function() {
    //1つ目のarrowをクリックしたら2つ目のarrowをactiveに切り替えたい
    arrow.forEach((arrow) => arrow.classList.remove('active'));
    firstTabs.classList.remove('active');
    secondTabs.classList.remove('active');

    arrow2.classList.add('active');
    arrow2[i].classList.add('active');
  });
});