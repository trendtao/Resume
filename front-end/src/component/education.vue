<template>
    <div class="education">
        <banner name="教育背景"></banner>
        <table style="border-collapse: collapse; border: none; border-spacing: 0px;">
             <tr style="height:40px;text-align:center">
                <td style="width:200px">
                    <strong>2013.07-2017.06</strong>
                </td>
                <td>
                    <strong>湖北工程学院</strong>
                </td>
                <td style="text-align: center;">
                    <strong>计算机科学与技术</strong>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    主修课程
                </td>
            </tr>
            <tr>
                <td colspan="3" >
                   <div class="cont">C/C++语言编程、Java编程、数据结构、数据库原理、操作系统、计算机系统结构、汇编语言</div>
                </td>
            </tr>
            <tr style="height:40px;text-align:center">
                <td>
                    <strong>2016.04-2016.10</strong> 
                </td>
                <td>
                    <strong>蓝桥软件学院</strong>
                </td>
                <td>

                </td>
            </tr>
            <tr>
                <td colspan="3">
                    培训课程：
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <div class="cont">Java编程、Oracle、Mysql数据库、Html、Js、Jquery、SSM框架、SSH框架、Maven项目构建</div>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="less" scoped>
.education{
    table{
        width: 100%;

        .cont{
             text-indent: 60px;
        }

    }

    table td[colspan]{
        font-size: 14px;
        text-indent: 31px;
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

