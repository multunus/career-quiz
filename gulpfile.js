var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src(['./src/questionType.js', './src/question.js', './src/answer.js', './src/choice.js', './src/configuration.js', './src/ObjectFactory.js', './src/utils.js', './src/jsonHandler.js', './src/quizRunner.js', './src/application.js'])
    .pipe(concat({ path: 'production.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest('./dist'))
});