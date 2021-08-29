<template>
  <div style="background-color: #f5f6f9;">
    <v-container>
      <div class="display-1">Our Courses</div>
      <div class="reviews mt-3">
        <ReviewCard v-for="a in 10" :key="a" />  
      </div>
    </v-container>
  </div>  
</template>

<script>
import ReviewCard from '../components/ReviewCard.vue'
export default {
  components: { ReviewCard }  
}
</script>