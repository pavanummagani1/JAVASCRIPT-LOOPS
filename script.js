//1. Write a for loop to print the numbers from 1 to 20.
for(var i = 1; i<=20; i++){
    console.log(i);
}


//2. Create a for loop to print the squares of numbers from 1 to 10.
for(var i = 1; i<=10; i++){
    console.log(i**2);
}

//3. Use a for loop to print the first 10 multiples of 5.
for(var i = 1; i<=10; i++){
    console.log(i*5);
}


//4. Write a for loop to print numbers from 20 to 1 in reverse order.
for(var i = 20; i>=0; i--){
    console.log(i);
}

//5. Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).
for(var i = 20; i>=0; i--){
    if(i%2==0){
        console.log(i);
    }
}

/*
6.	Print each element of the array
–	Input: [10, 20, 30, 40, 50]

–	Expected Output:
 	10  
    20  
    30  
    40  
    50  
*/
arr = [10,20,30,40,50]
for(var i =0; i<=(arr.length-1); i++){
    console.log(arr[i]);
}


/*
7.	Print the index of each element along with its value
–	Input: ['apple', 'banana', 'cherry']

–	Expected Output:
 	Index 0: apple  
    Index 1: banana  
    Index 2: cherry  

*/

array = ['apple','banana','cherry']
for(var j =0; j<=(array.length-1); j++){
    console.log(`Index ${j}:`,array[j]);
}

//8. Write a program to calculate the sum of numbers from 1 to 100 using a loop.
var sum=0;
for(var i = 1;i<=100; i++){
    sum = sum+i;
}
console.log(sum);

