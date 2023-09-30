import request from "supertest"


(async function POST() {
    let res=await request("https://reqres.in")
    .put("/api/users?page=2",{    
    "employee": "Kashif",
    "job": "Test Engineer"
})
    console.log(JSON.stringify(res.body));
})()