// pages/home/home.js
Page({
  // 存放数据
  data:{
    name:'coderhe',
    content:'cat',
    movies:[
      {id:'01',name:'are you ok',time:'3:33'},
      {id:'02',name:'how are you',time:'1:23'},
      {id:'03',name:'hello small',time:'1:90'},
      {id:'04',name:'are you ok',time:'3:33'},
      {id:'05',name:'are you ok',time:'3:33'},
    ],
    count:0
  },
  // 执行函数
  addCount(){
    // 1. 数据会发生变化，但是视图内容不会响应改变 pass
    // this.data.count++;
    // console.log(this.data.count);
    // 2.  this.setData() success
    this.setData({
      // count:10
      count:this.data.count += 1
    })
  },
  subCount(){
    this.setData({
      count:this.data.count -= 1
    })
  }
})