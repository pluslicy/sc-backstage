let pool = require('./pool');
module.exports = {
     //通过关键字查询
    query(keys){
      var sql = "select * from xk_clazz where name like '%"+keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from xk_clazz where id = "+id;
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from xk_clazz";
      return pool.execute(sql);
    },
    //批量删除
    batchDelete(ids){
      var sql = "delete from xk_clazz where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    //保存
    save(clazz){
      var sql = "insert into xk_clazz values(null,'"+clazz.name+"')";
      return pool.execute(sql);
    },
    //更新
    update(clazz){
      var sql = "update xk_clazz set name = '"+clazz.name+"' where id ="+clazz.id;
      return pool.execute(sql);
    }
}
