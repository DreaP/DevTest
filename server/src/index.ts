import express from "express";
import { graphqlHTTP } from "express-graphql";
import {schema} from './Schema'
import cors from "cors"; 
//createConnection is now depreciated updated w/ new way of connection.
import { createConnection, DataSource } from "typeorm";


const main = async() => {
const dataSource = new DataSource({
    type: "mysql",
    database: "devtestcrud",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [],
});

await dataSource.initialize();

//connection.manager./* your stuff...*/

   const app = express()
   app.use(cors())
   app.use(express.json())
   app.use("/graphql", graphqlHTTP({
       schema,
       graphiql: true
   }));
   app.listen(3000, () => {
       console.log("Connection is sucessfully running on port 3000");
   });
};

main().catch((err) =>{
    console.log(err);
});