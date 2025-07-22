function add(a, b) {
    let c = a * b;
    return c;
}

const result = add(8, 5);
console.log(result); // ✅ Outputs: 40

function calculate(...num){
return num;
}
console.log(calculate(12,23,43));

const obj={
    name:"jiya",
    age:13,
    goal:"paragliding",
    love:"momos",
    greet: function() {
    console.log("Hello " + this.name);
  }
};
function para(anyobject){
    console.log(`this is ${anyobject.name} and i am ${anyobject.age} year old.i love ${anyobject.love}`);
}
para(obj);
para({
name:"ikea",
age:33,
love:"javascript"
})