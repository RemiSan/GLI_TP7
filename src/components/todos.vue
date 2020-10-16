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
        <br>
        <md-button class="md-raised md-primary" v-on:click="selectAllTasks()">Select all tasks</md-button>
        <br>
        <md-checkbox v-model="displayDoneTasks">Display done task</md-checkbox>
        <br>
        <md-checkbox v-model="displayNotDoneTasks">Display not done task</md-checkbox>
        <br>
        <md-button class="md-raised md-primary" v-on:click="deleteDoneTasks()">Delete done tasks</md-button>
        <TaskVue v-for="task in getListFiltered()" :key="task.id" v-bind:task="task"/> 
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

@Component({
  components: { TaskVue },
})
export default class Todos extends Vue implements ITaskListObserver {
  nameTask = "";
  tasks: Task[] = [];
  idTask = 0;
  displayDoneTasks = true;
  displayNotDoneTasks = true;

  getListFiltered(): Task[] {
    return this.tasks.filter(
      (el) =>
        (el.done && this.displayDoneTasks) ||
        (!el.done && this.displayNotDoneTasks)
    );
  }

  addTask(): void {
    if (this.nameTask.length > 0) {
      this.tasks.push(new Task(this.nameTask, this.idTask++, false, this));
      this.nameTask = "";
    }
  }

  didDelete(task: Task) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  selectAllTasks(): void {
    this.tasks.forEach((el) => {
      el.done = true;
    });
  }

  deleteDoneTasks(): void {
    this.tasks
      .filter((el) => el.done)
      .forEach((element) => {
        this.tasks.splice(
          this.tasks.findIndex((i) => i === element),
          1
        );
      });
  }

  refreshListTasks(): void {
    console.log("use axios to get tasks");
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