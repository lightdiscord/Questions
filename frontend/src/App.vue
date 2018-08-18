<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <connection></connection>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Connection from './components/Connection';

export default {
  components: {
    Connection
  }
};
</script>
