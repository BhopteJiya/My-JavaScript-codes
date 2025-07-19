//singleton
//Object.create();

//object literals
const obj={
    name:"jiya",
    age:13,
    goal:"paragliding",
    love:"momos",
    greet: function() {
    console.log("Hello " + this.name);
  }
};

obj.greet();  

console.log(obj);
console.log(obj.goal);
console.log(obj["goal"]);

const greet=function(){
    console.log("helooo");
}

console.log(greet());

