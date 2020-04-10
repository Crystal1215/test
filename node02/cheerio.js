const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2><img src="sndajkshdas"></img><img src="sndaaaaaaajkshdas"></img>')
 
// console.log($('h2.title').text('Hello there!'))
$('img').each((index,el)=>{
    console.log($(el).attr('src'))
})
// $('h2').addClass('welcome')
console.log('aaa')