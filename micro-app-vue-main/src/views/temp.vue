<template>
    <div>
        {{data}}
    </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        data: [],
      }
    },
    created() {
      this.result()
    },

    methods: {
      result() {

        let k = 3, n = 10;

        let ans;
        let combinationSum3 = function (k, n) {
          ans = [];
          back(k, n, [], 0, 1);
          return ans;
        };

        /*
         * @params {Array} nowArr 当前回溯组合
         * @params {number} sum 当前回溯组合的总和
         * @params {number} start 下次回溯的起点坐标
         */
        function back(k, n, nowArr, sum, start) {
          if (sum === n && nowArr.length === k) {
            return ans.push(nowArr)
          }

          for (let i = start; i <= 9; i++) {
            if (sum + i > n || nowArr.length > k) break;

            back(k, n, [...nowArr, i], sum + i, i + 1)
          }
        }

        this.data = combinationSum3(k, n)
      },
    }
  }
</script>

<style scoped>

</style>