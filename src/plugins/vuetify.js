import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ff2059',
        secondary: '#00063a',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },  
});
