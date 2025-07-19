
const a1=['j','i','y','a'];
const a2=['m','o','m','o'];

let merge=a1.push(a2);
console.log("a" ,a1);

let ans=a1.concat(a2);
console.log("b" ,ans);

let spread_operator = [...a1,...a2]
console.log(spread_operator);

const a3=[14,4,3,22,,44,,45,[3,4,5,3,2,4],4,5,3,2,2];
const changea3=a3.flat(Infinity);
console.log(changea3);