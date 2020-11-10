// pages/about/about.js
let appInstance = getApp();
console.log(appInstance); // 由App()生成的单例对象
console.log(appInstance.publicData);
Page({
  data:{
    mes:appInstance.publicData.name
  }
})