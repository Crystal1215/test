const fs=require('fs')
// console.log(fs)
function delfile(){
    return new Promise((reslove,reject)=>{
        // reslove('成功jjjj')
        // fs.unlink('./hehe.js',(err)=>{
        //     if(err){
                reject('失败了')
            // }
            // else{
            //     reslove('成功了')
            //     fs.readFile('./aa.js','ssssss',(e)=>{
            //         console.log(e)
            //     })
            // }
        // })
    
    })
}


delfile()
.then((msg)=>{
    console.log('then'+msg)
})
.catch((err)=>{
    console.log('err'+err)
})