<template lang="html">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <md-card-content>
            {{task.name}}
          </md-card-content>
        </md-card-header-text>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-icon-button md-accent" v-on:click="deleteTask()">
          <md-icon>delete_forever</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "../models/task";
import { ITaskListObserver } from "../models/itasklistobserver";

@Component({
  components: {},
})
export default class TaskVue extends Vue {
  @Prop({ required: true }) task!: Task;

  deleteTask(): void{
    this.task.observer.didDelete(this.task);
  }
}
</script>

<style lang="css" scoped>
.md-card {
  width: 400px;
  margin: 4px;
  margin-left: auto;
  margin-right: auto;
}
.md-button {
  margin: 4px;
}
</style>
