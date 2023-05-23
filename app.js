const http=require('http'); 



const server= http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>first response page</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
       return res.end(); 
    }
     if(url==='/about'){
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>first response page</title></head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
       return res.end(); 
    }
    if(url==='/node')
    {
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>first response page</title></head>')
        res.write('<body><h1>Welcome to my node JS project</h1></body>')
        res.write('</html>')
       return res.end()
    }
    
    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>first response page</title></head>')
    res.write('<body><h1>Welcome to my Node JS project</h1></body>')
    res.write('</html>')
    res.end();
});


server.listen(4000);