       // ("ES6")//   // Module js //

// import { Express } from "express-serve-static-core"  

       // ("ES5")//   // Common js //

const express = require("express");    
const app = express();
const PORT = 5000;
app.use(express.json());


// app.get()  //  get
// app.post()  //  create
// app.put()  //  update
// app.delete()  //  delete



app.get( "/user" , ( request , response )  =>  {
    response.send("User Get");
});

app.post( "/user" , ( request , response )  =>  {
    response.send("User Post");
    // console.log(request.body);
});
app.put( "/user" , ( request , response )  =>  {
    response.send("User Update");
});
app.delete( "/user" , ( request , response )  =>  {
    response.send("User Delete");
});

app.listen( PORT , ()=> console.log(`Server running on http://localhost:${PORT}`));




// export default export  //       React Wala tarika      //
// module.exports = {}   //        Node Js Wala tarika   //