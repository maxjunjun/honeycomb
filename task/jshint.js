/**
 * Created by majun on 2016/10/22.
 */
'use strict'
var gulp = require('gulp'),
    jshint = require('gulp-jshint');

module.exports = {
    create : function (name, model, env) {
        if (name)
            return gulp.task(name + '-jshint', function () {
                if (model.scripts.src instanceof Array && model.scripts.src.length > 0)
                    return gulp.src(model.scripts.src || [])
                        .pipe(jshint())
                        .pipe(jshint.reporter('default'))
                return gulp;
            });
        return gulp;
    }
}