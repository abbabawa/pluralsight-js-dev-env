import express from 'express'
import path  from 'path'
import open from 'open'

import webpack  from 'webpack'
import config from '../webpack.config.dev'

const port = 3000

const app = express()

const compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', (req, res)=>{
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tammy@gmail.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "tina@gmail.com"}
  ]);
});

/* eslint-disable no-console */
app.listen(port, (err)=>{
  if(err){
    console.log(err)
  }else{
    open('http://localhost:'+port)
  }
})
