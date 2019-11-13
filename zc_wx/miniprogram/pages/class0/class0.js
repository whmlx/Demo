// pages/class0/class0.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, name: "圆领短袖"},
      { id: 2, name: "秋冬卫衣"},
      { id: 3, name: "翻领短袖"},
      { id: 4, name: "韩系校服" },
      { id: 5, name: "马甲帽子" },
      { id: 6, name: "篮球服" },
      { id: 7, name: "围巾围裙" },
      { id: 8, name: "相册定制" },
      { id: 9, name: "冲锋衣" }
    ]
  },
  handleContact(e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  tiaozhuan: function () {
    wx.navigateTo({
      url: '/pages/search0/search0',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})