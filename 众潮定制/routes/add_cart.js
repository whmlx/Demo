const express=require('express');
const pool=require('../pool');
var router=express.Router();
//注册
router.post('/v1/add_cart',function(req,res){
	var $good_img=req.body.good_img;
	var $good_title=req.body.good_title;
	var $guige=req.body.guige;
	var $goodsprice=req.body.goodsprice;
	var $goods_id=req.body.goods_id;
	var $uid=req.body.uid;
	//console.log($uid);
	var $cart_count=req.body.cart_count;
	console.log($cart_count);

	if($guige=="undefined|undefined"){
		res.send("10");
		return;
	}
    

	var sql="insert into zc_cart (good_img,good_title,good_spe,good_price,good_count,good_id,user_id) values(?,?,?,?,?,?,?)";

	pool.query(sql,[$good_img,$good_title,$guige,$goodsprice,$cart_count,$goods_id,$uid],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})

module.exports=router;