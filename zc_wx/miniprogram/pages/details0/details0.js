// pages/details0/details0.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [
      // { id: 1, img: "/images/lunbo01.jpg" },
      // { id: 2, img: "/images/lunbo01.jpg" },
      // { id: 3, img: "/images/lunbo01.jpg" },
    ],
    list:[],
    good_id:"",
    cart_show: false,
    liji_show:false,
    sum:1,
    openid:"",
    cart_sum:0
  },
  add_cart:function(){
    this.setData({ cart_show: true });
  },
  add_cart1:function(){
    // console.log(this.data.good_id);
    // console.log(this.data.sum);
    db.collection("zc_cart")
    .where({
      _openid:this.data.openid,
      good_id: this.data.good_id
    })
    .get()
    .then(res=>{
      console.log(res.data);
      if(res.data.length==0){
        db.collection("zc_cart")
        .add({
          data:{
            good_id: this.data.good_id,
            sum: this.data.sum,
            img:this.data.list[0].img,
            title: this.data.list[0].title,
            price: this.data.list[0].price,
          }
        })
        .then(res=>{
          console.log(res);
          this.onClose1();
          wx.showToast({
            title: '加入购物车成功',
            icon: 'none',
            duration: 2000
          })
          this.onLoad()
          this.onReady()
        })
        .catch(err=>{
          console.log(err);
        })
      }else{
        //console.log(this.data.sum)
        //console.log(res.data[0].sum)
        //console.log(this.data.good_id)
        //console.log(this.data.sum + res.data[0].sum)
        db.collection("zc_cart")
        .doc(res.data[0]._id,)
        .update({
          data:{
            sum: this.data.sum + res.data[0].sum
          }
        })
        .then(res => {
          //console.log(res);
          wx.showToast({
            title: '加入购物车成功',
            icon: 'none',
            duration: 2000
          })
          this.onClose1();
        })
        .catch(err => {
          console.log(err);
        })
      }
    })
    .catch(err=>{
      console.log(err);
    })
    
  },
  onChange(event) {
    this.setData({
      sum: event.detail
    })
  },
  onClose1() {
    this.setData({ cart_show: false });
  },
  onClose2() {
    this.setData({ liji_show: false });
  },
  sel_goodlist:function(id){
    db.collection("zc_goodlist_good")
    .where({
      _id: id
    })
    .get()
    .then(res => {
      // console.log(res.data);
      this.onClose1();
      this.setData({
        list: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  lijigoumai:function(){
    
  },
  jiesuan:function(){
    this.setData({
      liji_show: true
    })
  },
  lijigoumai:function(){
    console.log(this.data.good_id);
    console.log(this.data.sum);
    var sum = this.data.sum;
    var id = this.data.list[0]._id;
    console.log(id);
    wx.navigateTo({
      url: "/pages/settlement0/settlement0?id=" + id + "&sum="+sum
    })
  },
  cart:function(){
    wx.switchTab({
      url: "/pages/cart0/cart0"
    });  
  },
  home: function () {
    wx.switchTab({
      url: "/pages/home0/home0"
    });
  },
  sel_cart_sum:function(){
    
    db.collection("zc_cart")
    .where({
      _openid:wx.getStorageSync('openid')
    })
    .get()
    .then(res=>{
      console.log(res);
      this.setData({
        cart_sum: res.data.length
      })
    })
    .catch(err=>{
      console.log(err);
    })
  },
  sel_lunbo_img: function (id) {
    console.log(id)
    db.collection("zc_details_lunbo")
      .where({
        good_id: id
      })
      .get()
      .then(res => {
        console.log(res)
        console.log(res.data[0].img.split(","))
        this.setData({
          imgs: res.data[0].img.split(",")
        })
        console.log(this.data.imgs)
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      good_id:options.id
    })
    this.sel_goodlist(options.id);
    wx.getStorage({
      key: 'openid',
      success: (res) => {
        this.setData({
          openid: res.data
        })
      },
    })
    this.sel_cart_sum()
    //console.log(this.data.openid)
    this.sel_lunbo_img(options.id)
  },

    

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.sel_cart_sum()
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