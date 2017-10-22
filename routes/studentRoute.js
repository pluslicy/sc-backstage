let express = require('express');
let route = express.Router();
let studentDB = require('../db/studentDB');
let Student = require('../model/Student')
//查询所有
route.get('/findAll',(req,resp)=>{
  studentDB.findAll().then((data)=>{
    var result = [];
    for(var index in data){
      var item = data[index];
      item.s.class = item.c;
      result.push(item.s);
    }
    resp.send(result);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
route.get('/findById',(req,resp)=>{
  studentDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  studentDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  let student = new Student();
  Object.assign(student,req.body);
  studentDB.save(student).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  let student = new Student();
  Object.assign(student,req.body);
  studentDB.update(student).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除  {ids:'[1,2,3]'}
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  studentDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

//登录
route.get('/login',(req,resp)=>{
  studentDB.findByName(req.body.name).then((data)=>{
    if(data.length>0){
      var student = data[0];
      if(student.password == req.body.password){
        //登录成功
        resp.send(student);
      }
    }
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;