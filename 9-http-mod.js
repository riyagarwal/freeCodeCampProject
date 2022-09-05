const http = require('http')
const server = http.createServer((req, res) => {    //createServer takes a callback func . req, res are objects, req carries details of the request sent by the client

    if(req.url === '/'){                            // url is a key in req object. '/' refers to home page
        res.write('welcome to our home page');      // can put the string directly in res.end() also
        res.end()
    }

    if(req.url === '/about'){
        res.end('here is our short history')
    }
    
    // default response
    res.end(`                                        
        <h1> OOPS! </h1>                          
        <p> we can't find the page </p>
        <a href= "/"> Back to Home Page </a>
    `)                                             // template string allows to return html as well
})

server.listen(5000)