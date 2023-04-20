<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>"Welcome to Your Vue.js App"</h1>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add Item
    </button>
  </div>
  <form class="add-item-form" v-if="editing" @submit.prevent="saveItem">
    <input v-model.trim="newItem" type="text" placeholder="Add an item" />
    <label>
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
    <button :disabled="newItem.length < 5" class="btn btn-primary">
      Save Item
    </button>
  </form>
  <p class="counter">{{ characterCount }} /200</p>
  <ul>
    <li
      v-for="item in reversedItems"
      @click="togglePurchased(item)"
      :key="item.id"
      class="static-class"
      :class="{
        strikeout: item.purchased,
        priority: item.highPriority,
      }"
    >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">Nothing to see here</p>
</template>

<script setup>
import { ref, computed } from "vue";

const header = ref("Shopping List App");
const characterCount = computed(() => {
  return newItem.value.length;
});
const editing = ref(false);
const items = ref([
  {
    id: 1,
    label: "10 party hats",
    purchased: true,
    highPriority: false,
  },
  {
    id: 2,
    label: "2 board games",
    purchased: true,
    highPriority: false,
  },
  {
    id: 3,
    label: "20 cups",
    purchased: false,
    highPriority: true,
  },
]);
const reversedItems = computed(() => [...items.value].reverse());
const newItem = ref("");
const newItemHighPriority = ref(false);
const saveItem = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    highPriority: newItemHighPriority.value,
  });
  newItem.value = "";
  newItemHighPriority.value = "";
};
const doEdit = (e) => {
  editing.value = e;
  newItem.value = "";
  newItemHighPriority.value = "";
};

const togglePurchased = (item) => {
  item.purchased = !item.purchased;
};
</script>

<style>
body {
  background: #eff8ff;
  height: 100vh;
  width: 100vw;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.counter {
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #627385;
  height: 100vh;
  width: 600px;
  box-shadow: 3px 3px rgb(21, 29, 100), -1em 0 0.4em olive;
  padding: 60px;
}
h1 {
  color: #3d4852;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #6cb2eb;
  font-size: 1.25rem;
  transition: all 0.1s ease-in;
  margin-top: 0.5rem;
  display: block;
}

a:hover {
  color: #3490dc;
}

li,
p {
  display: flex;
  align-items: center;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: #3d4852;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

li:hover {
  color: #22292f;
}

li input {
  margin: 0 0.5rem 0;
}

#shopping-list > input,
#shopping-list > select {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.add-item-form,
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-item-form input {
  width: 70%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.btn {
  border: none;
  border-radius: 3px;
  margin: auto 0;
  padding: 0.5rem 0.75rem;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in;
}

.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}

.btn-primary {
  background: #6cb2eb;
  color: #fff;
}

.btn-primary:hover {
  background: #3490dc;
}

.btn-cancel {
  background: #ef5753;
  color: #fff;
}

.btn-cancel:hover {
  background: #e3342f;
  color: #fff;
}

.strikeout {
  text-decoration: line-through;
  color: #b8c2cc;
}

.strikeout:hover {
  color: #8795a1;
}

.priority {
  color: #de751f;
}
input[type="checkbox"] {
  display: inline !important;
  box-shadow: none;
  width: auto;
}
</style>
