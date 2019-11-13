//app.js服务端程序
//1.下载三个模块
//cors   完成跨域处理
//express-session  session对象
//MySQL  数据库驱动
//express  web服务器
//下载命令 npm i cors express-session express mysql
//2.将以上四个模块引入到当程序
const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const session=require("express-session");

const fs=require("fs");
const multer=require("multer");


//3.创建数据库连接池（池 提高效率）
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:3306,
    database:"xh",
    connectionLimit:15
})
//4.配置跨域模块
//允许哪个程序跨域访问服务器
//脚手架：3001  服务器：4000
var server=express();
server.use(cors({
    //允许程序列表
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    credentials:true//每次请求需要验证
}));
//5.配置session模块
server.use(session({
    secret:"128位字符串",//安全字符串`
    resave:true,//请求时更新数据
    saveUninitialized:true//保持初始数据
}))
//6.配置项目静态目录
server.use(express.static("public"));
server.use(express.static("upload"));
//7.创建express对象绑定
server.listen(4000)


var createFolder=function(folder){
  try{
      fs.accessSync(folder);
  }catch(e){
      fs.mkdirSync(folder);
  }
}
var uploadFolder='./upload/';
createFolder(uploadFolder);

var storage=multer.diskStorage({
  destination:function(req,file,cb){
      // console.log(file);
      cb(null,uploadFolder);
  },
  filename:function(req,file,cb){
      //console.log(file);
      // var idx=file.originalname.lastIndexOf('.');
      // var suff=file.originalname.substring(idx);
      // console.log(suff);
      //console.log(file.fieldname);
      var user_uid=file.originalname.split('.')[0];
      console.log(user_uid);
      var file=file.fieldname+'-'+Date.now()+file.originalname;
      cb(null,file);
      var sql ="update xh_user set UserImg = ? where Uid = ?";
      
      pool.query(sql,[file,user_uid],function(err,result){
          if(err) throw err;
      })
  }
});
var upload=multer({storage:storage});
//console.log(upload);
server.post("/upload",upload.single('logo'),function(req,res,next){
  //console.log(req.file);
  res.send({ret_code:'0'});
})
server.get("/login",(req,res)=>{
  var UserName=req.query.UserName;
  var UserPwd=req.query.UserPwd;
  //console.log(UserName,UserPwd);
  var sql="select Uid,UserName from xh_user where UserName=? and UserPwd=md5(?)"

  pool.query(sql,[UserName,UserPwd],(err,result)=>{
      if(err)throw err;
      //console.log(result);
      if(result.length==0){
          res.send({code:-1,msg:"用户名或密码错误"})
      }else{
          req.session.uid=result[0].Uid;
          //console.log(req.session.uid);
          res.send({code:1,msg:"登录成功",result:result[0].Uid,UserName:result[0].UserName});
      }
  })
})

server.get("/order",(req,res)=>{
  var Uid=req.query.Uid;
  //console.log(Uid);
  
  var sql="select * from xh_order where Uid=?";
  pool.query(sql,[Uid],(err,result)=>{
      if(err) throw err;
      res.send(result);
  })
})

server.get("/order_status",(req,res)=>{
  var Uid=req.query.Uid;
  var status=req.query.status;
  //console.log(Uid,status);
  
  var sql="select * from xh_order where Uid=? and OrderStatus=?";
  pool.query(sql,[Uid,status],(err,result)=>{
      if(err) throw err;
      res.send(result);
  })
})

server.get("/order_details",(req,res)=>{
  var Oid=req.query.Oid;
  console.log(Oid);
  var sql="select * from xh_order where Oid=?";
  pool.query(sql,[Oid],(err,result)=>{
      if(err) throw err;
      res.send(result);
      //console.log(result);
  })
})

