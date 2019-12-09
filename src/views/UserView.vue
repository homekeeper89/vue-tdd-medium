<template>
  <div>
    <VUserSearchForm />
    <VUserProfile />
  </div>
</template>
<script>
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
export default {
  name: 'UserView',
  components: {
    VUserSearchForm,
    VUserProfile,
  }
}
</script>