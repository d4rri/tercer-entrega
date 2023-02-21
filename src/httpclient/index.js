import http from "http";
import https from "https";

const URL = "jsonplaceholder.typicoe.com";


const options = {
    hostname:URL,
    port:443,
    path:"/users",
    method:"GET"
};

const req = https.request(options,(res)=>{
    let datos ="";
    res.on("data",(chunk)=>{
        datos+=chunk.toString();
    });

    res.on("end",()=>{
        const response = JSON.parse(datos);
        console.log(response)
    })
});

req.on("error",(error)=>console.log(error))

req.end();