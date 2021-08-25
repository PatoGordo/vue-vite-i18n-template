<template>
  <div>
    <h1>{{ t("HomePage") }}</h1>
    <h2>{{ t("HelloWorld") }}</h2>

    <ClickCounter />

    <select v-model="locale">
      <option value="en">English</option>
      <option value="pt">Portuguese</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { ChangeUserPreferences } from "@/shared/user-preferences";
import ClickCounter from "@/components/clickCounter.vue";
import { watch } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

watch(locale, (newVal) => {
  ChangeUserPreferences.changeLangTo(newVal as "en" | "pt");
});
</script>

<style lang="scss" scoped></style>
