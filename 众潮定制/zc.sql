set names utf8;

drop database if exists zc;

create database zc charset = utf8;

use zc;

/* 用户表 */
create table zc_user(	
	Uid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	UserName VARCHAR(20),  /* 用户名 */
	UserPwd VARCHAR(20),	/* 用户密码 */
	UserPhone VARCHAR(11),	/* 用户手机号 */
	Name VARCHAR(20),	/* 真实姓名 */
	Img VARCHAR(128),	/* 头像图片 */
	Sex VARCHAR(2),		/* 性别 */
	Birthday Date		/* 生日 */
);
insert into zc_user values(1,null,123456,15207394594,"雷翔",null,null,null);

/* 用户收货地址表 */
create table zc_address(
	Aid int NOT NULL PRIMARY KEY AUTO_INCREMENT, /* 收货地址ID */
	UserId int,								/* 用户ID */
	foreign key(UserId) references zc_user(Uid), /* 关联用户表用户ID */
	Consignee VARCHAR(16),		/* 收货人 */
	Province VARCHAR(16),			/* 省 */
	City VARCHAR(16),					/* 市 */
	County VARCHAR(16),				/* 县 */
	Address VARCHAR(128),			/* 详细地址 */
	Phone VARCHAR(11)     		/* 手机号 */
);
insert into zc_address values(1,1,"雷翔","湖南省","邵阳市","武冈市","步行街",15207394594);


/* 商品种类表 */
create table zc_items(
	Iid int NOT NULL PRIMARY KEY AUTO_INCREMENT, /* 商品种类ID */
	Iname VARCHAR(16)		/* 商品种类名称 */
);
insert into zc_items(Iid,Iname) values(1,"本季新品");
insert into zc_items(Iid,Iname) values(2,"特价促销");
insert into zc_items(Iid,Iname) values(3,"服装精选");
insert into zc_items(Iid,Iname) values(4,"礼品精选");

/* 商品表 */
create table zc_goods(
	Gid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Items_Id INT,
	foreign key(Items_Id) references zc_items(Iid),
	img VARCHAR(128),
	Title VARCHAR(128),
	Price DECIMAL(10,2),
	Introduction VARCHAR(256),
	Color VARCHAR(64),
	Size VARCHAR(64),
	Details VARCHAR(64)
);
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(1,1,"./image/new-1.jpg","测试商品1",333,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(2,1,"./image/new-1.jpg","测试商品2",44,"红色,绿色","L,M,XM");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(3,1,"./image/new-1.jpg","测试商品3",33,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(4,1,"./image/new-1.jpg","测试商品4",9,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(5,1,"./image/new-1.jpg","测试商品5",111,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(6,1,"./image/new-1.jpg","测试商品6",222,"红色,绿色,蓝色,桔色","大,中,小");

insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(7,3,"./image/new-1.jpg","测试商品7",333,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(8,3,"./image/new-1.jpg","测试商品8",44,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(9,3,"./image/new-1.jpg","测试商品9",33,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(10,3,"./image/new-1.jpg","测试商品10",9,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(11,3,"./image/new-1.jpg","测试商品11",111,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(12,3,"./image/new-1.jpg","测试商品12",222,"红色,绿色,蓝色,桔色","大,中,小");

insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(null,4,"./image/new-1.jpg","测试商品13",333,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(null,4,"./image/new-1.jpg","测试商品14",44,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(null,4,"./image/new-1.jpg","测试商品15",33,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(null,4,"./image/new-1.jpg","测试商品16",9,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(null,4,"./image/new-1.jpg","测试商品17",111,"红色,绿色,蓝色,桔色","大,中,小");
insert into zc_goods (Gid,Items_Id,img,Title,Price,color,size) values(null,4,"./image/new-1.jpg","测试商品18",222,"红色,绿色,蓝色,桔色","大,中,小");

#商品小图标表
create table zc_goods_small_img(
	s_img_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	zc_goods_id INT,
	img VARCHAR(256),
	foreign key(zc_goods_id) references zc_goods(Gid)
);

insert into zc_goods_small_img values(null,1,"./image/new-1-1.jpg,./image/new-1-2.jpg,./image/new-1-3.jpg,./image/new-1-1.jpg");

/* 订单表 */
create table zc_order(
Oid VARCHAR(64) NOT NULL,  #订单编号
Uname VARCHAR(64),				 #收货人姓名
Address VARCHAR(128),			 #收货人地址
good_id int,               #商品id
good_img VARCHAR(64),      #商品图片
good_title VARCHAR(64),    #商品名称
Count INT,	               #商品数量							 
Price DECIMAL(10,2),       #订单金额
state INT,								 #订单状态
PayTime DATETIME,  			   #下单时间
User_id  INT               #用户id
);
insert into zc_order values("2019092403","雷翔","湖南省邵阳市武冈市步行街",1,"./image/new-1.jpg","测试商品1",1,10,1,'2019-09-24 10:14:17',1);
insert into zc_order values("2019092402","雷翔","湖南省邵阳市武冈市步行街",1,"./image/new-1.jpg","测试商品1",1,10,2,'2019-09-24 10:10:17',1);
insert into zc_order values("2019092401","雷翔","湖南省邵阳市武冈市步行街",1,"./image/new-1.jpg","测试商品1",1,10,1,'2019-09-24 10:09:17',1);
/* 购物车表 */
create table zc_cart(
cart_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,  /*购物车id*/
good_img VARCHAR(64),															/*商品图片*/
good_title VARCHAR(64),										      	/*商品名称*/
good_spe VARCHAR(64),							            		/*商品规格*/
good_price DECIMAL(10,2),                         /*商品单价*/
good_count int,                                   /*商品数量*/
good_beizhu VARCHAR(128),                         /*促销信息*/
good_id int,																			/*商品id*/
user_id int,																			/*用户id*/
foreign key(user_id) references zc_user(Uid),
foreign key(good_id) references zc_goods(Gid)

);
insert into zc_cart values(null,"./image/new-1.jpg","测试商品1","红色|中",10,1,"测试一下",1,1);
insert into zc_cart values(null,"./image/new-1.jpg","测试商品2","红色|大",100,1,"测试一下",2,1);
insert into zc_cart values(null,"./image/new-1.jpg","测试商品3","红色|小",1000,1,"测试一下",2,1);
/*  */

/*  */

