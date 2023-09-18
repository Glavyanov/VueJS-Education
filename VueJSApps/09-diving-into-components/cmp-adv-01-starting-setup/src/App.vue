<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>

    <!-- keep alive for input field, should contain exactly one component child-->

    <keep-alive>
      <component :is="selectedComponent"></component> 
    </keep-alive>

    <!-- <ActiveGoals v-if="selectedComponent === 'active-goals'" />
    <keep-alive>
        <ManageGoals v-if="selectedComponent === 'manage-goals'" />  
    </keep-alive> -->
    <!-- <the-header></the-header> -->
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p> {{ slotProps['another-prop'] }}</p>
    </course-goals> -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
/* import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue"; */

export default {
  components: {
    /* 'the-header': TheHeader, */
    TheHeader,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "ActiveGoals",
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
