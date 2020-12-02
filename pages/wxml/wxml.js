// pages/wxml/wxml.js
import request from '../../network/network'
Page({
  onLoad: function (options) {
    request({
      url:'http://httpbin.org/post',
      method:'post',
      data:{
        name:'coderhe',
        age:18
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
})