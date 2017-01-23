/**
 * Created by majun on 2016/10/22.
 */
'use strict';
module.exports ={
    "watch":false,
    "resources":{
        "scripts":{
            "src":['app/static/js/product/product_list.js'],
            "namespace":"",
            "third":['app/static/js/plugins/jquery.SuperSlide.js'],
            "dist":"js/product"
        },
        "styles":{
            "src":['app/static/css/wjc-product-service.css'],
            "third":['app/static/css/header.css','app/static/css/share.min.css'],
            "dist":"css/product"
        },
        "images":{
            "src":[],
            "dist":"images"
        },
        "views":{
            "src":['app/templates/product/product_list.ftl'],
            "dist":"product"
        }
    }
}