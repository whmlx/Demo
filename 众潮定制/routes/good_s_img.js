const express=require('express');
const pool=require('../pool');
var router=express.Router();


router.get('/v1/good_s_img/:goods_id',function(req,res){
    var $goods_id=req.params.goods_id;
    //console.log($goods_id);
	var sql="select * from zc_goods_small_img where zc_goods_id=?";
    
	pool.query(sql,[$goods_id],function(err,result){
		if(err) throw err;
        //console.log(result);
        if(result.length>0){
            res.send(result);
        }else{
            res.send("1");
        }
	})
})




module.exports=router;