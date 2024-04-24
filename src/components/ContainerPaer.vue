<template>
 
            <div class="container-center">
                <div class="container-center-l">
                    <div class="container-center-atcs">
<div class="container-center-atcs-box"  v-for="i in results" :key="i.id" @click="openUrl">
                            <img class="box-img" :src="require('../assets/22.jpg')">
                            <div>
                                <a>
                                    <h2  class="div-h2">{{ i.title }}</h2>
                                </a>
                                <div>
                                    <p class="div-txt">{{ i.info }}</p>
                                    <p class="div-p-txt">
                                        {{ i.pre }}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                   
                                           
</template>
<script>
export default {
    
    data() {
        return {
            results: [{
                    id: 1,
                    title: "10月24日，蜗牛学院第五届程序员节正式开启！",
                    info: "作者：强哥 类别：蜗牛杂谈 日期：2020-10-21 11:14:01 阅读：3748 次 消耗积分：0 分",
                    pre: "各位老铁，大家好~不知不觉又是一年现在距离2021年还有71天距离春节还有113天距离蜗牛学院第五届程序员节仅剩3天以往这个时间我们早就给每一位毕业小蜗牛发邀请",
                    imgid: "22.jpg",
                    url:"http://172.20.10.10:8081/"
                },
                {
                    id: 2,
                    title: "10月24日，蜗牛学院第五届程序员节正式开启！",
                    info: "作者：强哥 类别：蜗牛杂谈 日期：2020-10-21 11:14:01 阅读：3748 次 消耗积分：0 分",
                    pre: "各位老铁，大家好~不知不觉又是一年现在距离2021年还有71天距离春节还有113天距离蜗牛学院第五届程序员节仅剩3天以往这个时间我们早就给每一位毕业小蜗牛发邀请",
                    imgid: "22.jpg",
                    url:"http://www.woniunote.com/article/608"
                },
                {
                    id: 3,
                    title: "10月24日，蜗牛学院第五届程序员节正式开启！",
                    info: "作者：强哥 类别：蜗牛杂谈 日期：2020-10-21 11:14:01 阅读：3748 次 消耗积分：0 分",
                    pre: "各位老铁，大家好~不知不觉又是一年现在距离2021年还有71天距离春节还有113天距离蜗牛学院第五届程序员节仅剩3天以往这个时间我们早就给每一位毕业小蜗牛发邀请",
                    imgid: "22.jpg",
                    url:"http://www.woniunote.com/article/607"
                },
                {
                    id: 4,
                    title: "10月24日，蜗牛学院第五届程序员节正式开启！",
                    info: "作者：强哥 类别：蜗牛杂谈 日期：2020-10-21 11:14:01 阅读：3748 次 消耗积分：0 分",
                    pre: "各位老铁，大家好~不知不觉又是一年现在距离2021年还有71天距离春节还有113天距离蜗牛学院第五届程序员节仅剩3天以往这个时间我们早就给每一位毕业小蜗牛发邀请",
                    imgid: "22.jpg",
                    url:"http://www.woniunote.com/article/606"
                },
                {
                    id: 5,
                    title: "10月24日，蜗牛学院第五届程序员节正式开启！",
                    info: "作者：强哥 类别：蜗牛杂谈 日期：2020-10-21 11:14:01 阅读：3748 次 消耗积分：0 分",
                    pre: "各位老铁，大家好~不知不觉又是一年现在距离2021年还有71天距离春节还有113天距离蜗牛学院第五届程序员节仅剩3天以往这个时间我们早就给每一位毕业小蜗牛发邀请",
                    imgid: "22.jpg",
                    url:"http://www.woniunote.com/article/605"
                },
                {
                    id: 6,
                    title: "10月24日，蜗牛学院第五届程序员节正式开启！",
                    info: "作者：强哥 类别：蜗牛杂谈 日期：2020-10-21 11:14:01 阅读：3748 次 消耗积分：0 分",
                    pre: "各位老铁，大家好~不知不觉又是一年现在距离2021年还有71天距离春节还有113天距离蜗牛学院第五届程序员节仅剩3天以往这个时间我们早就给每一位毕业小蜗牛发邀请",
                    imgid: "22.jpg",
                    url:"http://www.woniunote.com/article/604"
                },
            ]
        };
    },
    methods:{
        openUrl(){
            window.open(this.results.url,'_blank');
            
        }
    }
}
</script>

<style>

.container-center-atcs-box {
    width: 100%;
    height: 150px;
    border: 1px solid hotpink;
    margin-top: 15px;
    display: flex;
    align-items: center;
}
.box-img {
    width: 119.5px;
    height: 125px;
    background-size: auto;
    margin-right: 10px;
}
.div-h2 {
    color: cadetblue;
}

.div-txt {
    color: burlywood;
}

.div-p-txt {
    color: cornflowerblue;
}
.container-center-l {
    width: 835px;
    height: 100%;
    /*background-color: bisque;*/
    margin-right: 8px;

}
.container-center-atcs {
    width: 100%;
    height: 1000px;
    background-color: white;
}
.container-center {
    
    height: 100%;
    /*background-color: #fff;*/
    display: flex;
}

</style>