/**
 * Created by majun on 2016/10/22.
 */
'use strict';
var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

module.exports = {
    start : function (model, env) {
        if (typeof model === 'object') {
            var _name = model.name,
                _resources = model.resources,
                _dist = config.dist;
            if (_name && _resources && typeof _resources === 'object') {
                require('./task/delete').create(_name, _resources, _dist);
                require('./task/styles').create(_name, _resources, _dist, env);
                require('./task/scripts').create(_name, _resources, _dist, env);
                require('./task/images').create(_name, _resources, _dist);
                require('./task/views').create(_name, _resources, _dist);
                require('./task/move').create(_name, _resources, _dist);
                return gulp.task(_name, [_name + '-views', _name + '-images-min', _name + '-move']);
            }
        }
    },

    remove : function () {
        return del(['rev-manifest-js.json',
                'rev-manifest-css.json',
                config.dist.static + '/*',
                config.dist.views + '/*'],
            {"force": true},
            function (err, deletedFiles) {
                console.log('Files deleted:\n', deletedFiles.join('\n'));
            });
    },

    clean : function () {
        return del(['rev-manifest-js.json',
                'rev-manifest-css.json'],
            {"force": true},
            function (err, deletedFiles) {
                console.log('Files deleted:\n', deletedFiles.join('\n'));
            });
    },
    
    watch : function (model) {
        var _name = model.name,
            _resources = model.resources,
            _dist = config.dist;
        if (_name && typeof _resources === 'object')
            require('./task/watch').create(_name, _resources, _dist);
    }
}


