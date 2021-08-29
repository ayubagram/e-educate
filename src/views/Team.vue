<template>
  <div style="background-color: #f5f6f9;">
    <v-container>
      <div class="display-1 mb-2">Our Instrustors</div>
      <div class="teams">
        <TeamCard v-for="a in 10" :key="a" />
      </div>
    </v-container>
  </div>  
</template>

<script>
import TeamCard from '../components/Teamcard.vue'
export default {
  components: { TeamCard }  
}
</script>