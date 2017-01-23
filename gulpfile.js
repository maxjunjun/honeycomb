/**
 * Created by majun on 2016/10/22.
 */
'use strict';
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    modelPath = require('./config').modelPath,
    build = require('./build'),
    gulpSequence = require('gulp-sequence'),       //队列里的task只能执行一次
    minimist = require('minimist'),
    knownOptions = {
        string: 'env',
        default: {env: process.env.NODE_ENV || 'production'}
    },
    fs = require('fs'),
    options = minimist(process.argv.slice(2), knownOptions);

var models=[],buildTasks=[];                   //构建任务队列

//加载model
console.log('======= load models start =======');
var files = fs.readdirSync(modelPath);

files.forEach(function (item) {
    var _model = item.split('.')[0];
    console.log('load model ' + _model);
    models.push(_model);
    buildTasks.push(_model);
});
console.log('=======  load models end  =======');
//浏览器同步插件，管理页面端口：3001
gulp.task('browser-sync', function () {
    browserSync.init(null, {
        proxy: 'http://localhost:7888',
        files: [],
        browser: 'Chrome',
        notify: false,
        port: 5000
    });
});

//清除所有输出的文件
gulp.task('remove', function () {
    return build.remove();
});

//清空配置文件
gulp.task('clean', function () {
    return build.clean();
});

//创建task
gulp.task('init', function () {
    models.forEach(function (data) {
        var _model = require('./model/' + data);
        _model.name = data;
        build.start(_model, options.env);
    });
});

//文件监听
gulp.task('watch', function () {
    models.forEach(function (data) {
        var _model = require('./model/' + data);
        _model.name = data;
        if(_model.watch) {
            build.watch(_model);
            console.log('watched ' + data);
        }
    });
});

//执行所有task
//buildTasks.push('browser-sync');
if(options.env === 'development') buildTasks.push('watch');
gulp.task('build', ['clean','init'], gulpSequence.apply(this, buildTasks));

//执行文件监听task
gulp.task('build-watch', gulpSequence(['init'],['watch']));


