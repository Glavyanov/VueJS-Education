<template>
  <div>
    <div v-if="wizardInProgress" v-show="asyncState !== 'pending'">
      <keep-alive>
        <component
          ref="currentStep"
          :is="currentStep"
          @update="processStep"
          @updateAsyncState="updateAsyncState"
          :wizardData="form"
        >
        </component>
      </keep-alive>
      <div class="progress-bar">
        <div :style="`width: ${progress}%;`"></div>
      </div>

      <!-- Actions -->
      <div class="buttons">
        <button
          @click="goBack"
          v-if="currentStepNumber > 1"
          class="btn-outlined"
        >Back
        </button>
        <button
          @click="nextButtonAction"
          :disabled="!canGonext"
          class="btn"
        >{{isLastStep ? 'Complete order': 'Next'}}</button>
      </div>

      <pre><code>{{form}}</code></pre>
    </div>
    <div v-else>
      <h1 class="title">Thank you!</h1>
      <h2 class="subtitle">We look forward to shipping your first box!</h2>
      <p class="text-center">
        <a href="https://vueschool.io" target="_blank" class="btn">Go somewhere cool!</a>
      </p>
    </div>
    <div class="loading-wrapper" v-if="asyncState === 'pending'">
      <div class="loader">
        <img src="/spinner.svg" alt="">
        <p>Please wait, we're hitting our servers!</p>
      </div>
    </div>
  </div>
</template>

<script>
import FormPlanPicker from "./FormPlanPicker";
import FormUserDetails from "./FormUserDetails";
import FormAddress from "./FormAddress";
import FormReviewOrder from "./FormReviewOrder";
import { postFormToDB } from "@/api";
export default {
  name: "FormWizard",
  components: {
    FormPlanPicker,
    FormUserDetails,
    FormAddress,
    FormReviewOrder,
  },
  data() {
    return {
      currentStepNumber: 1,
      canGonext: false,
      asyncState: null,
      form: {
        plan: null,
        email: null,
        name: null,
        password: null,
        address: null,
        recipient: null,
        chocolate: false,
        otherTreat: false,
      },
      formComponents: [
        "FormPlanPicker",
        "FormUserDetails",
        "FormAddress",
        "FormReviewOrder",
      ],
    };
  },
  computed: {
    isLastStep() {
      return this.currentStepNumber === this.length;
    },
    wizardInProgress() {
      return this.currentStepNumber <= this.length;
    },
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    },
    currentStep() {
      return this.formComponents[this.currentStepNumber - 1];
    },
    length() {
      return this.formComponents.length;
    },
  },
  methods: {
    submitOrder() {
      this.asyncState = "pending";
      postFormToDB(this.form).then(() => {
        console.log("%cSubmitted", "color: red; font-size: 33px");
        this.asyncState = "success";
        this.currentStepNumber++;
      });
    },
    nextButtonAction() {
      if (this.isLastStep) {
        this.submitOrder();
      } else {
        this.goNext();
      }
    },
    goBack() {
      this.currentStepNumber--;
      this.canGonext = true;
    },
    goNext() {
      this.currentStepNumber++;
      this.$nextTick(() => {
        this.canGonext = !this.$refs.currentStep.$v.$invalid;
      });
    },
    processStep(step) {
      Object.assign(this.form, step.data);
      this.canGonext = step.valid;
    },
    updateAsyncState(state){
      this.asyncState = state;
    }
  },
};
</script>
