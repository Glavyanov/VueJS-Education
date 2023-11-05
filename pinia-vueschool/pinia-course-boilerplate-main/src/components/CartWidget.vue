<script setup>
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import { useCartStore } from "../stores/cartStore";
import { storeToRefs } from "pinia";

// data
const active = ref(false);
const { count, items, isEmpty, grouped, groupCount, total } = storeToRefs(
  useCartStore()
);
</script>
<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">{{ count }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!isEmpty">
        <ul class="items-in-cart">
          <CartItem
            v-for="(items, name, index) in grouped"
            :key="`${index} ${name}`"
            :product="items[0]"
            :count="groupCount(name)"
            @updateCount="useCartStore().setItemCount(items[0], $event)"
            @clear="useCartStore().removeFromCard(name)"
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>${{ total }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="useCartStore().$reset()"
            >Clear Cart</AppButton
          >
          <AppButton class="primary">Checkout</AppButton>
        </div>
      </div>
      <div v-else><em>Cart is Empty</em></div>
    </AppModalOverlay>
  </div>
</template>
<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
