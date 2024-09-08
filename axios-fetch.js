const axios = require("axios");
// by using fetch 
// async function response() {
//     const cars = await fetch("https://www.postb.in/1725736227886-5357171592768",{
//         method:"POST"
//     }
//     ) 
//     const json = await cars.text()
//     console.log(json);
// }
// response();
// by usign axios
async function fun() {
    const response = await axios("https://httpdump.app/dumps/e32375e0-81c7-48b6-b006-47f2669b87e1",{
        
        username:"harkirat",
        password:"beare 123"
    },
    {
        headers:{
            authorization:"chadanboss",
        },
    },
);
    console.log(response.data);  
}

fun()