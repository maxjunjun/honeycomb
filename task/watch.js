/**
 * Created by majun on 2016/10/23.
 */
'use strict'
var gulp = require('gulp');

module.exports = {
    create : function (name, model, dist) {
        if (name)
            return gulp.watch([model.styles.src || '.', model.scripts.src || '.',
                model.views.src || '.'], [name]);
        return gulp;
    }
}