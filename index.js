import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema} from "graphql-tools"
// console.log("start")

//더미 데이터 
const books = [
    {title:"문제는 경제다", author:"김계동"},
    {title:"82년생", author:"공지영"},
    {title:"88세대", author:"유시민"},
]

const typeDefs = `
    type Query{
        books : [Book]
    }
    type Book{
        title:String
        author:String
    }
`
const schema = makeExecutableSchema ({
    typeDefs,
})  

const app = express();
// app.get('/',(req,res)=>{
//     res.send("하하하호호호")
// })

app.use("/graphql", bodyParser.json(), graphqlExpress({schema}))

app.use("/graphiql", graphiqlExpress({endpointURL:"/graphql"}))

app.listen(3000, ()=>{
    console.log("서버가 시작되었습니다!")
}) 
