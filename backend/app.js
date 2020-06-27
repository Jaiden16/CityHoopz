const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require("multer");
const cors = require('cors');
const session = require('express-session');
const passport = require('./auth/passport')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        let name = Date.now() + '-' + file.originalname
        cb(null, name)
    }
})

//init upload
const upload = multer({
    storage: storage
})




const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const skillsRouter = require("./routes/skills")
const courtsRouter = require('./routes/courts')
const authRouter = require("./routes/auth")
const app = express();


//Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "NOT_A_GOOD_SECRET",
    resave: false,
    saveUninitialized: true
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/skills', skillsRouter);
app.use('/courts', courtsRouter);
app.post('/upload', upload.single('image'), (req, res, next) => {
    console.log('req.file', req.file)
    console.log('req.body', req.body)
    let img_url = 'http://localhost:3001' + req.file.path.replace('public',"");
    res.json({
        imageUrl: img_url,
        msg: "upload successful"
    })

})

module.exports = app;
