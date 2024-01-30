<template>
    <div>
        <textarea
            v-model="title"
            @keydown.tab="createTask"
            @keyup.enter="createTask"
            @focus="focused = true"
            @blur="focused = false"
            class="focus:bg-white focus:shadow resize-none rounded w-full border-none"
            style="outline: none !important"
            :class="{
                'h-7': !focused,
                'h-20': focused
            }"
            :placeholder="!focused ? '+ Add A Card' : 'Enter a title for this card'"
            >
        </textarea>
    </div>
</template>

<script setup lang="ts">
    import type { Task } from '~~/types';
    import { nanoid } from 'nanoid';

    const emit = defineEmits<{
        (e: "add", payload: Task) : void
    }>();

    const focused = ref(false);
    const title = ref("");

    function createTask(e: Event){
        const emitTitle: any = title.value.trim();
        if(emitTitle){
            e.preventDefault();
            emit("add", {
                title: emitTitle,
                createdAt: new Date(),
                id: nanoid()
            } as Task) ;
        }
        title.value = "";
    }
</script>