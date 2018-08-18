<template>
  <span v-if="user !== undefined">
    <a @click="login" v-if="!user">Login</a>
    <span v-else>
      Welcome <strong>{{ user.displayName }}</strong>,
      <a @click="logout">Logout?</a>
    </span>
  </span>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState(['user']),
  methods: mapActions(['login', 'logout']),
};
</script>

<style lang="stylus" scoped>
a
  cursor pointer
</style>

