<template>
  <div class="login">
    <div class="form__container mx-auto pa-3">
      <v-form class="form white pa-4 pa-sm-6 pa-md-8 pa-lg-10" lazy-validation ref="regRef" v-if="show" v-model="regValid">
        <div class="mb-1">
          <div class="display-1 mb-1">Register</div>  
          <div class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta fuga</div>  
        </div>
        <v-text-field v-model="form1.name" label="Full Name*" dense outlined hide-details prepend-inner-icon="mdi-account" />
        <v-text-field v-model="form1.username" label="Username*" dense outlined hide-details prepend-inner-icon="mdi-account-outline" />
        <v-text-field v-model="form1.email" label="Email*" dense outlined hide-details prepend-inner-icon="mdi-email" />
        <v-text-field v-model="form1.phone" label="Phone*" dense outlined hide-details prepend-inner-icon="mdi-phone" />
        <v-text-field v-model="form1.password" label="Password*" dense outlined hide-details prepend-inner-icon="mdi-lock" />
        <div class="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptate! Est architecto consequatur laborum
        </div>
        <div class="d-flex align-center justify-center">
          <v-btn rounded color="secondary" width="150" :disabled="!regValid" @click="register">submit</v-btn>  
        </div>
        <div class="toggle para d-flex align-center justify-center">
          Already Have Account? <span @click="show = !show">Login</span>  
        </div>
      </v-form>  
      <v-form class="form white pa-4 pa-sm-6 pa-md-8 pa-lg-10" lazy-validation ref="logRef" v-else v-model="logValid">
        <div class="mb-1">
          <div class="display-1 mb-1">Sign In</div>  
          <div class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta fuga</div>  
        </div>
        <v-text-field v-model="form1.username" label="Username*" dense outlined hide-details prepend-inner-icon="mdi-account-outline" />
        <v-text-field v-model="form1.password" label="Password*" dense outlined hide-details prepend-inner-icon="mdi-lock" />
        <div class="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptate! Est architecto consequatur laborum
        </div>
        <div class="d-flex align-center justify-center">
          <v-btn rounded color="secondary" width="150" :disabled="!regValid" @click="login">login</v-btn>  
        </div>
        <div class="toggle para d-flex align-center justify-center">
          Already Have Account? <span @click="show = !show">Register</span>  
        </div>
      </v-form>
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    show: true,
    regValid: true,
    form1: {
      name: null,
      username: null,
      email: null,
      phone: null,
      password: null  
    },
    logValid: true,
    form2: {
      username: null,
      password: null  
    }
  }),
  methods: {
    register() {
      if(this.$refs.regRef.validate()) console.log('validated')
      else console.log('not validated')  
    },
    login() {
      if(this.$refs.logRef.validate()) console.log('validated')
      else console.log('not validated')  
    }  
  }  
}
</script>

<style scoped>
.login {
  height: calc(100vh - 70px);  
  background: linear-gradient(to right top, #ff2059, #00063a);
  display: flex;
  align-items: center;
  justify-content: center;
}
.form__container { width: 600px; }
.form {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
}
.para {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: .5px;  
  color: #00063a9c;
}
.toggle span {
  color: #00063a !important;
  cursor: pointer;
}
</style>