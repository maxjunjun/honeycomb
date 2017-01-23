<#import "/common/common_html_front.ftl" as html/>
<@html.htmlBase title="税务行业共享中心 - 找我吧" jsFiles=["index.min.js"] cssFiels=["index.min.css"] type="home" backGround=false  needCustomerService=true>
<div>
    <!--轮播图-->
    <div class="banner" id="banner" >
        <a class="d1 home-ban" style="background: url(/images/home-banner01.jpg) center no-repeat"></a>
        <a class="d1 home-ban" style="background: url(/images/home-banner02.jpg) center no-repeat"></a>
        <a class="d1 home-ban" style="background: url(/images/home-banner03.jpg) center no-repeat"></a>
        <a class="d1 home-ban" style="background: url(/images/home-banner04.jpg) center no-repeat"></a>
        <div class="d2" id="banner_id">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    <!--轮播图 end-->

    <!--三大板块-->
    <div class="home-threePlates">
        <div class="home-threePlates-jz">
            <#--<a href="" class="home-sanda">-->
            <div class="home-sanda" id="firstLeveService">
                <!--01-->
                <a href="/honeycomb/products/list.html?code=01_001">
                    <div class="home-threePlates-jzb">
                        <h1 class="service-font-18 font-color-33">涉税专项审核业务</h1>
                        <p class="font-color-99">信任有我，找我吧助您审核涉税专项业务</p>
                    </div>
                </a>
                <!--01 end-->
                <!--02-->
                <a href="/honeycomb/products/list.html?code=01_002">
                    <div class="home-threePlates-dl">
                        <h1 class="service-font-18 font-color-33">涉税代理业务</h1>
                        <p class="font-color-99">足不出户，找我吧代您完成涉税跑腿业务</p>
                    </div>
                </a>
                <!--02 end-->
                <!--03-->
                <a href="/honeycomb/products/list.html?code=01_003">
                    <div class="home-threePlates-zx" style="border: none;">
                        <h1 class="service-font-18 font-color-33">涉税咨询业务</h1>
                        <p class="font-color-99">梦想有你，找我吧替您规避风险、提供解决方案</p>
                    </div>
                </a>
                <!--03 end-->
            </div>
            <#--</a>-->
        </div>
    </div>
    <!--三大板块 end-->

    <!--生命周期-->
    <div class="home-cycle">
        <div class="home-cycle-jz">
            <h1 class="home-cycle-bt service-font-26 font-color-33">伴随企业成长 保驾护航</h1>
            <p class="home-cycle-wb font-color-99">为企业提供成长过程的涉税服务，助力企业健康发展</p>

            <div class="home-cycle-con">
                <!--设立期-->
                <a style="margin-right: 20px;" class="home-cycle-sl" href="doPost">
                    <img src="/images/home-cycle_01.png" alt="" class=""/>
                    <h1 class="service-font-18 font-color-33">设立期</h1>
                    <p class="font-color-99">找我吧助力企业跨过第一道鸿沟帮助初创企业迅速成长</p>
                    <span class="font-color-66">了解更多>></span>
                </a>
                <!--成长期-->
                <a style="margin-right: 20px;" class="home-cycle-sl" href="/honeycomb/products/list.html">
                    <img src="/images/home-cycle_02.png" alt="" class=""/>
                    <h1 class="service-font-18 font-color-33">成长期</h1>
                    <p class="font-color-99">找我吧提供全方位税务常规服务为企业成长保驾护航</p>
                    <span class="font-color-66">了解更多>></span>
                </a>
                <!--转型期-->
                <a style="margin-right: 20px;" class="home-cycle-sl" href="/honeycomb/ekl/index?type=transform">
                    <img src="/images/home-cycle_03.png" alt="" class=""/>
                    <h1 class="service-font-18 font-color-33">转型期</h1>
                    <p class="font-color-99">找我吧助力企业华丽转型迅速步入大企业行列</p>
                    <span class="font-color-66">了解更多>></span>
                </a>
                <!--退出期-->
                <a class="home-cycle-sl" href="/honeycomb/ekl/index?type=writeoff">
                    <img src="/images/home-cycle_04.png" alt="" class=""/>
                    <h1 class="service-font-18 font-color-33">退出期</h1>
                    <p class="font-color-99">找我吧当值企业最后一个班顺利完成企业的收官工作</p>
                    <span class="font-color-66">了解更多>></span>
                </a>
            </div>
        </div>
    </div>
    <!--生命周期 end-->

    <!--热门服务-->
    <div class="home-service">
        <div class="home-service-jz">
            <h1 class="home-service-rm service-font-26 font-color-33">热门服务</h1>
            <div class="home-service-con">
                <#if hotProductDtoList??>
                    <#list hotProductDtoList as hotProductList>
                    <!--01-->
                    <a <#if hotProductList_index != 3> style="margin-right: 20px;" </#if> class="home-service-sl" href="/honeycomb/products/${hotProductList.productId}/detail.html">
                        <div class="home-service-img" style="background:url(${hotProductList.picture}) no-repeat center" >
                        <#if hotProductList_index == 0>
                            <span class="home-service-tb" ></span>
                        <#elseif hotProductList_index == 1>
                            <span class="home-service-tbb" ></span>
                        <#elseif hotProductList_index == 2>
                            <span class="home-service-tbc" ></span>
                        <#else>
                            <span class="home-service-tbd" ></span>
                        </#if>
                        </div>
                        <h1 class="service-font-18 font-color-33">${hotProductList.name}</h1>
                        <p class="font-color-99 service-font-18 red-font">¥ ${hotProductList.price} <span class="service-font-12">起</span></p>
                        <span class="home-service-sj font-color-99 service-font-12">${hotProductList.note}</span>
                        <span class="home-service-sj font-color-99 service-font-12">已有<span class="red-font">${hotProductList.sellCount}人</span>购买</span>
                        <span class="home-service-ck">立即查看</span>
                    </a>
                    <!--01 end-->
                    </#list>
                </#if>
            </div>
        </div>
    </div>

    <!--热门服务 end-->

    <!--应用小工具-->
    <div class="home-gj">
        <div class="home-gj-jz">
            <h1 class="home-service-rm service-font-26 font-color-33">热门应用</h1>
            <div class="home-gg-con">
                <!--左-->
                <a href="/honeycomb/singleProducts/1" style="margin-right: 20px;" class="home-gj-l">
                    <h1 class="service-font-18 font-color-33">建安营改增小管家</h1>
                    <p class="font-color-99">中小型建安企业的管家营改增管理不用愁</p>
                </a>
                <!--中-->
                <a href="/honeycomb/singleProducts/2" style="margin-right: 20px;" class="home-gj-m">
                    <h1 class="service-font-18 font-color-33">增值税申报小工具</h1>
                    <p class="font-color-99">国内首款指引清晰自动生成的申报工具</p>
                </a>
                <!--右-->
                <a href="/baishitong/app.html" class="home-gj-r" target="_blank">
                    <h1 class="service-font-18 font-color-33">办税百事通</h1>
                    <p class="font-color-99">最直观的方式引导和介绍办税流程</p>
                </a>
            </div>
        </div>
    </div>
    <!--应用小工具 end-->

    <!--专家轮换-->
    <div id="instit-content" class="home-expert-bg">
        <div id="instit-wrapper">
            <div class="leftLoop">
                <a class="next"></a>
                <a class="prev"></a>
                <div class="bd" style=" width: 900px; margin: 0 auto;">
                    <ul>
                        <li style="position: relative; z-index: 9999; behavior: url(/js/PIE/PIE.htc); float: left;">
                            <div class="home-zjlb font-color-66">互联网和移动互联网不断发展壮大，催生和夯实了产业互联网的基础。在这个波澜壮阔的大时代里，愿成长潜力巨大的合作伙伴艾特密，深度影响、构建、重塑税务产业生态圈，矢志不移地为行业注入正能量。</div>
                            <a <#--href="#" -->>
                                <img src="/images/icon/icon_lianweizhou.png" />
                                <span class="home-expert-name">连伟舟</span>
                                <span class="home-expert-title">唯你网首席顾问</span>
                            </a>
                        </li>
                        <li style="position: relative; z-index: 9999; behavior: url(/js/PIE/PIE.htc); float: left;">
                            <div class="home-zjlb font-color-66">“找我吧”提供专业化与精细化的税务服务整体解决方案，有效打通了税务服务的线上与线下环节，具有非常广阔的发展潜力和市场前景，期待与“找我吧”早日开展深入合作！</div>
                            <a <#--href="#" -->>
                                <img src="/images/icon/icon_luyang.png" />
                                <span class="home-expert-name">鲁洋</span>
                                <span class="home-expert-title">罗格数据 联合创始人</span>
                            </a>
                        </li>
                        <li style="position: relative; z-index: 9999; behavior: url(/js/PIE/PIE.htc); float: left;">
                            <div class="home-zjlb font-color-66">期待与艾特密公司携手共创“互联网+财税服务”的和谐生态。</div>
                            <a <#--href="#" -->>
                                <img src="/images/icon/icon_nixiaojun.png" />
                                <span class="home-expert-name">倪晓俊</span>
                                <span class="home-expert-title">江苏中润四方科技有限公司 总经理</span>
                            </a>
                        </li>
                        <li style="position: relative; z-index: 9999; behavior: url(/js/PIE/PIE.htc); float: left;">
                            <div class="home-zjlb font-color-66">包括法律、财税等整个咨询业有两个增长点：一个是行业集中度，也就是并购整合，规模效应；二是整个行业的增长，主要来自于民众财富的增长和政府执法文明程度的提高以及包括一带一路、以中国人为主导的国际化的开始。艾特密敏锐的把握住这个机会，提出了一套整合理念，相信假以时日，一定会枝繁叶茂！</div>
                            <a <#--href="#" -->>
                                <img src="/images/icon/icon_xuhaijian.png" />
                                <span class="home-expert-name">徐海舰</span>
                                <span class="home-expert-title">盈科律师事务所 合伙人律师</span>
                            </a>
                        </li>
                        <li style="position: relative; z-index: 9999; behavior: url(/js/PIE/PIE.htc); float: left;">
                            <div class="home-zjlb font-color-66">艾特密公司基于“互联网+税务”行动计划，率先提出税务行业共享中心概念。以开放、共享、多赢为宗旨，致力打造贯穿于税务行业各环节的生态系统。通过云计算及大数据分析等信息化手段，推动税务行业向服务产品化、产品标准化、标准质量化方向不断进步。</div>
                            <a <#--href="#" -->>
                                <img src="/images/icon/icon_lihaifeng.png" />
                                <span class="home-expert-name">李海峰</span>
                                <span class="home-expert-title">5A级税务师事务所地产部经理</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--专家轮换  END-->

    <!--企业用户-->
    <div class="home-Customer">
        <div class="home-Customer-jz">
            <h1 class="home-service-rm service-font-26 font-color-33">企业客户</h1>
            <div class="home-Customer-con">
                <div class="home-sk"></div>
                <div class="home-xl"></div>
                <div class="home-cn"></div>
                <div class="home-ab"></div>
                <div class="home-jo"></div>
                <div style="border-right: none" class="home-te"></div>
                <div class="home-ai"></div>
                <div class="home-do"></div>
                <div class="home-yt"></div>
                <div class="home-ly"></div>
                <div class="home-se"></div>
                <div style="border: none"  class="home-lg"></div>
            </div>
        </div>
    </div>
    <a href="doPost">去支付</a>
    <!--企业用户 end-->

    <!--返回顶部-->
    <#--<div class="xiayi02 scroll" id="scroll" ></div>-->
</div>
</@html.htmlBase>