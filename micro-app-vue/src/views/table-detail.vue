<template>
    <div>
        <el-input type="text" v-model="val" @input="inputHandler( 'hello' ,$event)" alt="alt"/>
        <br/>
        <h3 @click="dispatchData">原生数据通信</h3>
        <h3 @click="dispatchRedux">基于REDUX通信</h3>
        <h4 @click="jumpUrl">跳转react的详情页</h4>

        <br/>
        <ul v-for="(item,index) of ary" :key="index" @click="jumpList">
            <li>
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
  import list from "./js/table-detail"

  export default list
</script>

<style scoped>

</style>