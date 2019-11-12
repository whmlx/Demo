const express=require('express');
const pool=require('../pool');
var router=express.Router();

router.post('/v1/baocunshouhuodizhi',function(req,res){
    var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $province=req.body.province;
	var $city=req.body.city;
	var $district=req.body.district;
	var $xiangxidizhi=req.body.xiangxidizhi;
	var $iphone=req.body.iphone;

	var sql="insert into zc_address values(?,?,?,?,?,?,?,?)";

	pool.query(sql,[,$uid,$uname,$province,$city,$district,$xiangxidizhi,$iphone],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})


module.exports=router;