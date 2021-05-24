<template>
  <Task/>
</template>

<script>
import Task from './components/Task.vue'

export default {
  name: 'App',
  components: {
    Task
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    color: #212121;
    background-color: #f1f1f1;
    padding-top: 60px;
  }
</style>
