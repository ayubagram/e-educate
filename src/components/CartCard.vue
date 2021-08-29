<template>
  <div class="cart__card pa-3 pa-sm-4 pa-md-5 pa-lg-6">
    <div class="cart__card__img">
      <img src="https://elearningindustry.com/wp-content/uploads/2019/09/online-courses-what-students-want.jpg" alt="Cart Course">  
    </div>
    <div class="cart__card__content ">
      <div class="title" style="line-height: 1;">Masters in microbiology with extra material (begineer)</div>  
      <div class="sub__title">By Dr. John Doe</div>
      <div class="title" style="line-height: 1;">$200</div> 
      <div class="d-flex align-center" style="grid-gap: 6px;">
        <v-rating background-color="orange lighten-3" color="orange" readonly size="14" dense :value="4.2" half-increments />
        <span>(20,253)</span>  
      </div>
      <div style="">
        <span style="font-weight: bold;">(20,545)</span> <span>Students</span>  
      </div>
      <div>
      </div> 
    </div>
  </div>  
</template>

<style scoped>
.cart__card {
  border-radius: 6px;  
  border: 1px solid rgb(0 0 0 / 10%);
  transition: ease-in-out 250ms;
  display: flex;
  grid-gap: 20px;
}
.cart__card__img {
  height: 100px !important;
  width: 100px !important; 
  border-radius: 6px;
  overflow: hidden; 
}
.cart__card:hover { 
  border: 1px solid transparent;
  transform: translateY(-6px);
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
}
.sub__title {
  font-size: 12px;
  color: grey;  
}
span { font-size: 12px; }
</style>