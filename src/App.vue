<template>
    <div id="app" >
        <HeaderPaet />
        <NaviPart /> 
        <router-view></router-view>
       
        <div class="container">
            <div> 
                <CarouselCount /> 
                 <ContainerPaer />
            </div>
                <RightSidebar />
        </div>
    
                    <div class="container-center-page">
                        <a href="#">
                            上一页&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;14
                            下一页
                        </a>
                    </div>               
                  <FooterPart />
                  
</div>
</template>
<script>
import HeaderPaet from './components/HeaderPaet.vue';
import NaviPart from './components/NaviPart.vue';
import FooterPart from './components/FooterPart.vue';
import CarouselCount from './components/CarouselCount.vue';
import ContainerPaer from './components/ContainerPaer.vue';
import RightSidebar from './components/RightSidebar.vue'




export default {
    components: {
    HeaderPaet,
    NaviPart,
    FooterPart,
    CarouselCount,
    ContainerPaer,
    RightSidebar,
 
},

}
</script>
<style scoped>
body {
    margin: 0px;
}

#app {
    width: 100%;
    height: auto;
    border-color: aqua;
}


.container {
    width: 100%;
    height: auto;
    /* background-color:burlywood;*/
    display: flex;
    justify-content: center;
}







.container-center-img {
    width: 100%;
    height: 313px;
    background-color: darkmagenta;
    margin-top: 15px;
    margin-bottom: 15px;

}
.container-center-page {
    width: 100%;
    height: 114px;
    background-color: gold;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box{
    display: flex;
    justify-content: center;
}
</style>