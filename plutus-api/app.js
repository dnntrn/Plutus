const models = require('./models/index');
const connectDb = require ('./models/connectdb');
const express = require ('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/navigation');
const cors = require("cors");
const app = express();
const fs = require('fs');

const eraseDatabaseOnSync = true;

// uncomment LATER when mongo DB is setup
connectDb().then(async () => {
  // console.log(models.models.Entry);
  // if (eraseDatabaseOnSync) {
  //   await Promise.all([
  //     models.models.Entry.Entry.deleteMany({}),
  //     models.models.Averages.Averages.deleteMany({}),
  //   ]);
  // }

  // seedAveragesDatabase();

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port1!`),
  );
});

//
// const seedAveragesDatabase = async () => {
//   let data= fs.readFileSync('./mongo-test-scripts/averagesTestData.json', 'utf8');
//   console.log(data);
//   data = JSON.parse(data);
//   let tempData;
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//     tempData = new models.models.Averages.Averages(data[i]);
//     await tempData.save(function(err, tempData){
//       if (err) return console.error(err);
//       console.log(tempData.companyName + " saved ");
//     })
//
//     tempData.on('es-indexed', (err, result) => {
//         console.log('indexed to elastic search');
//     });
//
//   }
// };

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
