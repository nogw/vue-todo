<template>
  <div class="input">
    <input v-model="content" placeholder="New task..." v-on:keyup.enter="addTodo()" type="text" name="new_task" id="new_task">
    <button v-on:click="addTodo()"><unicon name="plus-circle" fill="#d1d1d1"/></button>
  </div>
  <ul id="todos">
    <li v-on:click="markTodo($event)" :class="[item.mark ? 'mark' : 'no-mark']" v-for="(item, index) in items" :id="index" :key="item.message">
      {{ item.message }} <unicon v-on:click="deleteTodo($event)" :id="index" name="trash" fill="royalblue"/>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Task',
    data() {
      return {
        items: [
        ],
        content: "",
        notes: ""
      }
    }, 
    mounted() {
      if (localStorage.items) this.items = JSON.parse(localStorage.items)
    },

    //TODO: apply watch properties to update localhost in changes
    
    methods: {
      addTodo() {
        if (this.content.length > 0) {
          this.items.push({ message: this.content, mark: false })
          localStorage.setItem("items", this.items)
          this.content = ""
        }
      },
      deleteTodo(t) {
        this.items.splice(t.target.id, 1)
        localStorage.setItem("items", this.items)
      },
      markTodo(t) {
        this.items[t.target.id].mark = this.items[t.target.id].mark == true ? false : true
        localStorage.setItem("items", this.items)
      }
    },
  }
</script>

<style scoped>
  .input {
    width: 300px;
    height: 50px;
    display: flex;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.05);
    border-radius: 10px;
  }
  
  .input input{
    outline: none;
    width: 100%;
    background-color: #fff;
    padding: 0px 0px 0px 20px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .input input::placeholder {
    font-size: 14px;
    opacity: 0.5;
  }
  
  .input button{
    background-color: #fff;
    outline: none;
    border: none;
    height: 50px;
    width: 50px;
    padding: 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input button .unicon {
    display: flex;
    align-items: center;
    padding: 0px 2px 0px 0px;
    justify-content: center;
  }

  #todos {
    margin-top: 20px;
    display: flex;
    flex-direction: column-reverse;
  }

  #todos li {
    list-style: none;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    padding: 18px 22px;
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.05);
    user-select: none;
  }

  #todos .mark {
    transition: 300ms ease all;
    color: #b1b1b1;
    text-decoration: line-through;
  }

  #todos li .unicon {
    position: absolute;
    right: 14px;
    cursor: pointer;
    transition: all 200ms ease;
    margin-top: 3px;
  }

  #todos li .unicon:hover {
    transform: scale(1.05);
  }

  #todos li .unicon:active {
    transform: scale(0.95);
  }
</style>