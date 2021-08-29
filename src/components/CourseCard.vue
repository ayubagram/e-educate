<template>
  <div class="course__card">
    <div class="course__card__img">
      <img src="https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg" alt="Course name">
    </div>
    <div class="course__card__content pa-3 pa-sm-4 pa-lg-5">
      <div class="d-flex justify-space-between align-center">
        <v-chip small color="primary">Biology</v-chip>
        <div class="title" style="line-height: 1;">$465</div>
      </div>
      <div class="course__card__title mt-2">Masters in Microbiology with extra curriculum</div>
      <div class="d-flex justify-space-between align-center my-2">
        <div class="d-flex align-center" style="grid-gap: 4px;">
          <span class="amber--text" style="font-size: 12px; font-weight: 500;">4.4</span>
          <v-icon v-text="'mdi-star'" size="16" color="amber" />
          <span style="font-size: 12px; font-weight: 300;">(65456)</span>
        </div>
        <div class="d-flex align-center" style="font-weight: 300; font-size: 12px; grid-gap: 4px;">
          <span>(8, 254)</span>
          <span>Enrolled</span>
        </div>
      </div>
      <v-divider />
      <div class="d-flex align-center mt-3">
        <v-avatar size="50">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
        <div class="ml-2" style="line-height: 1;">
          <div class="mb-1 font-weight-bold" style="line-height: 1;">Dr. John Doe</div>
          <small>Phd. Biology</small>
        </div>
      </div>
    </div>
  </div>    
</template>

<style scoped>
.course__card {
  border-radius: 10px;
  box-shadow: 0 1px 15px 0 rgb(255 32 89 / 10%);
  overflow: hidden;
  cursor: pointer;
  transition: ease-in-out 250ms;
}
.course__card:hover {
  border-radius: 6px;
  transform: translateY(-6px);
}
.course__card__img {
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
}
.course__card__title {
  font-weight: 500;
  font-size: 17px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>