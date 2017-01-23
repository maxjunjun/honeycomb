/**
 * Created by majun on 2016/10/22.
 */
'use strict'
var gulp = require('gulp'),
    del = require('del');

module.exports = {
    create : function (name, model, dist) {
        if (name)
            return gulp.task(name + '-del', function () {
                return del([
                        dist.static + '/' + model.styles.dist + '/**/*',
                        dist.static + '/' + model.scripts.dist + '/**/*',
                        dist.views + '/' + model.views.dist + '/**/*'],
                    {"force": true},
                    function (err, deletedFiles) {
                        console.log('Files deleted:\n', deletedFiles.join('\n'));
                    });
            });
        return gulp;
    }
}