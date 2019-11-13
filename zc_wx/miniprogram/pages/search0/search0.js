// pages/search0/search0.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[]
  },
  onCancel:function(){
    wx.navigateBack({
      delta:1
    })
  },
  change: function (event){
    console.log(event.detail);
    db.collection("zc_goodlist_good")
    .where({
      title: db.RegExp({
        regexp: event.detail,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    })
    .get()
    .then(res => {
      console.log(res.data);
      this.setData({
        lists: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  tiaozhuan: function (event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/details0/details0?id=' + id,
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