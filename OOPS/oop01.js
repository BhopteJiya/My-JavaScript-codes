/*const user={
    name:'jiyahh',
    age:13,
    dob:2004
}
    */
//console.log(user);
//console.log(user.dob);

//constructor---------------

function userr(name ,age, year){
    this.name=name;
    this.age=age;
    this.year=year;

}
const u1=new userr('jia',23,3333);
const u2=new userr('khushi',34,2222)
console.log(u1);
console.log(u2);