<template>
  <div class="user-profile">
<<<<<<< HEAD
    <img class="user-profile__avatar" :src="user.avatar_url">
    <div class="user-profile__name">
      {{user.name}}
    </div>
    <div class="user-profile__bio">
      {{user.bio}}
    </div>
=======
    <img class ='user-profile__avatar' :src='user.avatar_url'>
    <div class="user-profile__name">{{user.name}}</div>
    <div class="user-profile__bio">{{user.bio}}</div>
>>>>>>> feature/testing-VUserProfile-3
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
