var express = require('express');
var Usesql = require('../modules/usesql');
var db = require('../modules/database');
var router = express.Router();
/* GET home page. */
// db.getConnection(function(err,connection){
arr=[];arr3=[];arr4=[];quanbu=[];zuijia=[];jiachang=[];zaocan=[];meishi=[];gaodian=[];
// connection.query('SELECT * FROM tuijian1',(err,result)=>{
//     	if(!err){
//         	for(var i=0;i<result.length;i++){
//             	arr3.push(result[i]);
//             }
//           for(var i=13;i<21;i++){
//             	quanbu.push(result[i]);
//             }
//           for(var i=21;i<29;i++){
//             	zuijia.push(result[i]);
//             }
//           for(var i=29;i<37;i++){
//             	jiachang.push(result[i]);
//             }
//           for(var i=37;i<45;i++){
//             	zaocan.push(result[i]);
//             }
//           for(var i=45;i<51;i++){
//             	meishi.push(result[i]);
//             }
//           for(var i=51;i<58;i++){
//             	gaodian.push(result[i]);
//             }
//         }
//     })
//   connection.query('SELECT * FROM tuijian2',(err,result)=>{
//     	if(!err){
//         	for(var i=0;i<result.length;i++){
//             	arr4.push(result[i]);
//             }
//         }
//     })
//   connection.query('SELECT * FROM t1_xiangqing',(err,result)=>{
//     	if(!err){
//         	for(var i=0;i<result.length;i++){
//               	result[i].buzhou=result[i].buzhou.split(";");
//             	arr.push(result[i]);
//             }
//         }
//     })
// connection.release();
// })
var Home=(function(){
function Home(id,src,p){
        this.id=id;
        this.src=src;
        this.p=p;
}
        return Home;
}());
var lunbo1=[
        new Home(1,'http://39.96.21.142:3000/images/lunbo/lunbo1.jpg','lunbo1'),
        new Home(2,'http://39.96.21.142:3000/images/lunbo/lunbo2.jpg','lunbo2'),
        new Home(3,'http://39.96.21.142:3000/images/lunbo/lunbo3.jpg','lunbo3'),
]

var Shicai=(function(){
function Shicai(id,src,name,jianjie,gongxiao,yiji,zuofa){
        this.id=id;
        this.src=src;
        this.name=name;
  		this.jianjie=jianjie;
  		this.gongxiao=gongxiao;
  		this.yiji=yiji;
  		this.zuofa=zuofa;
}
        return Shicai;
}());
var arr1=[];
var arr2=[];
 setTimeout(function(){ for(var i=0;i<6;i++){arr1.push(arr3[i]);}},3000);
 setTimeout(function(){ for(var i=0;i<6;i++){arr2.push(arr4[i]);}},3000);
var homearr=[arr1,lunbo1,arr2];

router.get('/',function(req,res){
        res.json(homearr);
})

router.get('/1',function(req,res){
  		var x=Math.floor(Math.random()*8);
  		arr1=[];
  		for(var i=0;i<6;i++){
          arr1.push(arr3[(i+x)%8]);
        }
        res.json(arr1);
})

router.get('/2',function(req,res){
  		var y=Math.floor(Math.random()*11);
  		arr2=[];
  		for(var i=0;i<6;i++){
          arr2.push(arr4[(i+y)%11]);
        }
        res.json(arr2);
})
router.get('/tuijian/:id',function(req,res){
  var id=req.params.id;
	res.json(arr[id-1]);
})
router.get('/xiangqing/:id',function(req,res){
	var id=req.params.id;
  	id=parseInt(id);
  	switch(id){
      case 1:
        res.json(quanbu);
        break;
      case 2:
        res.json(zuijia);
        break;
      case 3:
        res.json(jiachang);
        break;
      case 4:
        res.json(zaocan);
        break;
      case 5:
        res.json(meishi);
        break;
      case 6:
        res.json(gaodian);
        break;
      default:
        res.end("error");
             }
  
})
module.exports = router;
