/**
 * Created by majun on 2016/10/22.
 */
'use strict'
var gulp = require('gulp'),
    path = require('path'),
    imagemin = require('gulp-imagemin'),                        //- 图片压缩
    pngquant = require('imagemin-pngquant'),                    //- 图片深入压缩
    imageminOptipng = require('imagemin-optipng'),
    imageminGifsicle = require('imagemin-gifsicle'),
    imageminJpegtran = require('imagemin-jpegtran'),
    cache = require('gulp-cache'),
    gulpIf = require('gulp-if');

module.exports = {
    create : function (name, model, dist) {
        if (name)
            return gulp.task(name + '-images-min', function () {
                if (model.images.src instanceof Array && model.images.src.length > 0)
                    return gulp.src(model.images.src || [])
                        .pipe(gulpIf('*.{png,jpg,gif,ico}',cache(imagemin({
                            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
                            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
                            use: [pngquant(), imageminJpegtran({progressive: true})
                                , imageminGifsicle({interlaced: true}), imageminOptipng({optimizationLevel: 3})] //使用pngquant深度压缩png图片的imagemin插件
                        }))))
                        .pipe(gulp.dest(path.join(dist.static || 'dist/static', model.images.dist || 'images')));
                return gulp;
            });
        return gulp;
    }
}