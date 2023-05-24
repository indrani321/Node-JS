const fs=require('fs');
function loadMessages() {
    try {
      const messagesData = fs.readFileSync('messages.json', 'utf8');
      return JSON.parse(messagesData);
    } catch (error) {
      return [];
    }
  }
  
  function saveMessages(messages) {
    fs.writeFileSync('messages.json', JSON.stringify(messages));
  }
const requestHandeler=(req,res)=>{
const url=req.url;
const method=req.method;
if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    const messages = loadMessages();
    if (messages.length > 0) {
      res.write('<h2>Messages:</h2>');
      res.write('<ul>');
      messages.forEach((message) => {
        res.write(`<li>${message}</li>`);
      });
      res.write('</ul>');
    }
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      const messages = loadMessages();
      messages.push(message);
      saveMessages(messages);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};
module.exports=requestHandeler;