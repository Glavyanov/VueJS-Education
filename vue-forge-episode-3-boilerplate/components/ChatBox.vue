<script lang="ts" setup>
import { Message, User } from "~~/types";
import { nanoid } from "nanoid";

const props = defineProps<{
  messages: Message[];
  users: User[];
  me: User;
  usersTyping?: User[];
}>();

const emit = defineEmits<{
  (event: "newMessage", newMessage: Message): void;
}>();

function getUser(userId: string) {
  return props.users.find((user) => user.id === userId);
}

const messageBox = ref<HTMLElement>();

watch(
  () => props.messages.length,
  async () => {
    await nextTick();
    if (messageBox.value) {
      messageBox.value.scrollTop = messageBox.value.scrollHeight;
    }
  }
);

const isOpen = ref(false);

const textMessage = ref("");

function sendMessage() {
  emit("newMessage", {
    id: nanoid(),
    userId: props.me.id,
    createdAt: new Date(),
    text: textMessage.value,
  });
  textMessage.value = "";
}
</script>

<template>
  <div class="fixed bottom-[10px] right-[10px]">
    <button
      v-show="!isOpen"
      class="bg-blue-500 p-3 rounded"
      @click="isOpen = true"
    >
      <IconChat class="w-8 h-8 text-white" />
    </button>

    <div
      v-if="isOpen"
      class="box bg-gray-300 rounded dark:bg-gray-800 w-[450px]"
    >
      <header
        class="bg-gray-200 dark:bg-gray-900 px-4 flex justify-between items-center"
      >
        Customer Support Chat
        <button class="p-4 pr-0" @click="isOpen = false">x</button>
      </header>

      <div ref="messageBox" class="messages p-4 overflow-y-scroll max-h-[80vh]">
        <ChatBubble
          v-for="message in messages"
          :key="message.id"
          :user="getUser(message.userId)"
          :message="message"
          :is-mine="me.id === message.userId"
        />
        <ChatBubble v-for="user in usersTyping" :user="user">
          <AppLoading />
        </ChatBubble>
      </div>

      <footer class="p-2">
        <input
          type="text"
          v-model="textMessage"
          @keypress.enter.exact.prevent="sendMessage"
          placeholder="Type your message"
          class="input w-full block"
        />
      </footer>
    </div>
  </div>
</template>
