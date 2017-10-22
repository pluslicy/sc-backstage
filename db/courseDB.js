let pool = require('./pool');
module.exports = {
     //通过关键字查询
    query(keys){
      var sql = "select * from xk_course where name like '%"
        +keys+"%' or credit like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from xk_course where id = "+id;
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from xk_course";
      return pool.execute(sql);
    },
    //批量删除
    batchDelete(ids){
      var sql = "delete from xk_course where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    //保存
    save(course){
      var sql = "insert into xk_course values(null,'"+course.name+"',"+course.credit+")";
      return pool.execute(sql);
    },
    //更新
    update(course){
      var sql = "update xk_course set name = '"+course.name+"',credit = "+course.credit+" where id ="+course.id;
      return pool.execute(sql);
    }
}
