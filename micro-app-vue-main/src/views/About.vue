<template>
  <div style="height: 2000px">
    <canvas ref="canvas" @click="drawCanvas" />

    <h1 class="playful" aria-label="Wash your hands">
      <span aria-hidden="true">H</span>
      <span aria-hidden="true">i</span>
      <br />
      <span aria-hidden="true">H</span>
      <span aria-hidden="true">e</span>
      <span aria-hidden="true">l</span>
      <span aria-hidden="true">l</span>
      <span aria-hidden="true">o</span>
      <br />
      <span aria-hidden="true">w</span>
      <span aria-hidden="true">e</span>
      <span aria-hidden="true">l</span>
      <span aria-hidden="true">c</span>
      <span aria-hidden="true">o</span>
      <span aria-hidden="true">m</span>
      <span aria-hidden="true">e</span>
      <span aria-hidden="true">!</span>
    </h1>
  </div>
</template>

<script>
  import { concat, mergeWith } from 'lodash';

  export default {
    name: 'app',
    components: {},
    props: {},
    data() {
      return {};
    },
    filters: {},
    watch: {},
    computed: {},
    async created() {
      function customizer(objValue, srcValue) {
        console.log(objValue, srcValue);
        if (_.isArray(objValue)) {
          return concat(objValue, srcValue);
        }
      }

      var object = { a: [1], b: [2], c: [5] };
      var other = { a: [3], b: [4], c: [6] };

      console.log(mergeWith(object, other, customizer));

      // const a = await fetch('www.jing999.cn/shay').then(res => res.json());
      // console.log(a.aaa);
    },
    mounted() {
      let canvas = this.$refs.canvas;
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.2;
      ctx.fill();
    },
    methods: {
      drawCanvas() {
        console.log(12);
      },
    },
  };
</script>

<style lang="scss" type="text/scss" scoped>
  @function textShadow($precision, $size, $color) {
    $value: null;
    $offset: 0;
    $length: $size * (1 / $precision) - 1;

    @for $i from 0 through $length {
      $offset: $offset + $precision;
      $shadow: $offset + px $offset + px $color;
      $value: append($value, $shadow, comma);
    }

    @return $value;
  }

  .playful span {
    position: relative;
    color: #5362f6;
    text-shadow: textShadow(0.25, 6, #e485f8);
    animation: scatter 1.75s infinite;
  }

  .playful span:nth-child(2n) {
    color: #ed625c;
    text-shadow: textShadow(0.25, 6, #f2a063);
    animation-delay: 0.3s;
  }

  .playful span:nth-child(3n) {
    color: #ffd913;
    text-shadow: textShadow(0.25, 6, #6ec0a9);
    animation-delay: 0.15s;
  }

  .playful span:nth-child(5n) {
    color: #555bff;
    text-shadow: textShadow(0.25, 6, #e485f8);
    animation-delay: 0.4s;
  }

  .playful span:nth-child(7n),
  .playful span:nth-child(11n) {
    color: #ff9c55;
    text-shadow: textShadow(0.25, 6, #ff5555);
    animation-delay: 0.25s;
  }

  @keyframes scatter {
    0% {
      top: 0;
    }
    50% {
      top: -10px;
    }
    100% {
      top: 0;
    }
  }

  h1 {
    font-size: 65px;
    text-transform: uppercase; // 大写
    font-family: 'STHeitiTC-Light';
    font-weight: normal;
    display: block;
    width: 666px;
    max-width: 80vw;
    min-height: 90px;
    height: auto;
    text-align: center;
    margin: calc(50vh - 30rem) auto 0;
  }
</style>
