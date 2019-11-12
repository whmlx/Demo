const express=require('express');
const pool=require('../pool')
var router=express.Router();

router.get('/v1/search/:search',function(req,res){
	var $search=req.params.search;
    console.log($search);
    //console.log($phone1,$pwd1);
	var sql="select * from zc_goods where Title like ?";

	pool.query(sql,['%'+$search+'%'],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('0');
        }
    })  
});


module.exports=router;