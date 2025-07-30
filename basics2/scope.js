if(true){
let a=900;
var b=300;
const c=90;
}
/*
//let a=100;
//var b=355;
console.log("inside",a);
console.log("inside",b);
console.log("inside",c);

console.log("out",a);
console.log("outside",b);
console.log("outside",c);
*/


{/*%%%%%%%% % % % % % %%%%%%%%%% % % % %% % % % % % %% %%%  HOISTING % % % % %    %  % % % % % % % % % % % % % % % % % %%%%%%%%%%%% */}

console.log(A(5));
function A(num1){
    return num1 + 1;
}

// Function Expression Not Hoisted

console.log(B(5));

var B = function(num1){
   return num1 + 2;
}
