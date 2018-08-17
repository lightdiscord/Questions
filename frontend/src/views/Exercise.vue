<template>
  <div>
    <exercise :exercise="current"></exercise>
  </div>
</template>

<script>
import Exercise from '@/components/Exercise';
import * as Exercises from '@/exercises';

const validity = (id, next) => {
  const valid = Exercises.all().map(({ id }) => id);
  if (!valid.includes(id)) return next('/404');
};

export default {
  data () {
    return {
      id: this.$route.params.id
    };
  },
  components: {
    Exercise
  },
  beforeRouteEnter (to, from, next) {
    const id = to.params.id;

    validity(id, next);

    next();
  },
  beforeRouteUpdate (to, from, next) {
    const id = to.params.id;

    validity(id, next);

    this.id = to.params.id;

    next();
  },
  computed: {
    current () {
      return Exercises.findById(this.id);
      //return Exercises().find(({ id }) => id === this.id);
    }
  }
};
</script>
