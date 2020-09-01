<template>
    <div class="hello">
        <h1>1234567890</h1>
        <h1 @click="clickha">{{ msg }}</h1>
    </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
      clickha: Function
    },
    methods: {
      // clickha() {
      //   // console.log(this);
      //   // console.log(this.$emit);
      //   this.$emit('clickhandel', '厉害哦')
      // }
    }
  }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
