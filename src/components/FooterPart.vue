<template >
<div class="footer">
        <div class="footer-center">
            <div class="footer-center-l">
                <span class="footer-center-txt">版权所有 © 蜗牛笔记 (V-1.0)</span>
                <span class="footer-center-txt">备案号：<a href="#">蜀ICP备15014130号-1</a></span>
            </div>
            <div class="footer-center-m">
                <span class="footer-center-txt">友情链接</span>
                <span class="footer-center-txt"><a href="#">在线课堂</a>    <a href="#">直播课堂</a>    <a href="#">培训中心</a>    <a href="#">UI设计学院</a></span>
            </div>
            <div class="footer-center-r">
                <span class="footer-center-txt">联系我们</span>
                <span class="footer-center-txt"><a href="#">成都★孵化园   QQ/微信：15903523</a></span>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.footer{
    width: 100%;
    height: 120px;
    background-color:black;
    display: flex;
    justify-content: center;
}
.footer-center{
    width: 1100px;
    height: 100%;
    /*background-color:black;*/
    display: flex;
    justify-content: center;
}
.footer-center-l{
    width: 32%;
    height: 100%;
    /*background-color: rgb(121, 146, 228);*/
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.footer-center-m{
    width: 36%;
    height: 100%;
    /*background-color: rgb(121, 228, 148);*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer-center-r{
    width: 32%;
    height: 100%;
    /*background-color: rgb(121,228, 148);*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}
.footer-center-txt{
    margin-top: 10px;
    color: white;

}
</style>