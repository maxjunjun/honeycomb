/**
 * Created by majun on 2016/10/22.
 */
'use strict'
var gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),                            //- 多个文件合并为一个；
    rev = require('gulp-rev'),                                  //- 对文件名加MD5后缀
    minimist = require('minimist'),
    jshint = require('gulp-jshint'),
    gulpIf = require('gulp-if'),
    order = require("gulp-order"),
    addsrc = require("gulp-add-src");

module.exports = {
    create : function (name, model, dist, env) {
        if (name)
            return gulp.task(name + '-js-min', [name + '-del'], function () {
                var _orderList = [], _src = model.scripts.src, _third = model.scripts.third;

                //对js文件进行排序
                for (var i = 0, l = _third.length; i < l; i++) {
                    var _urls = _third[i].split('/');
                    _orderList.push(_urls[_urls.length - 1]);
                }
                for (var i = 0, l = _src.length; i < l; i++) {
                    var _urls = _src[i].split('/');
                    _orderList.push(_urls[_urls.length - 1]);
                }
                return gulp.src(model.scripts.third || [])
                    .pipe(addsrc(model.scripts.src || []))
                    .pipe(order(_orderList))
                    .pipe(gulpIf(env !== 'production', sourcemaps.init()))
                    .pipe(concat({path: name + '.min.js', cwd: ''}))
                    .pipe(gulpIf(env !== 'development', uglify()))
                    .pipe(gulpIf(env !== 'development', rev()))
                    .pipe(gulpIf(env !== 'production', sourcemaps.write('.')))
                    .pipe(gulp.dest(path.join(dist.static || 'dist/static', model.scripts.dist || ('js/' + name))))
                    .pipe(rev.manifest('rev-manifest-js.json', {base: '', merge: true}))
                    .pipe(gulp.dest(''));
                return gulp;
            });
        return gulp;
    }
}