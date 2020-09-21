<template>
    <table-list
            v-loading="loading"
            @hook:mounted="listenMounted"
            ref="table"
            :multiple="true"
            :otherTableParams="otherTableParams"
            :tableColumn="column"/>
</template>
<script>
  import list from "./js/table-list"

  export default list
</script>

<style>
    .avatar {
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        border-radius: 50%;
        object-fit: cover;
    }
</style>