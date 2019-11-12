const express=require('express');
const router=require('./routes/reg.js');
const router1=require('./routes/login.js')
const router2=require('./routes/goodslist.js')
const router3=require('./routes/good.js')
const router4=require('./routes/cart.js')
const router5=require('./routes/upd.js')
const router6=require('./routes/good_s_img.js')
const router7=require('./routes/add_cart.js')
const router8=require('./routes/delete_cart.js')
const router9=require('./routes/dingdan.js')
const router10=require('./routes/dingdanfenlei.js')
const router11=require("./routes/shouhuodizhi.js")
const router12=require("./routes/tianjiashouhuodizhi.js")
const router13=require("./routes/ddsps.js")
const router14=require("./routes/search.js")

const bodyParser=require('body-parser');

var app=express();
app.listen(8080);

app.use(express.static('./public'));
app.use(express.static('./image'));

app.use(bodyParser.urlencoded({
	extended:false
}))

app.use('/reg',router);
app.use('/login',router1);
app.use('/goodslist',router2);
app.use('/good',router3);
app.use('/cart',router4);
app.use('/upd',router5);
app.use('/good_s_img',router6);
app.use('/add_cart',router7);
app.use('/del_cart',router8);
app.use('/dingdan',router9);
app.use('/dingdanfenlei',router10);
app.use('/shouhuodizhi',router11);
app.use('/tianjiashouhuodizhi',router12);
app.use('/ddsps',router13);
app.use('/search',router14);