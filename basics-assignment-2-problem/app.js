const app = Vue.createApp({
  data() {
    return {
      message: "Alert from Vue!",
      messageKeyDown: "",
      confirmKeyDown:"",
      messageEnter: "OUTPUT",
    };
  },
  methods: {
    showAlert() {
      alert(this.message);
    },
    onInput(event){
      const eventValue = event.target.value;
      if (eventValue && !/^\s*$/.test(eventValue)) {
        this.messageKeyDown = eventValue;
      } else {
        this.messageKeyDown = "";
      }
    },
    onKeyDown() {
      this.confirmKeyDown = this.messageKeyDown;
    },
    onKeyDownEnter(event) {
      const eventValue = event.target.value;
      if (eventValue && !/^\s*$/.test(eventValue)) {
        this.messageEnter = eventValue;
        event.target.value = "";
      } else {
        this.messageEnter = "OUTPUT";
      }
    },
    resetName(){
      this.confirmKeyDown = "";
      this.messageKeyDown = "";
    }
  },
  /* watch:{
    messageKeyDown(value){
      this.confirmKeyDown = value;
    }  
  } */
});

app.mount("#assignment");
