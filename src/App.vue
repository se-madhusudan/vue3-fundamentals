<template class="container">
  <Header :links="headerLinks" :logoDetails="logoInfo" />
  <main>
    <section>
      <h1>{{ title }}</h1>
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
    <section>
      <h2>Child component (Counter): </h2>
      <div>
        <Counter text="Button 1" />
        <br> <br>
      </div>
      <div>
        <Counter text="Button 2" />
        <br> <br>
      </div>
      <div>
        <Counter text="Button 3" />
        <br> <br>
      </div>
    </section>
    <section>
      <h2>Quotes (Components and Props)</h2>
      <div class="cardWrapper">
        <QuoteCard 
          v-for="quoteDetail in quoteDetails" 
          :key="quoteDetail.id"
          :imageURL="quoteDetail.imageURL"
          :quote="quoteDetail.quote"
          :author="quoteDetail.author"
        />
      </div>
    </section>
  </main>
</template>

<script>
import Counter from './components/Counter.vue';
import QuoteCard from './components/QuoteCard.vue';
import Header from './components/Header.vue';
import logo from './assets/Img/to-do-list.png';

export default {
  data() {
    return {
      title: 'My To Do App',
      newTask: '',
      logoInfo: {
        logoUrl: logo,
        logoCaption: 'To Do List Logo',
      },
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
      ],
      headerLinks: [
        {url: '#home', text: 'Home'},
        {url: '#about', text: 'About Us'},
        {url: '#contact', text: 'Contact Us'},
        {url: '#quotes', text: 'Quotes'},
      ]
    }
  },

  components: {
    Counter,
    QuoteCard,
    Header
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

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
}
.container {
  max-width: 100%;
}
.strikeout {
  text-decoration: line-through;
}
.cardWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px auto;
}
</style>

