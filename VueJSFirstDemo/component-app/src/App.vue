<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="{id, ...friend}, idx in friends"
        :key="id + idx"
        :id="id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.favourite"
        @toggle-favourite="toggleFavouriteStatus"
        @delete="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import { useFriendStore } from './stores/friendStore';
import { storeToRefs } from 'pinia';

export default {
  data() {
    const {friends} = storeToRefs(useFriendStore());
    return {
      friends
    };
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      const identifiedFriend = this.friends.find((f) => f.id === friendId);
      identifiedFriend.favourite = !identifiedFriend.favourite;

    },
    addContact(name, phone, email) {

      const newFriendContact = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        favourite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteFriend(friendId) {
      this.friends = this.friends.filter((f) => f.id !== friendId);
    },
  },
  /* mounted(){
    console.log(this);
  } */
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
  background-color: #1a1a1a;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#new-friend-form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  background-color: #42b883;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
