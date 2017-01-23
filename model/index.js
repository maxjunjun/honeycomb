'use strict';
module.exports ={
  "watch":true,
  "resources":{
    "scripts":{
      "src":['app/static/js/home/home.js'],
      "namespace":"",
      "third":['app/static/js/libs/jquery.SuperSlide.js'],
      "dist":"js/index"
    },
    "styles":{
      "src":['app/static/css/index/home.css'],
      "third":[],
      "dist":"css/index"
    },
    "images":{
      "src":[],
      "dist":"images"
    },
    "views":{
      "src":['app/templates/index.ftl'],
      "dist":"index"
    }
  }
}