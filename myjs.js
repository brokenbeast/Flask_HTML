//note /*note */
//alert("hello world")
console.log("hello,world")

var h1 = document.querySelector("h1")
//let h1 =document.querySelector("h1")
h1.textContent = "hellow,worldd"

function myfunction(v1,v2){
	let ret = v1 + v2;
	let ret2 = v1 * v2;
	return [ret,ret2]
}

console.log(myfunction(10,20))
