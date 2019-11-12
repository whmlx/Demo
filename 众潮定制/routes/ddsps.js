const express=require('express');
const pool=require('../pool');
var router=express.Router();

router.get('/v1/ddsps/:gouwucheid',function(req,res){
	var $gouwucheid=req.params.gouwucheid;
    console.log($gouwucheid);

    var sql=`select * from zc_cart where cart_id in (${$gouwucheid}) `;
    console.log(sql);

	pool.query(sql,function(err,result){
	if(err) throw err;
	res.send(result);
	});
});


module.exports=router;