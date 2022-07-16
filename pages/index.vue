<template lang='pug'>

.inner
  Header
  Popup
  Sidebar
  Products

</template>

<style lang='stylus'>

.inner
  display grid
  grid-template-columns 1fr auto
  grid-template-areas 'header header' 'main sidebar'
  max-width 1000px
  margin 15px auto
  border-top 5px solid #3c4ecb
  border-bottom 5px solid #000
  background #e8e8e8

</style>

<script>

  export default {
    middleware: 'auth',
  }
  
</script>