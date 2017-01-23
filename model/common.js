/**
 * Created by hanzhongao on 2016/10/22.
 */
'use strict';
module.exports ={
    "watch":true,
    "resources":{
        "scripts":{
            "src":[
                'app/static/js/common/pageLoader.js'
                ,'app/static/js/common/atme.bee-web.js'
                ,'app/static/js/common/atme.sso.js'
                ,'app/static/js/common/base.js'
                ,'app/static/js/common/login.js'
                ,'app/static/js/common/sidebar.js'
                ,'app/static/js/common/sidemenu.js'

                ,'app/static/js/common/zx-service.js'
                ,'app/static/js/common/wjc-product-service.js'
                ,'app/static/js/common/catalog.js'
                ,'app/static/js/common/footer.js'
                ,'app/static/js/common/header.js'
                ,'app/static/js/common/header_top.js'


                ],
            "namespace":"",
            "third":['app/static/js/libs/jquery-1.8.3.min.js'
                ,'app/static/js/libs/baiduTemplate.js'
                ,'app/static/js/libs/jquery.validate.min.js'
                ,'app/static/js/libs/layer/layer.js'],
            "dist":"js/common"
        },
        "styles":{
            "src":['app/static/css/common/*.css'],
            "third":['app/static/css/header.css','app/static/css/share.min.css'],
            "dist":"css/common"
        },
        "images":{
            "src":['app/static/images/**/*.{png,jpg,gif,ico}'],
            "dist":"images"
        },
        "views":{
            "src":['app/templates/common/*.ftl'],
            "dist":"common"
        },
        "others":[
            {"src":['app/static/js/libs/layer/skin*/**/*'],
                "dist":"js/common"}
        ]
    }
}