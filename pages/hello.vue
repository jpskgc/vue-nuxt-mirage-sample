<template>
  <div>
    <input v-model="input"/>
    <button @click="sendData">Click</button>
    <ul>
      <li v-for="value in values" :key="index">
        {{ value.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: "hello",
  data: function () {
    return {
      input: "",
      values: [],
    }
  },
  methods:{
    async sendData(){
      await this.$http.$post('http://localhost:3000/users',{value: this.input})
      const values = await this.$http.$get('http://localhost:3000/users')
      console.log(values)
      this.values = values.users
    }
  },
  async asyncData({ $http }) {
    const values = await $http.$get('http://localhost:3000/users')
    return {values: values.users}
  }
})
</script>

<style scoped>

</style>