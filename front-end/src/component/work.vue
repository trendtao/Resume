<template>
    <div class="work">
        <banner name="工作经历"></banner>
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
                        <li>负责处理公司ERP部门的SAP业务问题，包含员工的创建，增改删除。</li>
                        <li>负责各种模块权限的分配，差旅系统的人员权限划分。</li>
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
                    Java后端开发
                </th>
            </tr>
            <tr>
                <td colspan="3">
                    <ul>
                        <li>参与公司项目的系统架构设计，代码编写。</li>
                        <li>参与核心系统的设计及开发工作。</li>
                        <li>负责项目的创建，设计，配置。</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="less" scoped>
.work{
    table{
        width: 100%;
        td[colspan]{
            font-size: 14px;
        }
        ul{
            padding-left: 50px;
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
