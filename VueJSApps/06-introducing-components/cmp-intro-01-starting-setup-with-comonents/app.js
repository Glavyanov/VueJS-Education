const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lor",
          phone: "888877777",
          email: "manuel@mail.com",
        },
        {
          id: "johndoe",
          name: "John Doe",
          phone: "9999977777",
          email: "johndoe@mail.com",
        },
        {
          id: "janedoe",
          name: "Jane Doe",
          phone: "6666677777",
          email: "janedoe@mail.com",
        },
      ],
    };
  },
});
// always contain a dash avoid a clash
app.component("friend-contact", {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button>{{friend.detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "johndoe",
        name: "John Doe",
        phone: "9999977777",
        email: "johndoe@mail.com",
      },
    };
  },
  methods: {
    toggleDetails(id) {
      this.friends.map((f) =>
        f.id === id ? (f.detailsAreVisible = !f.detailsAreVisible) : f
      );
    },
  },
});

app.mount("#app");
