const fs= require('fs')
// //同步
// let dirs=fs.readdirSync('./')
// console.log(dirs)

// //创建文件 覆盖写入
// fs.writeFile('name.txt','今天天气不错',(err)=>{
//     console.log(err)
// })

// //写入文件
// fs.appendFile('name.txt','你好啊韩梅梅',(err)=>{
//     console.log(err)
// })

// //读取文件
// fs.readFile('name.txt','utf8',(err,msg)=>{
//     console.log(err)
//     console.log(msg)
//     //默认二进制 buffer
//     // console.log(msg.toString('utf8'))
// })

// //删除文件
// fs.unlink('./name.txt',(err)=>{
//     console.log(err)
// })

fs.readdir('./node02',(err,dirs)=>{
    for (let index = 0; index < dirs.length; index++) {
        console.log(dirs[index]);
        
    }
})

fs.stat('./node02',(err,stats)=>{
    if(stats.isFile()){
        console.log('is file')
    }else{
        console.log('is dir')
    }
})