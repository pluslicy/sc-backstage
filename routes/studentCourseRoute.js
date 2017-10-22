let express = require('express');
let StudentCourseDB = require('../db/studentCourseDB');
let Student = require('../model/Student')
let Course = require('../model/Course')

let route = express.Router();
/*
  选课
  studentId 
  courseId
*/
route.get('/selectCourse',(req,resp)=>{
  StudentCourseDB.selectCourse(+req.query.studentId,+req.query.courseId)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});


/*
  通过所有选课信息
*/
route.get('/findSelectedCourse',(req,resp)=>{
  StudentCourseDB.findSelectedCourse()
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
/*
  通过学生ID查询已经选课信息
  @param studentId
*/
route.get('/findSelectedCourseByStudentId',(req,resp)=>{
  StudentCourseDB.findSelectedCourseByStudentId(req.query.studentId)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

/*
  取消选课
  @param studentId，courseId
*/
route.get('/cancelCourse',(req,resp)=>{
  StudentCourseDB.cancelCourse(req.query.studentId,req.query.courseId)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

/*
  打分
  @param 选课id，分数grade
*/
route.get('/mark',(req,resp)=>{
  StudentCourseDB.score(req.query.id,req.query.grade)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;