<template>
  <div>
    <VUserSearchForm @submitted="searchUser"/>
    <VUserProfile :user="user"/>
  </div>
</template>
<script>
import {mapState} from 'Vuex'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
export default {
  name: 'UserView',
  components: {
    VUserSearchForm,
    VUserProfile,
  },
  computed:{
    ...mapState({
      user:'user'
    })
  },
  methods:{
    searchUser(username){
      this.$store.dispatch('SEARCH_USER', {username});
    }
  }
}
</script>