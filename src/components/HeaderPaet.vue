<template >
<div class="header">
        <div class="header-center">
            <img src="../assets/22.jpg" class="header-center-imgs">
            <div style="display: flex; align-items: center;">
            <h1 class="header-center-txt">WELCOME TO THE BLACK PARADE</h1>
        </div>
        </div>
    </div>
</template>
<script>
export default{
   
}
</script>
<style>
.header{
    width: 100%;
    height: 80px;
    background-color: blueviolet;
    display: flex;
    justify-content: center;
}
.header-center{
    width: 100%;
    height: 80px;
    background-color: rgb(222,192, 250);
    display: flex;
    justify-content: space-between;
}
.header-center-img{
    height: 100%;
}
.header-center-txt{
color: rgb(243,214,149);
margin-right: 20px;
}
</style>