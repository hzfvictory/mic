<template>
    <div>
        <input type="text" @input="inputHandler( 'hello' ,$event)"/>
        <div v-for="(item,index) of ary" :key="index" @click="jumpList">
            {{item}}
        </div>
    </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        ary: [...new Array(150).keys()],
        name: {a: 1}
      }
    },
    methods: {
      jumpList() {
        this.$router.push("/table-list")
      },
      inputHandler(msg, e) {
        console.log(e.target.value)
        localStorage.setItem('input', e.target.value)
      }
    },
    created() {
    },
    mounted() {
      // this.timer = setInterval(() => {
      //   console.log(Date.now())
      // }, 1000)
      //
      // this.$once('hook:beforeDestroy', () => {
      //   clearInterval(this.timer);
      // })
    },
    beforeRouteLeave(to, from, next) {
      if (to.name === 'table-list') {
        this.$store.commit('change', ['tableLists'])
      } else {
        this.$store.commit('change', []);
      }
      next()
    }
  }
</script>

<style scoped>

</style>