const qs=require('querystring')
let str='name=wangyi&pass=123&sex=0'
let obj=qs.parse(str)
//字符串变成对象
// let obj=qs.parse(str,'&','=')
console.log(obj)

let obj1={ name: 'wangyi', pass: '123', sex: '0' }
let str1=qs.stringify(obj1,'^','?')
console.log(str1)

let str2='w=你好&foo=bar'
let res=qs.escape(str2)
let res2=qs.unescape(str2)
console.log(res)
console.log(res2)