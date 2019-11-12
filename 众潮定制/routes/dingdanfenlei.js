const express=require('express');
const pool=require('../pool');
var router=express.Router();


router.get('/v1/dingdanfenlei:n&:a',function(req,res){
    var $n=req.params.n;
    var $a=req.params.a;
    console.log($n);
    console.log($a);
	var sql="select * from zc_order where User_id=? and state=?";

	pool.query(sql,[$n,$a],function(err,result){
		if(err) throw err;
        res.send(result);
        console.log(result);
	})
})




module.exports=router;