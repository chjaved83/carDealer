<template>
  <q-btn
    no-caps
    :label="label"
    class="bg-primary text-white radius-8"
    size="16px"
    :padding="padding"
    @click="emit('click')"
  />
</template>
<script setup>
const emit = defineEmits(["click"])
defineProps({
  label:String,
  to:String,
  padding:String,
})
</script>
