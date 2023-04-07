const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lor",
          phone: "888877777",
          email: "manuel@mail.com",
          detailsAreVisible: false,
        },
        {
          id: "johndoe",
          name: "John Doe",
          phone: "9999977777",
          email: "johndoe@mail.com",
          detailsAreVisible: false,
        },
        {
          id: "janedoe",
          name: "Jane Doe",
          phone: "6666677777",
          email: "janedoe@mail.com",
          detailsAreVisible: false,
        },
      ],
    };
  },
  methods: {
    toggleDetails(id) {
        this.friends.map(f => f.id === id ? f.detailsAreVisible = !f.detailsAreVisible : f);
      
    },
  },
});

app.mount("#app");
