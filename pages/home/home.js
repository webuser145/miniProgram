Page({
  data:{
    message:'hello wx'
  },
  // 页面加载
  onLoad(){
    console.log('页面被加载了 onLoad');
  },
  // 页面显示
  onShow(){
    console.log('页面显示了 onShow');
  },
  // 页面初次渲染(显示后才会渲染,只执行一次)
  onReady(){
    console.log('页面初次渲染了 onReady');
  },
  // 页面隐藏
  onHide(){
    console.log('页面被隐藏了 onHide');
  },
  // 页面卸载
  // 假设从首页跳转至关于页,然后点击返回按钮又再一次返回到首页
  // 关于页则会被销毁,此函数执行
  onUnload(){
    console.log('页面被卸载了 onUnload');
  }
})