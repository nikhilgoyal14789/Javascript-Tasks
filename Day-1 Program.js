//Q.1 Write a Synchronous Function and Asynchronous Function in Javascript.

//Synchronous Function:-

function fun1()
{
    console.log("Function-1 is starting");
    console.log("Function-1 is ending");
}

function fun2()
{
    console.log("Function-2 is starting"); 
    console.log("Function-2 is ending");
}

fun1();
fun2();

//Asynchronous Function:-

function fun1()
{
    console.log("Function-1 is starting");
    fun2();
    console.log("Function-1 is ending");
}

fun2=()=>
{
    setTimeout(()=>
    {
    console.log("Function-2 is starting");    
    },2000);
   
}

fun1();


//Q.2 Write four Promises and run all the promises sequentially.

let promise1 = new Promise((resolve, reject) => {
        resolve("Hello Promise 1!");
    });
  
let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Promise 2!");
        }, 1000);
    });

let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Promise 3!");
        }, 1000);
    });

let promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Promise 4!");
        }, 1000);
    });
  
Promise.all([promise1, promise2, promise3, promise4])
        .then((result) =>console.log(result));
