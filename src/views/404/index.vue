<template>
  <div>
    <h1>{{ t("PageNotFound") }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
