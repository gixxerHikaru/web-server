const express = require('express')
const path = require("path");
const app = express()

app.use(express.urlencoded({ estended: false}))
app.use(express.static(path.join(__dirname, "public")))

// app.get('/top', function (req, res) {
//   console.log(req);
//   res.send('<h1>Hello World!!!</h1>')
// })

app.get('/about', function (req, res) {
  console.log(req);
  res.send({
    name: "Mike",
     age:30
    })
})

app.post('/api/v1/quiz', function(req, res){
  const answer = req.body.answer;
  console.log(answer);
  if(answer == 2) {
    // res.send("<h2>正解！！</h2>");
    res.redirect("/correct.html");
  } else {
    // res.send("<h2>不正解、、、</h2>");
    res.redirect("/incorrect.html");
  }
  // res.send(answer);
})

app.listen(3000, function() {
  console.log("I am running");
})

console.log("最終行");
