<template >
    
    <div class="navi">
        <div class="navi-center">
        <div class="navi-center-life">
           <router-link to="/PaGe"> <h3 class="navi-center-txt" >快捷导航</h3></router-link>
           <!-- <router-view></router-view> -->
            <h4 class="navi-center-txt">PHP开发</h4>
            <h4 class="navi-center-txt">JAVA开发</h4>
            <h4 class="navi-center-txt">Python开发</h4>
            <h4 class="navi-center-txt">web前端</h4>
            <h4 class="navi-center-txt">测试开发</h4>
            <h4 class="navi-center-txt">数据安全</h4> 
            <h4 class="navi-center-txt">网络安全</h4>
            <h4 class="navi-center-txt">七七八八</h4>
        </div>
        <div class="navi-center-right">
            <h4 class="navi-center-txt" @click="showModal">登录</h4>
            <h4 class="navi-center-txt" @click="showModal">注册</h4>
            </div>
        </div>
   
  <div>
    <a-modal v-model="visible"  @ok="handleOk">
       <a-tabs type="card" @change="callback">
    <a-tab-pane key="1" tab="登录" type="button" id="1" >
        <div id="one" >
        <div class="modal-inputs">
            <div class="modal-input">
                <div class="modal-input-l">登录邮箱： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入登录邮箱" />
                </div>
            </div>
            <div class="modal-input">
                <div class="modal-input-l">登录密码： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入登录密码" />
                </div>
            </div>
            <div class="modal-input">
                <div class="modal-input-l">图片验证码： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入图片验证码" />
                </div>
            </div>
        </div>
        </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="注册" id="2">
        <div  id="two" >
         <div class="modal-inputs">
            <div class="modal-input">
                <div class="modal-input-l">注册邮箱： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入注册邮箱" />
                </div>
            </div>
            <div class="modal-input">
                <div class="modal-input-l">注册密码： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入注册密码" />
                </div>
            </div>
            <div class="modal-input">
                <div class="modal-input-l">邮箱验证码： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入邮箱验证码" />
                </div>
            </div>
        </div> 
    </div>
    </a-tab-pane>
    <a-tab-pane key="3" tab="找回密码">
        <div  id="two" >
         <div class="modal-inputs">
            <div class="modal-input">
                <div class="modal-input-l">注册邮箱： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入注册邮箱" />
                </div>
            </div>
            <div class="modal-input">
                <div class="modal-input-l">新的密码： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入新的密码" />
                </div>
            </div>
            <div class="modal-input">
                <div class="modal-input-l">邮箱验证码： </div>
                <div class="modal-input-r">
                    <a-input placeholder="请输入邮箱验证码" />
                </div>
            </div>
            </div>
        </div> 
    </a-tab-pane>
    </a-tabs>
    </a-modal>

    
  </div>
    </div>
</template>
<script>






export default {
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            console.log(e);
            this.visible = false;
        },
    },
    
};
</script>
<style>
.navi{
    width: 100%;
    height: 55px;
    background-color: gray;
    display: flex;
    justify-content: center;
}
.navi-center{
    width: 69%;
    height: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navi-center-life{
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
}
.navi-center-right{
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navi-center-txt{
    color: white;
    cursor: pointer;
}
.box{
width: 100%;
height: 50px;
background-color: burlywood;
margin: 0,0,0,0;

}


</style>