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
          <textarea placeholder="Enter your response" id="response"></textarea>
          </div>
        </div>
        <input class="button-primary" type="submit" value="Send">
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'exercise',
  props: ['exercise'],
  mounted () {
    console.debug(this.exercise);
  },
  methods: {
    formatEmail (email) {
      return `<${email}>`;
    }
  }
};
</script>
