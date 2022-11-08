// const myArray=[
        
//     [{
//         name: "aijaj",
//         email: "aijaj@gmail.com",
//         id: 1,
//         phone: 8742479896
//     },
//     ],
//    [ {
//         name: "rahul",
//         email: "aijaj@gmail.com",
//         id: 2,
//         phone: 8742479878
//     },
//     {
//         name: "mahesh",
//         email: "mahesh@gmail.com",
//         id: 3,
//         phone: 8742479878
//     },
// ],
//     [{
//         name: "krish",
//         email: "aijaj@gmail.com",
//         id: 4,
//         phone: 8742479878
//     },
//     {
//         name: "prince",
//         email: "mahesh@gmail.com",
//         id: 5,
//         phone: 8742479878
//     },
//     {
//         name: "elon",
//         email: "elon@gmail.com",
//         id: 6,
//         phone: 8742479878
//     },
//     {
//         name: "sonu",
//         email: "elon@gmail.com",
//         id: 7,
//         phone: 8742479878
//     }],
//    [
//     {
//         name: "krish",
//         email: "aijaj@gmail.com",
//         id: 8,
//         phone: 8742479878
//     },
//     {
//         name: "prince",
//         email: "mahesh@gmail.com",
//         id: 9,
//         phone: 8742479878
//     },
//     {
//         name: "elon",
//         email: "elon@gmail.com",
//         id: 10,
//         phone: 8742479878
//     },{
//         name: "sonu",
//         email: "elon@gmail.com",
//         id: 11,
//         phone: 8742479878
//     },
//     {
//         name: "krish",
//         email: "aijaj@gmail.com",
//         id: 12,
//         phone: 8742479878
//     },
//     {
//         name: "prince",
//         email: "mahesh@gmail.com",
//         id: 13,
//         phone: 8742479878
//     },
//     {
//         name: "elon",
//         email: "elon@gmail.com",
//         id: 14,
//         phone: 8742479878
//     },
//     {
//         name: "sonu",
//         email: "elon@gmail.com",
//         id: 15,
//         phone: 8742479878
//     }]
// ]


// export default myArray;





const arr=[
    {
    name: "aijaj",
    email: "aijaj@gmail.com",
    id: 1,
    phone: 8742479896
},
{
    name: "rahul",
    email: "aijaj@gmail.com",
    id: 2,
    phone: 8742479878
},
{
    name: "mahesh",
    email: "mahesh@gmail.com",
    id: 3,
    phone: 8742479878
},
{
    name: "krish",
    email: "aijaj@gmail.com",
    id: 4,
    phone: 8742479878
},
{
    name: "prince",
    email: "mahesh@gmail.com",
    id: 5,
    phone: 8742479878
},
{
    name: "elon",
    email: "elon@gmail.com",
    id: 6,
    phone: 8742479878
},
{
    name: "sonu",
    email: "elon@gmail.com",
    id: 7,
    phone: 8742479878
},
{
    name: "krish",
    email: "aijaj@gmail.com",
    id: 8,
    phone: 8742479878
}
]


const Arr3=[];
for (var i=0; i<arr.length; i++){

let arr2=[];
let po=Math.pow(2,i)
for (var j=0; j<po; j++){

if(arr[j]!=undefined){
  if((arr.length)>=po){
      arr2.push(arr[j])
    }
  }
}
if(arr2.length>0){
Arr3.push(arr2)
}
}

console.log("arr3", Arr3)




export default Arr3;