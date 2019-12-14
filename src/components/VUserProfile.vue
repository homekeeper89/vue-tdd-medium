<template>
  <div class="user-profile">
    <img class="user-profile__avatar" :src = 'user.avatar__url'>
    <div class="user-profile__name">
      {{user.name}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  props:{
    user:{
      type:Object,
      required:true,
      default:()=>({})
    }
  }
}
</script>
