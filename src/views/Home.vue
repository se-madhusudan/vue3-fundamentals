<template class="container">
    <section class="toggler">
      <button @click="showToDo = !showToDo">{{ showToDo ? 'Hide' : 'Show' }} To Do</button>
      <button @click="showCounter = !showCounter">{{ showCounter ? 'Hide' : 'Show' }} Counter</button>
      <button @click="showCard = !showCard">{{ showCard ? 'Hide' : 'Show' }} Card</button>
    </section>

    <section class="todoSection" v-if="showToDo">
      <h2>Add a new task</h2>
      <span>You have {{ allTasks }} {{ allTasks > 1 ? 'tasks' : 'task' }} at the moment</span>
      <div>
        <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task">

        <button @click="addTask" :disabled="newTask.length < 1">
          Add task
        </button>

        <div v-if="newTask.length > 0">
          <h3>New Task Preview</h3>
          <p>{{ newTask }}</p>
        </div>
      </div>

      <ul>
        <li v-for="(task, index) in latest" :key="task.id" @click="finishTask(task)" :class="{ strikeout: task.finished }">
          {{ index + 1 }}. {{ task.name }}

          <span v-if="task.finished">
            <button @click="removeTask(task.id)">Delete Task</button>
          </span>
          <span v-else-if="task.edit">
            <button>Edit Task</button>
          </span>
        </li>
      </ul>
    </section>

    <section class="counterSection" v-if="showCounter">
      <h2>Child component (Counter): </h2>
      <div>
        <Counter text="Button 1" @send-count="updateCount" :counts="updatedCount"/>
        <br> <br>
      </div>
      <!--  
      <div>
        <Counter text="Button 2" />
        <br> <br>
      </div>
      <div>
        <Counter text="Button 3" />
        <br> <br>
      </div>
      -->
    </section>

    <section class="cardSection" v-if="showCard">
      <h2>Quotes (Components and Props)</h2>
      <div class="cardWrapper">
        <!--  
        <QuoteCard 
          v-for="quoteDetail in quoteDetails" 
          :key="quoteDetail.id"
          :imageURL="quoteDetail.imageURL"
          :quote="quoteDetail.quote"
          :author="quoteDetail.author"
        />
        -->
        <!-- The above can be written as -->
        <QuoteCard 
          v-for="quoteDetail in quoteDetails" 
          :key="quoteDetail.id"
          :quoteDetail="quoteDetail"
        />
      </div>
    </section>
  </template>
  
  <script>
  import Counter from '../components/Counter.vue';
  import QuoteCard from '../components/QuoteCard.vue';
  
  export default {
    data() {
      return {
        showToDo: false,
        showCounter: true,
        showCard: true,
        newTask: '',
        updatedCount: 0,
        tasks: [
          { id: 1, name: 'Learning Vue', finished: false, edit: true },
          { id: 2, name: 'Practice Vue', finished: true, edit: true },
          { id: 3, name: 'Implement Vue', finished: false, edit: true },
        ],
        quoteDetails: [
          {id: 1, imageURL: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."', author: '– Winston Churchill'},
          {id: 2, imageURL: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quote: '"Success usually comes to those who are too busy to be looking for it."', author: '– Henry David'},
          {id: 3, imageURL: 'https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quote: '"Our greatest glory is not in never falling, but in rising every time we fall."', author: '– Confucius'},
          {id: 4, imageURL: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quote: '"Do not be embarrassed by your failures, learn from them and start again."', author: '– Richard Branson'},
        ]
      }
    },
  
    components: {
      Counter,
      QuoteCard,
    },
  
    methods: {
      addTask() {
        if (this.newTask.length < 1) return
  
        this.tasks.push({
          id: this.tasks.length + 1,
          name: this.newTask,
          finished: false,
          edit: true,
        });
  
        this.newTask = ''
      },
      removeTask(taskID) {
        this.tasks = this.tasks.filter(task => {
            return task.id !== taskID
        });
      },
      finishTask(task) {
        task.finished = !task.finished
      },
      
      updateCount(count) {
        this.updatedCount = count;
      }
    },
  
    computed: {
      allTasks() {
        return this.tasks.length
      },
      latest() {
        return [...this.tasks]
      }
    }
  }
  </script>
  
  <style lang="scss">
  .container {
    max-width: 100%;
  }
  .strikeout {
    text-decoration: line-through;
  }
  .toggler {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 10px;
  
    button {
      background-color: aquamarine;
      padding: 10px 20px;
      border-radius: 5px;
      color: black;
      border: none;
      font-size: 16px;
      font-weight: 500;
    }
    button:hover {
      background-color: rgb(236, 113, 76);
      color: azure;
      cursor: pointer;
    }
  }
  .todoSection {
    background-color: beige;
    margin: 0;
    padding: 20px;
    h2 {
      margin: 0;
    }
    ul {
      margin: 0;
      padding: 10px 20px 0 20px;
      li {
        margin: 10px 0;
      }
    }
  }
  .counterSection{
    background-color: rgb(188, 241, 224);
    margin: 0;
    padding: 20px;
    h2 {
      margin: 0;
    }
    div {
      margin: 20px;
    }
  }
  .cardSection {
    padding: 20px;
    h2 {
      margin: 0;
    }
    .cardWrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
      h2 {
        margin: 0;
      }
    }
  }
  </style>  