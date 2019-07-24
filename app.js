const express = require('express')
const app = express()
const port = 3000
const middleware = require('./lib/middleware.js')

// 列出全部 Todo
app.get('/', middleware, (req, res) => {

  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', middleware, (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', middleware, (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', middleware, (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', middleware, (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})