server.get("/goods",(req,res)=>{
  //2:接收二个参数 
  //  pno 页码 pagePageSize 页大小
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  //3:设置默认值 pno=1 pageSize=4
  if(!pno){pno=1}
  if(!ps){ps=1}
  //4:计算第一问号值
  var off = (pno-1)*ps;
  //5:对pageSize转int
  ps = parseInt(ps); 
  //6:创建sql语句
  //自己写:库名;表名;列名 小写
  var sql = "SELECT * FROM xh_good LIMIT ?,?";
  //7:执行sql语句
  pool.query(sql,[off,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
  //8:将返回结果发送脚手架 
})

server.get("/Userimg",(req,res)=>{
  var Uid=req.query.Uid;
  console.log(Uid);
  //console.log(UserName,UserPwd);
  var sql="select UserImg from xh_user where Uid=?"

  pool.query(sql,[Uid],(err,result)=>{
      if(err)throw err;
      console.log(result);
      res.send(result);
  })
})



server.get("/Product",(req,res)=>{
    var id = req.query.id;
    var sql = "SELECT * FROM xh_goods where kind_id=?";
    //7:执行sql语句
    pool.query(sql,id,(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:"查询成功",data:result})
    })
    //8:将返回结果发送脚手架 
    })


    server.get("/Product_1",(req,res)=>{
      var id = req.query.id;
      var sql = "SELECT * FROM xh_goods where gid=?";
      //7:执行sql语句
      pool.query(sql,id,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询成功",data:result})
      })
      //8:将返回结果发送脚手架 
      })    

      server.get("/Product_2",(req,res)=>{
        var id = req.query.id;
        var sql = "SELECT * FROM xh_goods where kind_id=? order by rand() limit 2 ";
        //7:执行sql语句
        pool.query(sql,id,(err,result)=>{
          if(err)throw err;
          res.send({code:1,msg:"查询成功",data:result})
        })
        //8:将返回结果发送脚手架 
        })  

        server.get("/Product_3",(req,res)=>{
          var name = req.query.name;
          var sql = "SELECT * FROM xh_goods where title=?";
          //7:执行sql语句
          pool.query(sql,name,(err,result)=>{
            if(err)throw err;
            res.send({code:1,msg:"查询成功",data:result})
          })
          //8:将返回结果发送脚手架 
          })

server.get("/All",(req,res)=>{
    var sql = "SELECT * FROM xh_goods order by rand() limit 4";
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:"查询成功",data:result})
    }) 
})

server.get("/All_1",(req,res)=>{
  var sql = "SELECT * FROM xh_goods";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})

server.get("/News",(req,res)=>{
  var sql = "SELECT * FROM xh_news order by rand() limit 3";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})

server.get("/News_1",(req,res)=>{
  var sql = "SELECT * FROM xh_news";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})

server.get("/News_2",(req,res)=>{
  var id = req.query.id;
  console.log(id);
  var sql = "SELECT * FROM xh_news where xh_news_id=?";
  pool.query(sql,id,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})

server.get("/News_3",(req,res)=>{
  var name = req.query.name;
  var sql = "SELECT * FROM xh_news where xh_news_family=?";
  pool.query(sql,name,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})


server.get("/add",(req,res)=>{
  var uname=req.query.uname;
  var uphone=req.query.uphone;
  var beizhu=req.query.beizhu;
  var gid=req.query.Gid;
  var uid=req.query.uid;
  var img=req.query.img;
  var title=req.query.title;
  var details=req.query.details;
  var date=req.query.date;
  var number=date+uid;

  var sql = `INSERT INTO xh_order VALUES(null,'${number}','${img}','${title}','${details}','','','2','${uid}','${gid}','${uname}','${uphone}','${beizhu}','${date}')`;
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})

server.get("/search",(req,res)=>{
  var value1=req.query.value1;
  console.log(value1);
  var sql = `select * from xh_goods where title like '%${value1}%'`;
  pool.query(sql,[value1],(err,result)=>{
    if(err)throw err;
    console.log(result);
    res.send({code:1,msg:"查询成功",data:result})
  }) 
})

server.get("/order_sum",(req,res)=>{
  var title=req.query.title;
  //console.log(Oid);
  var sql="select * from xh_order where Ordertitle=?";
  pool.query(sql,[title],(err,result)=>{
      if(err) throw err;
      res.send(result);
      //console.log(result);
  })
})