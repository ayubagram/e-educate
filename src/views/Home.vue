<template>
  <div class="home">
    <!-- Home Banner -->
    <div class="home__banner">
      <div class="home__banner__content white--text">
        <div style="line-height: 1.2">Learn Our Courses <br> And Earn New Skills</div>
        <p class="my-3 my-sm-5 my-md-7 my-lg-9">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br> Aut quas ducimus architecto voluptatum.</p>
        <v-btn class="primary elevation-0" to="/courses">Discover more</v-btn>
      </div>
    </div>

    <!-- Our Team -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: #f5f6f9;">
      <v-container>
        <div class="text-h5 text-md-h4 font-weight-bold text-center  mb-4 mb-sm-5 mb-md-6 mb-lg-7" style="line-height: 1.2;">Our Highly Skilled Team</div>
        <div class="teams">
          <TeamCard v-for="a in 6" :key="a" />
        </div>
        <div class="text-center  mt-4 mt-sm-5 mt-md-6 mt-lg-7">
          <v-btn width="150" color="primary" outlined to="/instructor">view all</v-btn>
        </div>
      </v-container>
    </div>

    <!-- Our Courses -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14">
      <v-container>
        <div class="text-h5 text-md-h4 font-weight-bold text-center  mb-4 mb-sm-5 mb-md-6 mb-lg-7" style="line-height: 1.2;">Our Popular Courses</div>
        <div class="courses">
          <CourseCard v-for="a in 4" :key="a" />
        </div>
        <div class="text-center  mt-4 mt-sm-5 mt-md-6 mt-lg-7">
          <v-btn width="150" color="primary" outlined to="/courses">view all</v-btn>
        </div>
      </v-container>
    </div>

    <!-- Our Team -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: #f5f6f9;">
      <v-container>
        <div class="text-h5 text-md-h4 font-weight-bold text-center mb-4 mb-sm-5 mb-md-6 mb-lg-7" style="line-height: 1.2;">What Our Student Say...</div>
        <div class="reviews">
          <ReviewCard v-for="a in 4" :key="a" />
        </div>
        <div class="text-center mt-4 mt-sm-5 mt-md-6 mt-lg-7">
          <v-btn width="150" color="primary" outlined to="/reviews">view all</v-btn>
        </div>
      </v-container>
    </div>

    <!-- Join Us -->
    <div class="join__us secondary">
      <v-container class="d-flex align-center justify-center fill-height">
        <div class="white--text text-center">
          <div class="text-h5 text-md-h4 mb-2">Ready to Join...?</div>
          <p style="opacity: .75;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis facere officia iste omnis earum provident deleniti doloribus ipsum voluptates quasi libero animi recusandae, sed natus? Explicabo debitis laudantium possimus praesentium.</p>
        </div>
        <v-btn large color="primary" to="/login" width="150">register</v-btn>
      </v-container>
    </div>
    
  </div>
</template>

<script>
import TeamCard from '../components/Teamcard.vue'
import CourseCard from '../components/CourseCard.vue'
import ReviewCard from '../components/ReviewCard.vue'
export default {
  components: { TeamCard, CourseCard, ReviewCard },
}
</script>

<style scoped>
.home__banner {
  height: calc(100vh - 70px);
  background-image: url('https://keystoneacademic-res.cloudinary.com/image/upload/f_auto,q_auto,c_fill,w_1920/element/10/107782_shutterstock_524512423.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-size: 50px;
}
.home__banner__content {
  height: 100%;
  width: 100%;
  background-color: rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
p {
  font-size: 14px !important;
  letter-spacing: .5px;
}
.join__us {
  border-radius: 12px;
  height: 40vh;
}
@media (max-width: 1060px) {
  .home__banner { height: 80vh; font-size: 45px; }
} 
@media (max-width: 860px) {
  .home__banner { height: 65vh; font-size: 40px; }
} 
@media (max-width: 760px) {
  .home__banner { height: 50vh; font-size: 35px; }
} 
@media (max-width: 560px) {
  .home__banner { height: 40vh; font-size: 30px; }
} 
</style>