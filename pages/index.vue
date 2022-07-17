<template lang='pug'>

.inner
  Header
  Popup
  Sidebar
  Products

</template>

<style lang='stylus' src='../assets/index.stylus'></style>

<script>

  export default {
    middleware: 'auth',
  }
  
</script>