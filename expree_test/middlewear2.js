const express=require('express')
const app=express()
//拦截器中间件

//局部中间件
app.get('/test',(req,res,next)=>{
    console.log('fun1')
    next()
},
(req,res)=>{
    //express 不能直接解析消息体  body-parser
    console.log(req.query)
    console.log('fun2')
})

app.listen(3000,()=>{
    //开启服务器
    console.log('server start')
})