// pages/goodlist0/goodlist0.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:1,
    lists:[],
    list:[]
  },
  sels: function () {
    db.collection("zc_goodlist_good")
    .get()
    .then(res => {
      //console.log(res.data);
      this.setData({
        lists: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  sel:function(){
    db.collection("zc_goodlist_good")
    .where({
      class: parseInt(this.data.active)
    })
    .get()
    .then(res => {
      //console.log(res.data);
      this.setData({
        list: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  onChange(event) {
    if (event.detail.title=="圆领短袖"){
      this.setData({
        active: 1
      });
      this.sel();
    } else if (event.detail.title == "秋冬卫衣"){
      this.setData({
        active: 2
      });
      this.sel();
    } else if (event.detail.title == "翻领短袖") {
      this.setData({
        active: 3
      });
      this.sel();
    } else if (event.detail.title == "韩系校服") {
      this.setData({
        active: 4
      });
      this.sel();
    } else if (event.detail.title == "马甲帽子") {
      this.setData({
        active: 5
      });
      this.sel();
    } else if (event.detail.title == "篮球服") {
      this.setData({
        active: 6
      });
      this.sel();
    } else if (event.detail.title == "围巾围裙") {
      this.setData({
        active: 7
      });
      this.sel();
    } else if (event.detail.title == "相册定制") {
      this.setData({
        active: 8
      });
      this.sel();
    } else if (event.detail.title == "冲锋衣") {
      this.setData({
        active: 9
      });
      this.sel();
    }
    console.log(this.data.active)
  },
  tiaozhuan:function(event){
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
    this.sels();
    this.setData({
      active: options.id
    });
    this.sel();
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