const express=require('express')
const app=express()
const path=require('path')

console.log(__dirname)
console.log(path.join(__dirname,'./static_test'))
//静态目录
app.use(express.static(path.join(__dirname,'./static_test')))


app.listen(3000,()=>{
    //开启服务器
    console.log('server start')
})