<template>
 <div class="container-center-r">
                    <div class="container-center-r-searchfor"><input id="one" type="text" value="请输入关键字"
                            style="width: 150px;height: 35px; border-radius: 5px;" @focus="text" />
                        <button class="btn">搜索</button>
                    </div>
                    <div class="container-center-r-search">
                        <div
                            style="background-color: black; color: white; width: 100%; height: 40px; display: flex; justify-content: flex-start; align-items: center; border-bottom: 2px solid red; font-weight: 700; ">
                            &nbsp;&nbsp;&nbsp;最新文章</div>
                        <div style="margin-left: 10px;">
                            <a href="#" class="div-a">
                                1. 10月24日，蜗牛学院第五届程序员...
                            </a><br />
                            <a href="#" class="div-a"> 2. 培训期间，从未12点之前离开过教...</a><br />
                            <a href="#" class="div-a">
                                3. 核心实验：利用UIAutomation库测...
                            </a><br />
                            <a href="#" class="div-a">4. 报告：阿多比学员出关了！...</a><br />
                            <a href="#" class="div-a">5. 揭秘：带你了解学员眼中真实的阿...</a><br />
                            <a href="#" class="div-a">6. 通过对合作企业的回访，我们发现...</a><br />
                            <a href="#" class="div-a">7. 从会计转行Java开发，她的入职月...</a><br />
                            <a href="#" class="div-a">8. 蜗牛出版之《自动化测试开发全程...</a><br />
                            <a href="#" class="div-a">
                                9. 核心实验：利用UISpy识别Window...
                            </a><br />
                        </div>
                    </div>
                    <div class="container-center-r-search">
                        <div
                            style="background-color: black; color: white; width: 100%; height: 40px; display: flex; justify-content: flex-start; align-items: center; border-bottom: 2px solid red; font-weight: 700; ">
                            &nbsp;&nbsp;&nbsp;最多阅读</div>
                        <div style="margin-left: 10px;">
                            <a href="#" class="div-a">
                                1. 10月24日，蜗牛学院第五届程序员...
                            </a><br />
                            <a href="#" class="div-a"> 2. 培训期间，从未12点之前离开过教...</a><br />
                            <a href="#" class="div-a">
                                3. 核心实验：利用UIAutomation库测...
                            </a><br />
                            <a href="#" class="div-a">4. 报告：阿多比学员出关了！...</a><br />
                            <a href="#" class="div-a">5. 揭秘：带你了解学员眼中真实的阿...</a><br />
                            <a href="#" class="div-a">6. 通过对合作企业的回访，我们发现...</a><br />
                            <a href="#" class="div-a">7. 从会计转行Java开发，她的入职月...</a><br />
                            <a href="#" class="div-a">8. 蜗牛出版之《自动化测试开发全程...</a><br />
                            <a href="#" class="div-a">
                                9. 核心实验：利用UISpy识别Window...
                            </a><br />
                        </div>
                    </div>
                    <div class="container-center-atcs-box-3">
                        <div
                            style="background-color: black; color: white; width: 100%; height: 40px; display: flex; justify-content: flex-start; align-items: center; border-bottom: 2px solid red; font-weight: 700; ">
                            &nbsp;&nbsp;&nbsp;特别推荐</div>
                        <div style="margin-left: 10px;">
                            <a href="#" class="div-a">
                                1. 10月24日，蜗牛学院第五届程序员...
                            </a><br />
                            <a href="#" class="div-a"> 2. 培训期间，从未12点之前离开过教...</a><br />
                            <a href="#" class="div-a">
                                3. 核心实验：利用UIAutomation库测...
                            </a><br />
                            <a href="#" class="div-a">4. 报告：阿多比学员出关了！...</a><br />
                            <a href="#" class="div-a">5. 揭秘：带你了解学员眼中真实的阿...</a><br />
                            <a href="#" class="div-a">6. 通过对合作企业的回访，我们发现...</a><br />
                            <a href="#" class="div-a">7. 从会计转行Java开发，她的入职月...</a><br />
                            <a href="#" class="div-a">8. 蜗牛出版之《自动化测试开发全程...</a><br />
                            <a href="#" class="div-a">
                                9. 核心实验：利用UISpy识别Window...

                            </a><br />

                        </div>
                        <div class="box-btn" @click="slide"  >
                            <a href="#">返回顶部</a>
                        </div>
                    </div>
                </div>
</template>
<script>
export default {
    methods:{
       slide(){
        document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
       },
    text(){
document.querySelector('#one').value='';
}
    }
    
}
</script>
<style>
.btn {
    width: 50px;
    height: 35px;
    background-color: red;
    color: aqua;
    border-radius: 5px;

}
.container-center-r {
    width: 256px;
    height: 100%;
    /*background-color: brown;*/
    margin-left:0px;
}
.div-a {
    font-size: 14px;

}
.container-center-atcs-box-3 {
    width: 100%;
    height: 350px;
    background-color: white;
    border: 1px solid grey;
    margin-top: 15px;
    position: relative;

}
.container-center-r-search {
    width: 100%;
    height: 300px;
    background-color: white;
    border: 1px solid grey;
    margin-top: 15px;
}
.box-btn {
    width: 100%;
    height: 40px;
    color: aqua;
    background-color: blueviolet;
    display: flex;
    border-bottom: 2px solid red;
    justify-content: center;
    line-height: 40px;
    position: absolute;
    bottom: 0px;
    
}
.container-center-r-searchfor {
    width: 100%;
    height: 70px;
    background-color: rgb(91, 41, 138);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
    border-radius: 5px;

}
</style>