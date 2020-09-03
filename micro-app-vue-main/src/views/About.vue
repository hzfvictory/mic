<template>
    <div style="height: 2000px">
        <canvas ref="canvas" @click="drawCanvas"/>

        <h1 class="playful" aria-label="Wash your hands">
            <span aria-hidden="true">H</span>
            <span aria-hidden="true">i</span>
            <br/>
            <span aria-hidden="true">H</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">l</span>
            <span aria-hidden="true">l</span>
            <span aria-hidden="true">o</span>
            <br/>
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
  export default {
    name: 'app',
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {
      drawCanvas() {
        console.log(1);
      }
    },
    filters: {},
    watch: {},
    computed: {},
    async created() {
      // const a = await fetch('www.jing999.cn/shay').then(res => res.json());
      // console.log(a.aaa);
    },
    mounted() {
      let canvas = this.$refs.canvas;
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fillStyle = "#fff";
      ctx.globalAlpha = 0.2;
      ctx.fill();
      console.log(ctx);
    }
  }
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
        color: #5362F6;
        text-shadow: textShadow(0.25, 6, #E485F8);
        animation: scatter 1.75s infinite;
    }

    .playful span:nth-child(2n) {
        color: #ED625C;
        text-shadow: textShadow(0.25, 6, #F2A063);
        animation-delay: 0.3s;
    }

    .playful span:nth-child(3n) {
        color: #FFD913;
        text-shadow: textShadow(0.25, 6, #6EC0A9);
        animation-delay: 0.15s;
    }

    .playful span:nth-child(5n) {
        color: #555BFF;
        text-shadow: textShadow(0.25, 6, #E485F8);
        animation-delay: 0.4s;
    }

    .playful span:nth-child(7n), .playful span:nth-child(11n) {
        color: #FF9C55;
        text-shadow: textShadow(0.25, 6, #FF5555);
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
        font-family: "STHeitiTC-Light";
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
