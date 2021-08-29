<template>
  <div>
    <v-container class="contact">
      <div class="contact__info">
        <div class="mb-3">
          <div class="display-1 mb-2">Contact Info</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis dolor, aperiam temporibus assumenda, porro unde distinctio aliquid saepe accusamus numquam</p>
        </div> 
        <div class="contacts d-flex flex-column" style="grid-gap: 20px;">
          <div v-for="(inf, i) in info" :key="i" class="d-flex align-center">
            <div class="contact__circle secondary">
              <v-icon color="white">{{ inf.icon }}</v-icon>
            </div>
            <div style="line-height: 1;" class="ml-3">
              <div class="title mb-1" style="line-height: 1;">{{ inf.head }}</div>  
              <span>{{ inf.title }}</span>
            </div>
          </div>
        </div> 
      </div>
      <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.475286597595!2d84.88296471436823!3d27.01514346217793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993558b671d2faf%3A0x8922702ad8a7ddf5!2sAgram%20InfoTech%20Pvt.%20Ltd%2C%20Panitanki%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1613635250851!5m2!1sen!2snp" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Agram Infotech"></iframe>  
      </div>
    </v-container> 
    <v-container class="mt-5">
      <div class="headline mb-3">Send Us Message</div>  
      <v-form ref="form" lazy-validation v-model="valid" class="d-flex flex-column" style="grid-gap: 12px;">
        <div class="d-flex flex-column flex-sm-row" style="grid-gap: 12px;">
          <v-text-field v-model="form.name" label="Full Name*" dense outlined hide-details prepend-inner-icon="mdi-account" :rules="[ v => !!v || '' ]" />
          <v-text-field v-model="form.phone" label="Phone Number*" :counter="10" dense outlined hide-details prepend-inner-icon="mdi-phone" :rules="[ v => !!v || '' ]" />  
        </div>
        <v-textarea v-model="form.message" label="Message" dense outlined hide-details prepend-inner-icon="mdi-message" />    
        <v-btn rounded max-width="200" color="secondary" :disabled="!valid" @click="submit">send message</v-btn>
      </v-form>  
    </v-container>
  </div> 
</template>

<script>
export default {
  data: () => ({
    info: [
      { icon: 'mdi-map-marker', title: 'Kathmandu-10, Nepal', head: 'Address' },
      { icon: 'mdi-email', title: 'info@medriasis.com', head: 'Email' },
      { icon: 'mdi-phone', title: '(051) 546 5456', head: 'Phone Number' }
    ],
    valid: true,
    form: {
      name: null,
      phone: null,
      message: null,  
    }
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) console.log('validated') 
      else console.log('not validated') 
    }  
  }  
}
</script>

<style scoped>
p, span {
  line-height: 1.3;
  font-size: 13px;  
}
.contact {
  display: grid;
  grid-template-columns: calc(50% - 30px) calc(50% - 30px);  
  grid-gap: 60px;
}
.contact__circle {
  height: 48px;
  width: 48px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;  
}
.map {
  min-height: 40vh; 
  border-radius: 6px;
  overflow: hidden; 
}
iframe {
  height: 100%;
  width: 100%;  
}
@media (max-width: 1060px) {
  .contact { grid-template-columns: calc(50% - 25px) calc(50% - 25px); grid-gap: 50px; }
}
@media (max-width: 860px) {
  .contact { grid-template-columns: calc(50% - 20px) calc(50% - 20px); grid-gap: 40px; }
}
@media (max-width: 760px) {
  .contact { grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-gap: 30px; }
}
@media (max-width: 600px) {
  .contact { grid-template-columns: 100%; grid-gap: 20px; }
}
</style>