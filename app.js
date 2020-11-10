App({
  //  当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  //  当小程序关闭后，后台可能会存活2小时，如果在2小时之内
  //  启动了小程序，该生命周期函数并不会执行
  onLaunch: function () {
    console.log('小程序初始化了:onLaunch');
    // 获取用户的信息,异步调用
    wx.getUserInfo({
      success(res){
        console.log(res);
      }
    })
  },
  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function (options) {
    console.log('小程序显示了:onShow');
    setTimeout(() => {
      const err = new Error();
      throw err;
    },5000)
  },
  // 当小程序从前台进入后台，会触发 onHide(小程序关闭了)
  onHide: function () {
    console.log('小程序关闭了:onHide')
  },
  // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function (msg) {
    console.log('小程序发生错误了:onError')
  }
})
