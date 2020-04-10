const fs=require('fs')
function isExit(){
    return new Promise((reslove,reject)=>{
        fs.stat('./hehe.js',(err,stats)=>{
            if(err){
                reject('文件不存在')
            }
            else{
                reslove('文件存在')
            }
        })
    })
}

function delFile(){
    return new Promise((reslove,reject)=>{
        fs.unlink('./hehe.js',(err)=>{
            if(err){
                reject('删除失败')
            }
            else{
                reslove('删除成功')
            }
        })
    })
}

//链式调用 多个then 一个catch

// 大量的异步操作需要顺序执行 返回promise对象 防止回调地狱
isExit()
.then(()=>{
    console.log('存在')
    return delFile()
})
.then(()=>{
    console.log('删除文件成功')
    throw new Error('手动终止')//结束
})
.then(()=>{
    console.log('111111')
})
.then(()=>{
    console.log('222222')
})
.catch((err)=>{
    console.log('aa')
    console.log(err)
})