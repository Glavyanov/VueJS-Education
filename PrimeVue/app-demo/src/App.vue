<template>
  <ToastBase></ToastBase>
  <div class="card flex justify-content-center" style="width: 250px">
        <PanelMenu :model="panelItems" class="w-full md:w-25rem" />
  </div>
  <div class="container">
    <span class="p-float-label p-input-filled">
      <InputText id="txt" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <ButtonBase
      label="Greet"
      @click="greet"
      icon="pi pi-user"
      style="margin-left: 20px; height: 50px"
    ></ButtonBase>
    <AutoComplete
      id="autocom"
      v-model="autoCom"
      dropdown
      :suggestions="items"
      @complete="search"
    ></AutoComplete>
    <ButtonBase
    label="Change Theme"
    @click="isDark = !isDark"
    :icon="icon"
    style="margin-left: 20px; height: 50px"
  ></ButtonBase>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useToast } from "primevue/usetoast";
import { usePrimeVue } from "primevue/config";
import PanelMenu from 'primevue/panelmenu';

const PrimeVue = usePrimeVue();

const text = ref();
const icon = ref("pi pi-moon");
const autoCom = ref("");
const isDark = ref(false);

const toast = useToast();
const items = ref([]);
const dateTest = new Date("1970-01-14T14:35:14.200Z").toISOString();
const refDate = ref(dateTest);

const greet = () => {
  toast.add({
    severity: "success",
    summary: autoCom.value,
    detail: text.value,
  });
};

const search = (event) => {
  let _items = [...Array(10).keys()];
  items.value = event.query
    ? [...Array(10).keys()].map((item) => event.query + "-" + item)
    : _items;
};

watch(isDark, () => {
  refDate.value = new Date(refDate.value);
  console.log(refDate.value);
  refDate.value = new Date(refDate.value).toISOString();
  console.log(refDate.value);
  if (isDark.value) {
    PrimeVue.changeTheme(
      "lara-light-purple",
      "lara-dark-indigo",
      "id-to-link",
      () => (icon.value = "pi pi-sun")
    );
  } else {
    PrimeVue.changeTheme(
      "lara-dark-indigo",
      "lara-light-purple",
      "id-to-link",
      () => (icon.value = "pi pi-moon")
    );
  }
});

<<<<<<< HEAD
const panelItems = ref([
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Redirect',
                        icon: 'pi pi-fw pi-external-link',
                        url: 'https://primevue.org/panelmenu',
                        target: '_blank'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                label: 'Redirect',
                icon: 'pi pi-fw pi-external-link',
                url: 'https://primevue.org/panelmenu',
                target: '_blank'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    }]);
=======
watchEffect(() => {
    const d = new Date(refDate.value);
    console.log(refDate.value)
  const check =  !Number.isNaN(d.valueOf()) && d.toISOString() === refDate.value;
    if (check) {
      confirm(refDate.value);
    } else {
      alert("Validation failed");
    }
  }
);
>>>>>>> 67acc121ae7c631441b0d604663c7330b78d4332
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
