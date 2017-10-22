class Student{
  constructor(id,name,gender,birth,class_id=null){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.birth = birth;
    this.class_id = class_id;
  }
}

module.exports = Student;