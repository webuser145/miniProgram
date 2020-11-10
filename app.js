App({
  //  当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function (options) {
    // 在这里获取用户信息也只能获取一次
  },
  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function (options) {
    // 获取用户信息
    // wx.getUserInfo({
    //   success(res){
    //     console.log(res.userInfo);
    //   }
    // })
  },
  // 当小程序从前台进入后台，会触发 onHide(小程序关闭了)
  onHide: function () {
    console.log('小程序关闭了:onHide')
  },
  // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function (msg) {
    console.log('小程序发生错误了:onError')
  },
  // 公共的数据
  publicData:{
    name:'coderhe',
    age:19
  }
})
