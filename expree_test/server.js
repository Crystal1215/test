const express=require('express')
const app=express()
const bodyparser=require('body-parser')
//解析表单数据
app.use(bodyparser.urlencoded({extended:false}))

//解析json
app.use(bodyparser.json())
// api接口
app.get('/user/login',(req,res)=>{
    console.log(req.query)
    let {us,ps} =req.query
    if(us=='wangyi' && ps == 456){
        res.send({err:0,msg:'login OK'})
    }
    else{

    }
})

app.post('/user/req',(req,res)=>{
    //express 不能直接解析消息体  body-parser
    console.log(req.body)
    // let {us,ps} =req.body
    // if(us=='wangyi' && ps == 456){
        res.send({err:0,msg:'ua pass no OK'})

    // }
})

app.listen(3000,()=>{
    //开启服务器
    console.log('server start')
})
//192.168.1.2:3000/user/login

//postman