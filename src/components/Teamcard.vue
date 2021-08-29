<template>
  <div class="team__card white pa-4">
    <div class="team__card__img">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
    </div>
    <div class="d-flex flex-column justify-space-between" style="width: 100%;">
      <div>
        <div class="team__card__title">Dr. John Doe</div>
        <div class="team__card__subtitle">Phd. Microbiology</div>
      </div>
      <div class="amber--text d-flex align-center" style="font-size: 11px; font-weight: 300; leter-spacing: .5px; grid-gap: 4px;">
        <span v-text="'4.5'" /> <v-icon color="amber" v-text="'mdi-star'" size="12" /> <span v-text="'Instructor Rating'" />
      </div>
      <div class="black--text d-flex align-center" style="font-size: 11px; font-weight: 300; leter-spacing: .5px; grid-gap: 6px;">
        <div>
          <span style="font-weight: 500 !important;" v-text="'20,102'" /> <span v-text="'Student'" />
        </div>
        <div style="height: 4px; width: 4px; border-radius: 50%; background-color: rgb(0 0 0 / 40%);" />
        <div>
          <span style="font-weight: 500 !important;" v-text="'8'" /> <span v-text="'Courses'" />
        </div>
      </div>
    </div>
  </div>  
</template>

<style scoped>
.team__card {
  display: grid;
  grid-template-columns: 90px calc(100% - 106px);
  grid-gap: 16px;
  border-radius: 6px;
  overflow: hidden;
  letter-spacing: .5px;
  transition: ease-in-out 250ms;
}
.team__card:hover {
  border-radius: 6px;
  transform: translateY(-6px);
}
.team__card__img {
  height: 90px;
  width: 90px;
  border-radius: 6px;
  overflow: hidden;
}
.team__card__title { font-weight: 500; }
.team__card__subtitle {
  font-weight: 400;
  font-size: 12px;
}
</style>