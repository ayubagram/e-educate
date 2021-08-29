<template>
  <div class="review__card pa-3 pa-sm-4 pa-md56 pa-lg-6 white">
    <v-avatar size="100">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
    </v-avatar>
    <div>
      <p class="mb-1 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam recusandae nostrum quod odio libero. Ut, cumque.</p>  
      <v-rating background-color="orange lighten-3" color="orange" readonly size="14" dense :value="4.2" half-increments />
      <div class="title my-1" style="line-height: 1;">John Doe</div>
      <div style="font-size: 12px; letter-spacing: .5px;">Practitioner</div>
    </div>
  </div>  
</template>

<style>
.review__card {
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
  text-align: center;
  border: .5px solid black;
  transition: ease-in-out 250ms;
}
p { font-size: 13px; }
.review__card:hover {
  border-radius: 6px;
  border: .5px solid transparent;
  transform: translateY(-6px);  
}
</style>