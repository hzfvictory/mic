<template>
    <div>
        <div class="title">{{titleName}}</div>

        <p>{{11 | toRMB | toFixed(3)}}</p>

        <button @click="handleMore">子组件修改父组件的值</button>
        <!--<div @click="$emit('update:title', 'false')">子组件修改父组件的值</div>-->
        <br/>

        <!--        <input ref="input" v-focus v-model="val" type="text">-->

        <div v-once>v-once: {{val}}</div>
        <div>{{val}}</div>

        <a :href='url'>
            {{url}}
            <slot name="a"/>
        </a>

        <slot name="p"/>
        <strong v-demo="{ color: 'red' }">111默认的slot</strong>
        <slot>默认的slot</slot>
    </div>
</template>

<script>
  export default {
    name: 'aaa',
    data() {
      return {
        val: '123'
      }
    },
    directives: {
      // 局部自定义指令
      focus: {
        inserted: function (el) {
          el.focus()
        }
      },
      demo: {
        inserted: function (el, binding) {
          console.log(binding, 'binding');
          console.log(el.style.color = binding.value.color)
        }
      }
    },
    filters: { // 写在filters里面的过滤器是局部过滤器
      toRMB(val) {
        return val * 6.832423
      },
      toFixed(val, num = 2) {
        return '¥' + val.toFixed(num)
      }
    },
    components: {},
    props: {
      titleName: {
        type: [String, Number],
        default: '标题'
      },
      moreBtn: {
        type: Boolean,
        default: false
      },
      url: {
        type: String,
      },
    },
    methods: {
      handleMore() {
        this.$emit('update:titleName', 'sync方式修改');
        this.$emit('more', 111);

      }
    },
    created() {
      console.log('created', '初始化，在这里请求数据');
    },
    mounted() {
      // this.$refs.input.focus();
      console.log('已经挂载到实例');
    },
    deactivated() {
      console.log('deactivated');
      this.val = '123';
    }
  }
</script>


