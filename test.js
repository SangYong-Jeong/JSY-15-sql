const express = require('express')
const app = express()
const path = require('path')


require('dotenv').config()
require('./modules/server-init')(app, process.env.PORT)

/* view engine */
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true
app.locals.tabTitle = 'Express 게시판'

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', express.static(path.join(__dirname, 'public')))



const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')

app.use(_404Router)
app.use(_500Router)
