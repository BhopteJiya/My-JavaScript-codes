/*
shallow copy-changes occur to the original object if we do changes to the copy
deep copy-changes do not occur to the object if we do changes to the copy

array properties:
1.indexing zero,
2.shallow copy
*/
let arr=[12,218,'jiy','kia',777];
/*
console.log(arr[0]);

arr.push("astroid");
arr.push(223)
console.log(arr);
console.log(arr.shift());
console.log(arr.unshift());
console.log(arr.pop());
console.log(arr.indexOf(8));
*/
//slice-no chnge in orignal array ;
//splice-change in original arr;

let a1 =[1,12,2,3,3];
console.log(a1.slice(1,3))
console.log(a1);

let a2=[12,3,4,5,6]
console.log(a2.splice(1,3));
console.log(a2);