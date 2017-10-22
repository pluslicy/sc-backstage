require('babel-polyfill');
var Student = require('../model/Student');
var studentDB = require('./studentDB');

/*
//查询所有
studentDB.findAll().then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});
*/
/*
//增加
var student = new Student(null,'王五','男','1996-01-01',null);
studentDB.save(student).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});
*/
/*
//修改
var student = new Student(15,'王五','男','1996-03-01',null);
studentDB.update(student).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
})
*/
/*
//删除
var ids = [11,12];
studentDB.batchDelete(ids).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
})
*/
studentDB.query('男').then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
})