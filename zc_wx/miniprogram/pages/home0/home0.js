// pages/home0/home0.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1: [],
    list2: [],
    list3: [],
    list4: [],
    lunbo:[]
  },
  lunbo:function(){
    db.collection("zc_goodlist_good")
    .where({
      class:3
    })
    .get()
    .then(res=>{
      console.log(res.data);
      this.setData({
        lunbo:res.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  },
  lunbo_tiaozhuan:function(event){
    var id=event.target.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/details0/details0?id=' + id,
    })
  },
  // add: function () {
  //   db.collection("zc_goodlist_good")
  //   .add({
  //     data: {
  //       title: "9017冰离子丝光棉 200克 60%棉+35%冰离子纤维+5%艾伦",
  //       price: 10.00,
  //       old_prcie:999.00,
  //       class: 4,
  //       img:"/images/cl_01.jpg"
  //     }
  //   }).then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // },
  details: function (event){
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/details0/details0?id=' + id,
    })
  },
  sel1: function () {
    db.collection("zc_goodlist_good")
    .where({
      class:1
    })
    .get()
    .then(res => {
      //console.log(res.data);
      this.setData({
        list1: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  sel2: function () {
    db.collection("zc_goodlist_good")
    .where({
      class: 2
    })
    .get()
    .then(res => {
      //console.log(res.data);
      this.setData({
        list2: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  sel3: function () {
    db.collection("zc_goodlist_good")
    .where({
      class: 3
    })
    .get()
    .then(res => {
      //console.log(res.data);
      this.setData({
        list3: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  sel4: function () {
    db.collection("zc_goodlist_good")
    .where({
      class: 4
    })
    .get()
    .then(res => {
      //console.log(res.data);
      this.setData({
        list4: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.clearStorageSync("useid")
    this.sel1();
    this.sel2();
    this.sel3();
    this.sel4();
    this.lunbo();
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