const fs= require('fs')
const http= require('https')
const cheerio=require('cheerio')
let url="https://www.bilibili.com/"

http.get('https://www.qunar.com/',(res)=>{
    const { statusCode } =res
    const { contentType } =res.headers['content-type']
    console.log(statusCode,contentType)

    let error;
  // if (statusCode !== 200) {
  //   error = new Error('Request Failed.\n' +
  //                     `Status Code: ${statusCode}`);
  // } else if (!/^text\/html/.test(contentType)) {
  //   error = new Error('Invalid content-type.\n' +
  //                     `Expected application/json but received ${contentType}`);
  // }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

    let rawData=''
    res.on('data', (chunk) => {
        console.log('数据传输')
        rawData+=chunk.toString('utf8')
        // console.log(chunk.toString('utf8'))
    })
  res.on('end', () => {
    try {
    //   const parsedData = JSON.parse(rawData);
    let $=cheerio.load(rawData)
    $('img').each((index,el)=>{
      console.log($(el).attr('src'))
    })
    fs.writeFileSync('bili.html',rawData)
      console.log('结束');

    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});