const express=require('express');
const pool=require('../pool')
var router=express.Router();

router.get('/v1/login/:phone1&:pwd1',function(req,res){
	var $phone1=req.params.phone1;
	var $pwd1=req.params.pwd1;
    //console.log($phone1,$pwd1);
	var sql="select * from zc_user where UserPhone=? and UserPwd=?";

	pool.query(sql,[$phone1, $pwd1],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('0');
        }
    })  
});


module.exports=router;