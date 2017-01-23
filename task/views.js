/**
 * Created by hanzhongao on 2016/10/22.
 */
'use strict'
var gulp = require('gulp'),
    path = require('path'),
    revreplace = require('gulp-rev-replace');


module.exports = {
    create : function (name, model, dist) {

        function replaceResource(filename) {
            if(filename.indexOf('.js') > 0) return '/' + model.scripts.dist + '/' + filename;
            if(filename.indexOf('.css') > 0) return '/' + model.styles.dist + '/' + filename;
            return filename;
        }

        if (name)
            return gulp.task(name + '-views', [name + '-css-min', name + '-js-min'], function () {
                if (model.views.src instanceof Array && model.views.src.length > 0)
                    return gulp.src(model.views.src || [])
                        .pipe(revreplace({
                            replaceInExtensions: ['.ftl','.jsp','.html'],
                            modifyReved: replaceResource,
                            manifest: gulp.src(['rev-manifest-css.json', 'rev-manifest-js.json'])
                        }))
                        .pipe(gulp.dest(path.join(dist.views || 'dist/views',(model.views.dist || name))));
                return gulp;
            });
        return gulp;
    }
}