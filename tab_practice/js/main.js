'use strict';

const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.contents li');
const arrowRight = document.querySelector('.arrow-right'); 
const arrowLeft = document.querySelector('.arrow-left');
const visibleTabs = 4 //表示するタブの数

// タブクリック時の処理
tabs.forEach((tab, i) => {
  tab.addEventListener('click', function () {
    tabs.forEach((tab) => tab.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));
    tab.classList.add('active');
    contents[i].classList.add('active');
  });
});
// 「＞」ボタンクリック時
arrowRight.addEventListener('click', function () {
  tabs.forEach((tab, i) => {
    if (i >= visibleTabs) {
      tab.classList.add('show');
      contents[i].classList.add('show');
    } else {
      tab.classList.remove('show');
      contents[i].classList.remove('show');
    }
  });
  // 全てのtabとcontentsからactiveを消す
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  // 4番目のtabとcontentsにactiveをつける
  tabs[4].classList.add('active');
  contents[4].classList.add('active');
  
  arrowLeft.classList.add('show');
  arrowRight.classList.remove('show');
});


// 「＜」ボタンクリック時
arrowLeft.addEventListener('click', function () {
  // 1〜4のタブとコンテンツに.showをつける、5〜8からは.showを消す
  tabs.forEach((tab, i) => {
    if (i < visibleTabs) {
      tab.classList.add('show');
      contents[i].classList.add('show');
    } else {
      tab.classList.remove('show');
      contents[i].classList.remove('show');
    }
  });
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  // 1番目のtabとcontentsにactiveをつける
  tabs[0].classList.add('active');
  contents[0].classList.add('active');
  
  arrowRight.classList.add('show');
  arrowLeft.classList.remove('show');
});

