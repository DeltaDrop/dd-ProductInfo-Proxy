var express = require('express');
var morgan = require('morgan');
var axios = require('axios');

var path = require('path');

let app = express();
let port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/:prod_name', (req, res) => {
  const url = `http://18.224.199.183${req.url}`
  axios.get(url)
    .then(({data}) => {
      res.send(data);
    })
    .catch((err) => {
      console.error('error in get to api/prod_name: ', err);
    })
})

app.get('/api/categories/:prod_name', (req, res) => {
  const url = `http://18.224.199.183${req.url}`
  axios.get(url)
    .then(({data}) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/api/drop', (req, res) => {
  const url = `http://18.224.199.183${req.url}`
  axios.post(url, req.body)
    .then(({data}) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    })
}) 

app.get('/buy/:prod_name/overview', (req, res) => {
  const url = `http://54.213.205.51${req.url}`
  console.log(url);
   axios.get(url)
    .then(({data}) => {
      res.send(data);
      // console.log(data);
    })
    .catch((err) => {
      console.error('there is an error');
    })
})

app.get('/api/:productname/reviews', (req, res) => {
  const url = `http://ec2-54-89-153-231.compute-1.amazonaws.com${req.url}`
  axios.get(url)
    .then(({data}) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    })
})

app.get('/productImages/:product', (req, res) => {
  const url = `http://ec2-54-209-75-211.compute-1.amazonaws.com${req.url}`
  axios.get(url)
  .then(({data}) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send;
  })
 })

app.get('/buy/*', (req, res) => {
  console.log('hello!');
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
})