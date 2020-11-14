// pages/image/image.js
Page({
  data: {
    img:''
  },
  imgLoadFinish(event){
    console.log('图片加载完成了')
    // console.log(event)
  },
  uploadImg(){
    // 从本地相册选择图片或使用相机拍照
    wx.chooseImage({
      success:res => {
        this.setData({
          img:res.tempFilePaths[0]
        })
      }
    })
  }
})