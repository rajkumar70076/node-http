const http = require('http')
const {readFileSync} = require('fs')

// get all files

const homePage = readFileSync('./index.html')
const homeStyle = readFileSync('./styles.css')
const homeImage = readFileSync('./logo.svg')
const homeLogic = readFileSync('./browser-app.js')

const server = http.createServer((req,res)=>{
    const url = req.url
    if (url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()

    }
    //styles
    else if (url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()

    }
    //image/logo
    else if (url === '/logo.svg'){
      res.writeHead(200,{'content-type':'image/svg+xml'})
      res.write(homeImage)
      res.end()

  }
  // logic
  else if (url === '/browser-app.js'){
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end()

}
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not Found</h1>')
        res.end()
    }
})
server.listen(5003)