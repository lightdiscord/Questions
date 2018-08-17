<template>
  <div class="container">
    <h1>List of exercises</h1>
    <ul>
      <li v-for="exercise in exercises" :key="exercise.id">
        <router-link :to="`/exercises/${exercise.id}`">
          {{ exercise.name }}
        </router-link>
        <span v-if="exercise.authors.length">
          - ( Made by
            <span v-for="(author, index) in exercise.authors" :key="index">
              <a :href="author.website">@{{ author.name }}</a>{{ separator(index, exercise.authors.length) }}
            </span>
          )
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import * as Exercises from '@/exercises';

console.debug(Exercises.all());

export default {
  name: 'home',
  data () {
    return {
      exercises: Exercises.all()
    };
  },
  methods: {
    separator (index, length) {
      if (index === length - 1) return;

      return index < length - 2
        ? ', '
        : ' and ';
    }
  }
};
</script>
