const app = Vue.createApp({
  data() {
    return {
      /* courseGoal: {name: 'Max'}, */
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and building amazing apps!",
      /* courseGoalC: "<h2 style='color: white;'>More Learn Vue!</h2>",  */ /*not use often*/
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const rnd = Math.random();
      if (rnd < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
