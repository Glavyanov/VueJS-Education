<template>
  <div style="width: 150px">
    <PanelMenu :model="panelItems" class="w-full md:w-25rem" />
  </div>
  <RouterView class="router-view" />
</template>

<script setup>
import PanelMenu from "primevue/panelmenu";
import { ref } from "vue";
import { useTaskStore } from "./store/taskStore";
import { useRouter } from "vue-router";

const store = useTaskStore();
const label = ref(useTaskStore().label);
const router = useRouter();

const panelItems = ref([
  {
    label: "File",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-plus",
        items: [
          {
            label: "Redirect",
            icon: "pi pi-fw pi-external-link",
            url: "https://primevue.org/panelmenu",
            target: "_blank",
          },
          {
            label: "Video",
            icon: "pi pi-fw pi-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-trash",
      },
      {
        label: "Redirect",
        icon: "pi pi-fw pi-external-link",
        url: "https://primevue.org/panelmenu",
        target: "_blank",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-fw pi-pencil",
    items: [
      {
        label: "Left",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Right",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Center",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "Users",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    label: "Home",
    icon: "pi pi-fw pi-file",
    to: "/",
  },
  {
    label: "About",
    icon: "pi pi-fw pi-file",
    to: "/about",
  },
  {
    label: "Tasks",
    icon: "pi pi-fw pi-check-square",
    items: [
      {
        label: label,
        icon: "pi pi-fw pi-file",
        command: () => {
          store.toggleShowAll();
          label.value = store.getLabel;
          router.push({ name: "tasks" });
        },
      },
    ],
  },
]);
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  margin-left: 20px;
}

#app {
  display: flex;
  justify-content: center;
}

.router-view {
  flex: 2;
}
</style>
