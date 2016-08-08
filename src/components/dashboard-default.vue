<style>
  .starter-template {
    padding: 40px 15px;
    text-align: center;
  }
</style>

<template>
  <div class="starter-template">
    <h1>DASHBOARD DEFAULT</h1>
    <div>
      <button @click="increment">TEST</button>
    </div>
    <div>
      <span>Count: {{counter}}</span>
    </div>
    <div>
      <button @click="navigateTo('contact')">NAVIGATE TO CONTACT</button>
    </div>    
  </div>
</template>

<script>
export default {
  vuex: {
    actions: {
      increment: ({dispatch, state}) => {
        dispatch('INCREMENT', 1);
      },
      navigateTo: ({dispatch, state}, path) => {
        dispatch('NAVIGATE_TO', path);
      }
    },
    getters: {
      counter: state => state.count
    }
  }
}
</script>