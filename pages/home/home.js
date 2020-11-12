Page({
  data: {
    message: 'hello wx',
    mes: '点一点',
    list: []
  },
  // 3. 绑定对应的事件函数
  handleClickMes() {
    console.log('点一点');
  },
  // 4. 其他
  // 页面滚动
  onPageScroll(data) {
    console.log(data);
  },
  // 下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新了,可以重新请求数据');
  },
  // 页面加载
  onLoad() {
    console.log('页面被加载了 onLoad');
    // 1. 在这里发送请求获取数据
    wx.request({
      // 该域名/ip地址需要加到合法域名列表中，才能访问
      url: 'http://123.207.32.32:8000/api/h8/home/multidata',
      success: res => {
        const data = res.data.data.banner.list;
        // 1. 方法一：数据改变了，但页面不会渲染 pass
        // this.data.list = data;
        // console.log(this.data.list)
        // 2. 方法二: setData success
        this.setData({
          list: data
        })
        console.log(this.data.list)
      }
    })
  },
  // 页面显示
  onShow() {
    console.log('页面显示了 onShow');
  },
  // 页面初次渲染(显示后才会渲染,只执行一次)
  onReady() {
    console.log('页面初次渲染了 onReady');
  },
  // 页面隐藏
  onHide() {
    console.log('页面被隐藏了 onHide');
  },
  // 页面卸载
  // 假设从首页跳转至关于页,然后点击返回按钮又再一次返回到首页
  // 关于页则会被销毁,此函数执行
  onUnload() {
    console.log('页面被卸载了 onUnload');
  }
})