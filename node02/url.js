const url=require('url')
let urlString='https://nodejs.org/dist/v8.12.0/docs/api/url.html'
let urlObj=url.parse(urlString)
console.log(urlObj)

let Url = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'nodejs.org',
    port: null,
    hostname: 'nodejs.org',
    hash: null,
    search: null,
    query: null,
    pathname: '/dist/v8.12.0/docs/api/url.html',
    path: '/dist/v8.12.0/docs/api/url.html',
    href: 'https://nodejs.org/dist/v8.12.0/docs/api/url.html'
  }
let string=url.format(Url)
  console.log(string)