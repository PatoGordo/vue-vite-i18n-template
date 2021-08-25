<template>
  <div>
    <h3>{{ t("Clicked") }} {{ counter }} {{ t("Times") }}.</h3>
    <button @click="increment">{{ t("Increment") }}</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

let counter = ref(0);
const { t } = useI18n();

function increment() {
  counter.value += 1;
}
</script>

<style lang="scss" scoped>
div {
  display: grid;
  place-items: center;
}
</style>
