// pages/cart0/cart0.js
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    checkeds: false,
    checked:[],
    list:[],
    price:0,
    sum:[],
    openid:""
  },
  details: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details0/details0?id=' + id,
    })
  },
  onChanges(event) {
    var a=[];var b=[];
    if(this.data.checkeds==false){
      for (var i = 0; i < this.data.list.length; i++) {
        a.push(this.data.list[i]._id);
      }
      this.setData({
        checked: a
      });
      this.setData({
        checkeds: true
      });
      var price=0;
      db.collection("zc_cart")
      .where({
        _openid:wx.getStorageSync('openid')
      })
      .get()
      .then(res=>{
        console.log(res.data)
        for(var i=0;i<res.data.length;i++){
          price+=res.data[i].price*res.data[i].sum*100
        }
        this.setData({
          price: price
        });
      }).catch(err=>{
        console.log(err)
      })
    }else{
      this.setData({
        checked: b
      });
      this.setData({
        checkeds: false
      });
      this.setData({
        price: 0
      });
    }
  },
  onChange(event) {
    console.log(event.detail)
    this.setData({
      checked: event.detail
    });
    var price=0;
    if (this.data.checked.length==0){
      this.setData({
        price:0
      })
    }
    for(var i=0;i<this.data.checked.length;i++){
      console.log(i)
      console.log(this.data.checked[i])
      db.collection("zc_cart")
      .where({
        _id: this.data.checked[i]
      })
      .get()
      .then(res => {
        price+=res.data[0].price * res.data[0].sum * 100
        this.setData({
          price:price
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
    if (this.data.checked.length == this.data.list.length) {
      this.setData({
        checkeds: true
      });
    }else{
      this.setData({
        checkeds: false
      });
    }
  },
  onChangesum(event) {
    console.log(event.target.dataset.id);
    db.collection("zc_cart")
    .doc(event.target.dataset.id)
    .update({
      data:{
        sum: event.detail
      }
    })
    .then(res=>{
      console.log(res);
      var price=0;
      for (var i = 0; i < this.data.checked.length; i++) {
        console.log(i)
        console.log(this.data.checked[i])
        db.collection("zc_cart")
        .where({
          _id: this.data.checked[i]
        })
        .get()
        .then(res => {
          price += res.data[0].price * res.data[0].sum * 100
          this.setData({
            price: price
          })
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
  sel:function(){
    this.data.openid = wx.getStorageSync('useid')
    //console.log(this.data.openid)
    db.collection("zc_cart")
    .where({
        _openid: this.data.openid
    })
    .get()
    .then(res=>{
      //console.log(res.data);
      this.setData({
        list:res.data
      })
      if (res.data.length==0){
        this.setData({
          show: true
        })
      }else{
        this.setData({
          show: false
        })
      }
    })
    .catch(err=>{
      console.log(err);
    })
  },
  guangguang:function(){
    wx.switchTab({
      url: "/pages/home0/home0"
    })
  },
  onSubmit:function(){
    if (this.data.checked.length==0){
      wx.showToast({
        title: '您还未勾选商品',
        icon: 'none',
        duration: 2000
      })
    }else{
      var a=[]
      for (var i = 0; i < this.data.checked.length;i++){
        //console.log(this.data.checked[i]);
        a.push(this.data.checked[i])
      }
      wx.navigateTo({
        url: "/pages/settlement0/settlement0?cart_id=" + a
      })
    }
  },
  del:function(event){
    console.log(event.currentTarget.dataset.delid)
    db.collection("zc_cart")
    .doc(event.currentTarget.dataset.delid)
    .remove()
    .then(res=>{
      console.log(res)
      this.onReady()
    })
    .catch(err=>{
      console.log(err);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*wx.getStorage({
      key: 'openid',
      success: (res) => {
        this.setData({
          openid: res.data
        })
      },
    })*/
    
    //console.log(this.data.openid)
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.sel();
    /*wx.getStorage({
      key: 'openid',
      success: (res) => {
        this.setData({
          openid: res.data
        })
      },
    })*/
    //console.log(this.data.openid)
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.sel();
    /*wx.getStorage({
      key: 'openid',
      success: (res) => {
        this.setData({
          openid: res.data
        })
      },
    })*/
    
    //console.log(this.data.openid)
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