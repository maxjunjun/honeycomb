/**
 * Created by majun on 2016/10/25.
 */
'use strict'
var gulp = require('gulp'),
    path = require('path');
module.exports = {
    create : function (name, model, dist) {
        if (name)
            return gulp.task(name + '-move',[name+'-del'], function () {
                if (model.others instanceof Array && model.others.length > 0)
                    model.others.forEach(function (data) {
                        gulp.src(data.src || [])
                            .pipe(gulp.dest(path.join(dist.static || 'dist/others', data.dist || name)));
                    });
                return gulp;
            });
        return gulp;
    }
}