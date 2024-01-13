<template>
    <div class="flex gap-4 overflow-x-auto items-start">
        <draggable
            v-model="columns"
            group="columns"
            item-key="id"
            :animation="450"
            handle=".drag-handle"
            class="flex gap-4 overflow-x-auto items-start"
        >
            <template #item="{ element: column } : { element : Column}">
                <div class="column bg-gray-200 p-5 rounded min-w-[200px]">
                    <header class="font-bold mb-4">
                        <DragHandle />
                        <input 
                            v-model="column.title"
                            type="text"
                            @keyup.enter="($event.target as HTMLInputElement).blur()"
                            @keydown.backspace="column.title === '' ?  columns = columns.filter(c => c.id !== column.id) : () => {}"
                            class="bg-transparent focus:bg-white rounded px-1 w-4/5 column-title-input"
                        />
                    </header>
                    <draggable
                        v-model="column.tasks"
                        :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
                        item-key="id"
                        handle=".drag-handle"
                        :animation="450"
                    >
                        <template #item="{ element: task} : {element: Task}">
                            <div>
                                <TrelloBoardTask 
                                    :task="task"
                                    @delete="column.tasks = column.tasks.filter(t => t.id !== $event)"
                                />
                            </div>
                        </template>
                    </draggable>
                    <footer>
                        <NewTask @add="column.tasks.push($event)"/>
                    </footer>
                </div>
            </template>
        </draggable>
        <button 
            @click="createColumn"
            class="bg-fray-200 whitespace-nowrap p-2 rounded opacity-50"
        > + Add Another Column
        </button>
    </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
import type { Column, Task } from "../types";

const alt = useKeyModifier('Alt');
// const columns = ref<Column[]>
// useLocalStorage provide from vueuse!!
const columns = useLocalStorage<Column[]>("Trello Board Columns",[
    {
        id: nanoid(),
        title: "Backlog",
        tasks: [
            {
                id: nanoid(),
                title: "Create marketing landing page",
                createdAt: new Date(),
            },
            {
                id: nanoid(),
                title: "Develop cool new feature",
                createdAt: new Date(),
            },
            {
                id: nanoid(),
                title: "Fix page nav bug",
                createdAt: new Date(),
            }
        ]
    },
    {
        id: nanoid(),
        title: "Selected for Dev",
        tasks: []
    },
    {
        id: nanoid(),
        title: "In Progress",
        tasks: []
    },
    {
        id: nanoid(),
        title: "QA",
        tasks: []
    },
    {
        id: nanoid(),
        title: "Complete",
        tasks: []
    },
]);
function createColumn(){
    columns.value.push(({ 
        id: nanoid(),
        title: "",
        tasks: []
    } as Column));

    //Focus on input title(Column) when we create a new Column; And just for sure use nextTick()
    nextTick(() => {
        (document.querySelector('.column:last-of-type .column-title-input') as HTMLInputElement).focus();
    });
}
</script>