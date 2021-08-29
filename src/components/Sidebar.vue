<template>
  <v-navigation-drawer color='primary' dark disable-resize-watcher mobile-breakpoint="10024" v-model="drawer" width="230" app>

    <v-card height="150" tile elevation='0' class='primary d-flex justify-center align-center title'>
      <b><span class="secondary--text">e-educate</span></b>
    </v-card>

    <v-divider></v-divider>

    <v-list expand nav tile shaped class="pl-0">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in menu" :key="i" :to="item.to">
          <v-list-item-icon class="mx-2">
            <v-icon size='20' v-text="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 18px !important;" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    menu: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Courses', icon: 'mdi-post', to: '/courses' },
      { title: 'Instructors', icon: 'mdi-account-group', to: '/instructor' },
      { title: 'Reviews', icon: 'mdi-star', to: '/reviews' },
      { title: 'contact us', icon: 'mdi-account-box', to: '/contact' },
    ]
  }),

  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    },      
  },
}
</script>