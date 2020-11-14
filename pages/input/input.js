// pages/input/input.js
Page({
  data: {

  },
  focusTrigger(event){
    console.log('聚焦时触发');
  },
  inputTrigger(event){
    console.log('输入时触发');
    console.log(event.detail.value);
  },
  blurTrigger(event){
    console.log('失焦触发');
  }
})