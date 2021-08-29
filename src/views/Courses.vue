<template>
  <div style="background-color: #f5f6f9;">
    <v-container>
      <div class="display-1">Our Courses</div>
      <div class="courses mt-3">
        <CourseCard v-for="a in 10" :key="a" />  
      </div>
    </v-container>
  </div>  
</template>

<script>
import CourseCard from '../components/CourseCard.vue'
export default {
  components: { CourseCard }  
}
</script>