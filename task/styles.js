/**
 * Created by majun on 2016/10/22.
 */
'use strict'
var gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),                            //- 多个文件合并为一个；
    minifyCss = require('gulp-minify-css'),                     //- 压缩CSS为一行；
    rev = require('gulp-rev'),                                  //- 对文件名加MD5后缀
    imagemin = require('gulp-imagemin'),                        //- 图片压缩
    pngquant = require('imagemin-pngquant'),                    //- 图片深入压缩
    imageminOptipng = require('imagemin-optipng'),
    imageminGifsicle = require('imagemin-gifsicle'),
    imageminJpegtran = require('imagemin-jpegtran'),
    addsrc = require("gulp-add-src"),
    gulpIf = require('gulp-if'),
    modifyCssUrls = require('gulp-modify-css-urls'),
    order = require("gulp-order"),
    cache = require('gulp-cache');

module.exports = {
    create : function (name, model, dist, env) {
        if (name)
            return gulp.task(name + '-css-min',[name+'-del'], function () {

                var _orderList = [], _src = model.styles.src, _third = model.styles.third;

                //对css文件进行排序
                for (var i = 0, l = _third.length; i < l; i++) {
                    var _urls = _third[i].split('/');
                    _orderList.push(_urls[_urls.length - 1]);
                }
                for (var i = 0, l = _src.length; i < l; i++) {
                    var _urls = _src[i].split('/');
                    _orderList.push(_urls[_urls.length - 1]);
                }

                    return gulp.src(model.styles.third || [])
                        .pipe(modifyCssUrls(
                            {
                                modify: function (url, filePath) {
                                    //压缩样式文件里引用的图片
                                    var _index = url.lastIndexOf('?');
                                    var _uri = url;
                                    if (_index > 0) {
                                        _uri = url.substring(0, _index);
                                    } else {
                                        _index = url.lastIndexOf('#');
                                        if (_index > 0) {
                                            _uri = url.substring(0, _index);
                                        }
                                    }
                                    gulp.src(path.resolve(filePath,'..',_uri))
                                        .pipe(gulpIf('*.{png,jpg,gif,ico}',cache(imagemin({
                                            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
                                            interlaced: true,
                                            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
                                            multipass: true,//类型：Boolean 默认：false 多次优化svg直到完全优化
                                            use: [pngquant(), imageminJpegtran({progressive: true})
                                                , imageminGifsicle({interlaced: true}), imageminOptipng({optimizationLevel: 3})] //使用pngquant深度压缩
                                        }))))
                                        .pipe(gulp.dest(path.join(dist.static,(model.images.dist || 'images'),'/third')));
                                    //替换样式文件url地址
                                    var _arr = url.split('/');
                                    return ('/' + (model.images.dist || 'images') + '/third/' + _arr.pop());

                                }
                            })
                        )
                        .pipe(addsrc(model.styles.src || []))
                        .pipe(order(_orderList))
                        .pipe(gulpIf(env !== 'production', sourcemaps.init()))
                        .pipe(concat({path: name + '.min.css', cwd: ''}))
                        .pipe(gulpIf(env !== 'development', minifyCss({
                            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
                            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
                            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
                            keepSpecialComments: '*'//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
                        })))
                        .pipe(gulpIf(env !== 'development', rev()))
                        .pipe(gulpIf(env !== 'production', sourcemaps.write('.')))
                        .pipe(gulp.dest( path.join((dist.static || 'dist/static'),(model.styles.dist || ('css/'+name)))))
                        .pipe(rev.manifest('rev-manifest-css.json', {base: '', merge: true}))
                        .pipe(gulp.dest(''));
                return gulp;
            });
        return gulp;
    }
}