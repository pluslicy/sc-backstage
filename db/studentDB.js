let pool = require('./pool');

module.exports = {
    //通过关键字查询
    query(keys){
      var sql = "select * from xk_student where name like '%"
        +keys+"%' or gender like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from xk_student where id = "+id;
      return pool.execute(sql);
    },
    //通过姓名查找
    findByName(name){
      var sql = "select * from xk_student where name = '"+name+"'";
      return pool.execute(sql);
    },
    findAll(){
      //var sql = "select * from xk_student";
      var sql = 'SELECT s.*,c.*'
        +' FROM sms.xk_student as s left join xk_clazz as c'
        +' ON c.id = s.class_id';
      return pool.execute({sql:sql,nestTables:true});
    },
    batchDelete(ids){
      var sql = "delete from xk_student where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(student){
      var sql = "insert into xk_student values(null,'"
      +student.name+"','"
      +student.gender+"','"
      +student.birth+"',"
      +student.class_id+",'"
      +student.password+"')";
      return pool.execute(sql);
    },
    update(student){
      var sql = "update xk_student set name = '"
      +student.name+"',gender = '"
      +student.gender+"',birth = '"
      +student.birth+"',class_id="
      +student.class_id+",password='"
      +student.password+"' where id ="
      +student.id;
      console.log(sql);
      return pool.execute(sql);
    }
}
