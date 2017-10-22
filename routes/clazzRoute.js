let express = require('express');
let route = express.Router();
let clazzDB = require('../db/clazzDB');
let Clazz = require('../model/Clazz')
//查询所有
route.get('/findAll',(req,resp)=>{
  clazzDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
route.get('/findById',(req,resp)=>{
  clazzDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  clazzDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  let clazz = new Clazz();
  Object.assign(clazz,req.body);
  clazzDB.save(clazz).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  let clazz = new Clazz();
  Object.assign(clazz,req.body);
  clazzDB.update(clazz).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  clazzDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;