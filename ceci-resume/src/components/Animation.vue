<template>
  <div class="resume-animate">
    <div class="resume-animate__codebox">
      {{msg.name}}
    </div>
    <div class="resume-animate__showbox">
      2
    </div>
  </div>
</template>

<script>
import baseInfor from '../assets/data/baseInfor.js'

export default {
  name: 'Cover',
  data () {
    return {
      msg: baseInfor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
