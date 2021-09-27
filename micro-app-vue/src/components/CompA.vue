<template>
  <div>
    <div>.lazy {{ msg }}</div>
    <input v-model.lazy="msg" />
    <div>.number【type="number" 默认是字符串】 {{ age }}</div>
    <input v-model.number="age" type="number" />
    <div>.trim {{ trim }}</div>
    <input v-model.trim="trim" />

    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option value="11">A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <span>Selected: {{ selected }}</span>
    </div>

    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>

    <br />

    <input v-on:keyup.enter="submit('厉害，这里满传参不直接执行')" v-model.trim="trim" />

    <ul>
      <li v-for="(item, key, index) of items" :key="key">
        {{ key }} : {{ item }} {{ index }}
        <!--                {{ item.message }}-->
        <!--                {{ item.a }}-->
        <!--                {{ item.b }}-->
        <!--                {{ item.c }}-->
      </li>
    </ul>
    <span v-for="count of 10" :key="count">{{ count }}</span>

    <a :[attributeName]="url">...</a>

    <counter />
  </div>
</template>

<script>
  export default {
    name: 'CompA',
    data() {
      return {
        msg: 111,
        age: 18,
        trim: ' 1    11',
        selected: null,
        value: true,
        items: { message: 'Foo', a: 11, b: 2, c: 3 },
        attributeName: 'href',
        url: 'http://localhost:8081/profile',
      };
    },
    watch: {
      trim() {
        // console.log(newVal);
      },
    },
    methods: {
      submit() {
        // console.log(111, this.trim, val, 'enter');
      },
    },
    created() {
      this.$nextTick(() => {
        // console.log(123, this.$el);
      });
    },
  };
</script>

<style scoped></style>
