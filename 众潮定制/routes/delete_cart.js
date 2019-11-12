const express=require('express');
const pool=require('../pool');
var router=express.Router();

router.delete('/v1/del_cart/:cart_id',function(req,res){
	var $cart_id=req.params.cart_id;

	var sql="delete from zc_cart where cart_id=?";

	pool.query(sql,[$cart_id],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})



module.exports=router;