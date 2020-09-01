<template>
    <div id="app">
        <h1 @click="changeCount">Vuex</h1>
        <h2>{{num}}</h2>
        <h2>{{count}}</h2>

        <h1 @click="changeState">mixins</h1>
        <h2 v-if="show">toast</h2>
        <div @click="onMore('值')">
            父组件
        </div>

        <hr>
        <strong class="tempCom">组件compA</strong> .lazy .number .trim select elementUI v-for @keyup.enter
        @[event]="doSomething" $nextTick $el
        <hr/>

        <compA/>

        <hr>
        <strong class="tempCom">组件compB</strong> .sync slot @ keep-alive ref v-once 自定义指令 管道符 过滤器 deactivated(){}
        activited(){}
        <hr/>
        <button @click="handelHide">{{isHide?"隐藏组件compB":"显示组件compB"}}</button>
        <keep-alive>
            <compB
                    ref="usernameInput"
                    v-if="isHide"
                    url="/profile"
                    :title-name.sync="value.val"
                    @more="onMore"
            >
                <span slot="a">a标签的内容</span>
                <p slot="p">p标签的内容</p>
                <div>default slot</div>
            </compB>
        </keep-alive>

        <hr>
        <strong class="tempCom">组件compC</strong> JSX $parent
        <hr/>
        <CompC
                :name.sync="name"
                :onChange="onMore"
        >

            找数据
            11
            1
            1
            1
            <h1 slot='namedSlot'>
                222
            </h1>
        </CompC>

        <hr>
        <strong class="tempCom">Other</strong> :is radio transition
        <hr/>

        <br/>
        <label for="a">compB</label>
        <input type="radio" v-model="view" value="v-a" id="a"/>
        <label for="b">compC</label>
        <input type="radio" v-model="view" value="v-b" id="b"/>

        <transition name="component-fade" mode="out-in">
            <keep-alive>
                <component v-bind:is="view">
                    这里面也是可以添加数据的
                </component>
            </keep-alive>
        </transition>
    </div>
</template>


<script>
  import compB from '../components/CompB'
  import compA from '../components/CompA'
  import CompC from '../components/CompC'

  import {toggle} from "../mixins/mixin"

  import {mapMutations, mapState, mapActions, mapGetters} from 'vuex'

  export default {
    mixins: [toggle],
    name: 'App',
    components: {
      compA,
      compB,
      CompC,
      'v-a': compB,
      'v-b': CompC

    },
    data() {
      return {
        value: {val: '点击下面按钮修改当前的文字'},
        isHide: true,
        name: 'jsx',
        view: 'v-b',
        num: this.$store.state.test.count
      }
    },
    methods: {
      onMore(val) {
        console.log(`%c父组件  ${val}`, `color:#42b983`);
        // this.value = val
      },
      handelHide() {
        this.isHide = !this.isHide;
      },
      changeCount() {
        this.$store.commit('add');
        this.$store.dispatch('syncAdd');
        // this.add();
        // this.syncAdd()
      },
      ...mapMutations(['add']),
      ...mapActions({
        syncAdd: 'syncAdd' // 重命名
      })
    },
    computed: {
      // count() {
      //     return this.count
      // },
      ...mapGetters(['count']),
      ...mapState({
        num: state => state.test.count
      })
    },
    created() {
      // this.$fetch('http://workplace.jing999.cn/self/member?admin_id=5e09b9e0e4b1c78b2ddde7bd&skip=0&limit=10')
      // console.log(this.$refs.usernameInput, '获取组件的实例');
      // console.log(this.formatDate(new Date()), 'mixins');
      // console.log(this.$options);

      // console.log(`%c store`, `color:#42b983`, this.$store.state.test.count);
      // console.log(`%c store`, `color:#42b983`, this.$store.getters.count);
      console.log(`%c store`, `color:#42b983`, this.$store);
    },
    mounted() {
    },
    errorCaptured(...a) {
      console.log(`%c store`, `color:#42b983`, '你大爷的', a);

      // return false;
    },

  }
</script>

<style scoped type="text/scss">
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }

    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>

