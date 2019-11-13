Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: true
  },

  onLoad: function () {
    wx.clearStorageSync("useid")
    // var that = this;
    // // 查看是否授权
    // wx.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: function (res) {
    //           wx.login({
    //             success: res => {
    //               console.log("用户的code:" + res.code); 
    //             }
    //           });
    //         }
    //       });
    //     } else {
    //       // 用户没有授权
    //       // 改变 isHide 的值，显示授权页面
    //       that.setData({
    //         isHide: true
    //       });
    //     }
    //   }
    // });
  },

  bindGetUserInfo(e) {
    //console.log(e.detail.userInfo);
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      //console.log(1);
      wx.login({
        success: function (res) {
          //console.log(res.code);
          const code = res.code
          const appid = "wx7bb5c5df45c1ca09";
          const secret = "2da7fa88337664fb769fb22778d0bb2d";
          const url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code=" + code + "&grant_type=authorization_code";
          wx.request({
            url: url,
            success(res) {
              const data = res.data
              const openid = res.data.openid;
              //console.log(data);
              wx.setStorage({
                key: 'openid',
                data: openid
              })
              wx.setStorageSync('useid', openid)
            }
          })
        }
      })
      wx.switchTab({
        url: "/pages/home0/home0",
      })
    } else {
      //用户按了拒绝按钮
      //console.log(0);
    }
  },
})