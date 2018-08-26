<template>
    <div class="project">
        <banner name="项目经验"></banner>
        <table style="border-collapse: collapse; border: none; border-spacing: 0px;">
            <tr class="cont">
                <th style="width: 201px;">
                    2017.03-2017.07                 
                </th>
                <th>
                    凯捷咨询有限公司
                </th>
                <th>
                    ERP Luxottica 顾问
                </th>
            </tr>
            <tr>
                <td colspan="3">
                    <ul>
                        <li>
                            Luxottica security 项目是ERP部分下的sap项目系统，在这个系统里面，主要是在Iweb和remedy网站上收集系统使用的问题，问题包含sap登陆人员的增改删除，权限分配，差旅系统的划分等。
                        </li>
                        <li>
                            同时也接收来自英文邮箱的问题，负责处理，再回复发件人，每天完成ticket的量
                        </li>
                    </ul>
                </td>
            </tr>
            <tr class="cont">
                <th>
                    2017.11-2018.07							  
                </th>
                <th>
                    晨鲸科技有限公司
                </th>
                <th>
                    豆匣商城、P2P渝信网、公司官网
                </th>
            </tr>
            <tr>
                <td colspan="3">
                    <ul>
                        <li>豆匣商城 <a href="https://mall.sharder.org" target="_blank">(https://mall.sharder.org)</a> ，主要负责商城的构建，能够实现下订单，pc端支付，移动支付，还是响应式布局，能够适配不同的机型</li>
                        <li>P2P渝信网 <a href="http://www.cqmhxy.net" target="_blank">(http://www.cqmhxy.net)</a>  是我公司外包维护的项目，主要是维护系统的审计，开发新功能，排除bug等操作</li>
                        <li>公司官网 <a href="http://www.ichaoj.com" target="_blank">(http://www.ichaoj.com)</a>  是展示我公司的产品，是一套纯的html5实现的，外加中英文切换，帮助中外的朋友进行审阅</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="less" scoped>
.project{
    table{
        width: 100%;
        td[colspan]{
            font-size: 14px;
        }
        ul{
            padding-left: 50px;
            padding-right: 40px;
            li{
                text-align: justify;
                line-height: 25px;
            }
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
