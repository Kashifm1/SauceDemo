import { data } from "jquery";
const fs=require ('fs') 
let testData=JSON.parse(fs.readFileSync('../resource/data.json'))
testData.forEach(({username,password})=> {
    console.log(username, password)
});