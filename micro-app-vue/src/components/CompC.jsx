import HelloWorld from './HelloWorld';

const Index = {
  props: {
    name: {
      type: String,
      default: '你好啊',
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      title: '默认文字',
      vall: '默认',
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    handleChange(val) {
      this.title = val + new Date().toLocaleTimeString();
      this.$emit('update:name', this.title);
      this.onChange(this.title);
      // this.$confirm()
    },
  },
  created() {
    // console.log('created', 'CompC');
  },
  mounted() {
    // console.log('mounted');
    // this.$refs.input.focus();
    // console.log(this.$parent);
  },
  render() {
    const { handleChange, title, name, vall, $scopedSlots, $slots } = this;

    // console.log($slots.default);

    return (
      <div>
        <hello-world clickha={() => (this.title = title + '1')} msg={title} />

        <p>父组件传递的值 + {name} </p>

        <button onClick={() => handleChange('修改')}>
          JSX{title} = {vall}
        </button>
        <br />
        <strong ondblclick={() => this.$prompt('副标题', '主标题')}>双击插槽：</strong>
        {$scopedSlots.default()}
        <strong>$slots.default[1]：</strong>
        {$slots.namedSlot}

        <input type="text" v-model={this.vall} />
        <br />
        <input
          ref="input"
          onInput={(e) => {
            this.onChange(e.target.value);
            this.vall = e.target.value;
          }}
          value={this.vall}
          type="text"
        />

        <slot />
      </div>
    );
  },
};

export default Index;
