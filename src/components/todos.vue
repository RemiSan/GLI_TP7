<template lang="html">
  <section class="todos">
    <div class="todo">
      <h1>Todos</h1>
      <md-button class="md-fab md-mini md-plain" v-on:click="refreshListTasks()">
          <md-icon>cached</md-icon>
        </md-button>
        <md-field :class="{'md-invalid': nameTask.length == 0}">
        <md-textarea v-model="nameTask"></md-textarea>
        <span class="md-error">Enter your task here</span>
        </md-field>
        <br>
        <md-button class="md-raised md-primary" v-on:click="addTask()">Add</md-button>
        <div v-if="!loading">
          <TaskVue v-for="task in this.tasks" :key="task.id" v-bind:task="task"/> 
        </div>
        <h1 v-if="loading">Loading</h1>
    </div>
    <footer v-if="tasks.length > 0">
      <span> Number of tasks : {{ tasks.length }}</span>
    </footer>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskVue from "./task.vue";
import { Task } from "../models/task";
import { ITaskListObserver } from "../models/itasklistobserver";
import { TodoApi } from "../services/todoApi";

@Component({
  components: { TaskVue },
})
export default class Todos extends Vue implements ITaskListObserver {
  nameTask = "";
  tasks: Task[] = [];
  loading = false;
  
  async mounted(): Promise<void> {
    this.refreshListTasks();
  }

  async addTask(): Promise<void>  {
    if (this.nameTask.length > 0) {
      await TodoApi.createNewTodo(this.nameTask).then(() => this.refreshListTasks());
      this.nameTask = "";
    }
  }

  async didDelete(task: Task) {
    this.loading = true;
    await TodoApi.deleteTodo(task).then(() => this.refreshListTasks());
  }

  async refreshListTasks(): Promise<void> {
    this.loading = true;
    const tasks = await TodoApi.getAllTodos(this);
    this.tasks = tasks;
    this.loading = false;
  }
}
</script>
<style lang="css" scoped>
.md-field {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>