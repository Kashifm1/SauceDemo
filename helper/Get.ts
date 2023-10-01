import request from "supertest"

// console.log(request.length);
// console.log(typeof request);
(async function GET() {
    let res=await request("https://reqres.in")
    .get("/api/users?page=2")
    console.log(JSON.stringify(res.body));
})()


/**
 * https://reqres.in
 * /api/users?page=2
 * {pages:2}
 */