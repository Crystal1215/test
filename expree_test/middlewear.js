const express=require('express')
const app=express()
//拦截器中间件
app.use('/',(req,res,next)=>{
    //express 不能直接解析消息体  body-parser
    console.log(req.query)
    let {token} =req.query
    if(token){
      next()

    }
    else{
        res.send('缺少token')
    }
})
//=
app.use((req,res,next)=>{})

app.get('/test',(req,res)=>{
    //express 不能直接解析消息体  body-parser
    console.log(req.query)
    let {token} =req.query
    if(token){
        res.send({err:0,msg:' OK'})

    }
    else{
        res.send({err:-1,msg:'no  OK'})
    }
})

app.listen(3000,()=>{
    //开启服务器
    console.log('server start')
})