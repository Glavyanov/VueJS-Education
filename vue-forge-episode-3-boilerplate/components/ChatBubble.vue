<script lang="ts" setup>
import { User, Message } from "~~/types";
//@ts-expect-error
import Markdown from "vue3-markdown-it";

const props = defineProps<{
  user?: User;
  message?: Message;
  isMine?: boolean;
}>();

const time = useTimeAgo(() => props.message?.createdAt?? new Date());
</script>

<template>
  <div class="chat" :class="{ 'chat-end': isMine, 'chat-start': !isMine }">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img :src="user?.avatar" />
      </div>
    </div>

    <div class="chat-header">
      <strong>{{ user?.name }}</strong>
      &nbsp;
      <time v-if="message">{{ time }}</time>
    </div>

    <div
      class="chat-bubble bg-gray dark:bg-gray-900 max-w-max w-full prose-sm py-0"
    >
      <Markdown v-if="message" :source="message.text" class="w-ful" />
      <slot v-else></slot>
    </div>
  </div>
</template>
