<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreAvailable ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">
      {{ isFavourite ? "Unfavourite" : "Favourite" }}
    </button>
    <ul v-if="detailsAreAvailable">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
      <button @click="$emit('delete', id)">Delete</button>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id:{
      type:String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: String,
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function(value) {
        return value === true || value === false;
      },
    },
  },
  /* props:[
    "name",
    "phoneNumber",
    "emailAddress",
    "isFavourite",
  ], */
  emits: ['toggle-favourite', 'delete'],
  /* emits: {
    'toggle-favourite': function(id){
      if(id){
        return true;
      }else{
        console.warn('Id is mising');
        return false;
      }
    }, 
  }, */
  data() {
    return {
      detailsAreAvailable: false,
      /* friend: {
        id: "manuel",
        name: "Manuel Lor",
        phone: "888877777",
        email: "manuel@mail.com",
      }, */
    };
  },
  methods: {
    toggleDetails() {
      /* console.log(this.$attrs); */
      this.detailsAreAvailable = !this.detailsAreAvailable;
    },
    toggleFavourite(){
      this.$emit('toggle-favourite', this.id);
    },
  },
};
</script>
