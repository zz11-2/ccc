<template>
    <div style="width: 700px; height: 160px; margin: auto" >
  <a-carousel arrows>
    <div
      slot="prevArrow"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow"  class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>  
    <div ><img style="width: 100%;height: 100%;" src="../assets/1.jpeg" alt=""> </div>
            <div><img src="../assets/2.jpeg" alt=""></div>
           <div> <img src="../assets/22.jpg" alt=""></div>
           <div> <img src="../assets/55.jpg" alt=""></div>
          
        </a-carousel>
  </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
img{
  width: 700px;
  height: 262.5px;
}
element.style>>> .div-box{
    outline: none;
    width: 700px;
    height: 265px;
    margin-top: 15px;
}
.slick-slide slick-active slick-current >>> .div-box {
  width: 700px;
    height: 265px;
    margin-top: 15px;
}

</style>
