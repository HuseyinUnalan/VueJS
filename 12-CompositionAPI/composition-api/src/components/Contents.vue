<template>
<div>
  <div v-for="content in contents" :key="content.id">
    {{ content.title }}
  </div>
</div>
</template>

<script>
export default {
  props: ['contents'],
  setup(props) {
    console.log(props.contents);
  },
}
</script>

<style>

</style>