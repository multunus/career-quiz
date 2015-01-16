var gulp = require('gulp');
var concat = require('gulp-concat');
var run = require('gulp-run');

gulp.task('fetchData', function(){
  run('node getJson.js')
    .exec()
});

gulp.task('concatenate', function(){
  gulp.src(['./src/fetchedJsonData.js', './src/questionType.js', './src/question.js', './src/answer.js', './src/choice.js', './src/configuration.js', './src/ObjectFactory.js', './src/utils.js', './src/quizRunner.js', './src/application.js'])
    .pipe(concat({ path: 'production.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest('./dist'))
});
