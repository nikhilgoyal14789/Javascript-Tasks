//Array Methods Program

const name=["Nikhil",24,18,"Goyal"];

//To Find the Length of Array
console.log(name.length);

//To Sort the Array
console.log(name.sort());

//To insert an element at last position
name.push(50);
console.log(name);

//To pop an element from last position
name.pop();
console.log(name);

//To join all the element and represented it as a string
console.log(name.toString());

//To join all the element and represented it as a string with a separator
console.log(name.join("->"));

//To remove an element from beginning
name.shift();
console.log(name);

//To pushing an element at beginning
name.unshift(40);
console.log(name);

const name1=[1,2,3,4];

//To concat two arrays
console.log(name.concat(name1));

//To reverse the array
console.log(name.reverse());
console.log(name1.reverse());

//To find the max element from an array
console.log(Math.max(...name1));

//To find the min element from an array
console.log(Math.min(...name1));

//Traversing the array using forEach Loop
name1.forEach(myFunction);
function myFunction(value,index,array)
{
    console.log(index+"-"+value);
}
console.log("--------------");
name1.forEach(myFunction1);
//To print only even values
function myFunction1(value,index,array)
{
    if(value%2==0)
        console.log(index+"-"+value);
}

let nums=[1,2,2,3,4,5,6];

//use map,filter and reduce method to print the sum of twice of even value

let result=nums.filter(n=>n%2===0).map(n=>n*2).reduce((a,b)=>a+b);

console.log("Result is :- "+result);
console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(2));
console.log(nums.includes(2));
console.log(nums.includes(20));

Output:-

4
[ 18, 24, 'Goyal', 'Nikhil' ]
[ 18, 24, 'Goyal', 'Nikhil', 50 ]
[ 18, 24, 'Goyal', 'Nikhil' ]
18,24,Goyal,Nikhil
18->24->Goyal->Nikhil
[ 24, 'Goyal', 'Nikhil' ]
[ 40, 24, 'Goyal', 'Nikhil' ]
[ 40, 24, 'Goyal', 'Nikhil', 1, 2, 3, 4 ][ 'Nikhil', 'Goyal', 24, 40 ]
[ 4, 3, 2, 1 ]
4
1
0-4
1-3
2-2
3-1
--------------
0-4
2-2
Result is :- 28
1
2
true
false
