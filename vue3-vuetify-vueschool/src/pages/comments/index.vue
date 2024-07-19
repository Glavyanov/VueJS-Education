<template>
    <h1>Test Space</h1>
    <v-list>
        <v-list-item v-for="(pony, position) in podium" :key="pony">{{ position }}: {{ pony }}</v-list-item>
    </v-list>
    <pre>{{ `<{v-list-item
                v-for="(_, src, index) in images"
                :key="src + index"
                :value="src"
                >
                    <img  :src="src" />
                </{v-list-item}>`
                }}
    </pre>
    <v-spacer></v-spacer>
    <v-list>
        <v-list-item
            v-for="(_, src, index) in images"
            :key="src + index"
            :value="src"
        >
            <img  :src="src" />
        </v-list-item>
    </v-list>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Image } from "@/interfaces/Image.ts"

const images = import.meta.glob<Image>("@/assets/images/*.jpg", { 
    eager: true
});

const podium = ref({
    gold: 'Rainbow Dash',
    silver: 'Pinkie Pie',
    bronze: 'Sweet Milk'
});
</script>