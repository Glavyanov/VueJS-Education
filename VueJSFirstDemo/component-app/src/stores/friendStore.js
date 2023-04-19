import { defineStore } from "pinia";

export const useFriendStore = defineStore("FriendStore", {
  state: () => {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorem",
          phone: "888877777",
          email: "manuel@mail.com",
          favourite: false,
        },
        {
          id: "johndoe",
          name: "John Doe",
          phone: "9999977777",
          email: "johndoe@mail.com",
          favourite: false,
        },
        {
          id: "janedoe",
          name: "Jane Doe",
          phone: "6666677777",
          email: "janedoe@mail.com",
          favourite: false,
        },
      ],
    };
  },
});
