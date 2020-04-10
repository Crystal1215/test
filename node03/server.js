const express=require('express')
const Mail=require('./utils/mail')
console.log(Mail)
const db=require('./db/connect')
const bodyparser=require('body-parser')
const app= express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
const userRouter=require('./router/userRouter')
// app.use('/user',userRouter)

//发送邮件验证码
app.post('getMailCode',(req,res)=>{
    let {mail}=req.boby
    let code=parseInt(Math.random()*10000)
    Mail.send(mail,code)
})

app.listen(3000,()=>{
    //开启服务器
    console.log('server start')
})