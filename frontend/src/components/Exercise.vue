<template>
  <div class="container">
    <h1>{{ exercise.name }}</h1>

    <strong>This exercise was kindly made by: </strong>

    <ul v-if="exercise.authors.length">
      <li v-for="(author, index) in exercise.authors" :key="index">
        <a :href="author.website">{{ author.name }}</a> {{ formatEmail(author.email) }}
      </li>
    </ul>

    <hr>

    <component :is="exercise.content"></component>

    <hr>

    <form>
      <fieldset>
        <label for="response">Response</label>
        <div class="row">
          <div class="column">
          <textarea placeholder="Enter your response" id="response"
            :disabled="!user"></textarea>
          </div>
        </div>
        <input class="button-primary" type="submit"
          :value="!user ? 'You need to be connected' : 'Send'"
          :disabled="!user">
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'exercise',
  props: ['exercise'],
  methods: {
    formatEmail: (email) =>`<${email}>`
  },
  computed: mapState(['user'])
};
</script>

<style lang="stylus">
textarea[disabled]
  opacity .5
</style>
