// const sample = require('./data.json');
// function func() {
//     fetch("./data.json")
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => console.log(data));
// }
import data from "./data.json"
 export default async() =>{
    const value= await JSON.parse(JSON.stringify(data))
};