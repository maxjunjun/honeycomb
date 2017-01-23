/**
 * Created by majun on 2016/10/22.
 */
'use strict';
module.exports ={
    "watch":true,
    "resources":{
        "scripts":{
            "src":['app/static/js/product/product_detail.js'],
            "namespace":"",
            "third":['app/static/js/share/social-share.js','app/static/js/share/qrcode.js'],
            "dist":"js/productDetail"
        },
        "styles":{
            "src":[],
            "third":['app/static/css/share.min.css'],
            "dist":"css/productDetail"
        },
        "images":{
            "src":[],
            "dist":"images"
        },
        "views":{
            "src":['app/templates/product/product_detail.ftl'],
            "dist":"productDetail"
        }
    }
}
