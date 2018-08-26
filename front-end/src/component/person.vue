<template>
    <div class="person">
        <banner name="个人能力"></banner>
        <ul>
            <li>熟练运用html、js、jquery、Freemarker、vue等前端技术</li>
            <li>熟练运用Java、Spring、SpringMVC、Mybatis、Hibernate、Struts2、Shiro、SpringBoot等后端技术</li>
            <li>熟练使用Mysql数据库，对sql语句能够实现数据库的增改删查</li>
            <li>熟练掌握linux命令，tomcat、nginx、Docker等</li>
            <li>对开发软件Eclipse、IntelliJ IDEA、Visual Studio Code，HBuilder，Navicat 能够熟练运用</li>
            <li>了解阿里云服务器的一些配置信息，以及支付宝支付，微信支付，负载均衡等相关知识点</li>
            <li>能够按照要求编写合理的开发文档与代码，能解决系统的bug问题</li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.person{
    ul{
        padding-left: 50px;
        padding-right: 40px;
        font-size: 14px;
        li{
            text-align: justify;
            line-height: 25px;
        }
    }
}
</style>

<script>

import banner from "./banner.vue"

export default {
    
    components:{
        "banner":banner
    }

}
</script>
