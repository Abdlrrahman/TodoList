<template>
  <Panel title="Projects">
    <div class="project mt-2" v-for="project in projects" :key="project.id"></div>
  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  mounted() {
    this.fetchProjects();
  },
  components: {},
  computed: {
    ...mapState("projects", ["newProjectName", "projects"])
  },
  methods: {
    projectClicked(project) {
      this.setCurrentProject(project);
      this.fetchTasksForProject(project);
    },
    ...mapMutations("projects", [
      "setNewProjectName",
      "setEditMode",
      "setProjectTitle",
      "setCurrentProject"
    ]),
    ...mapActions("projects", [
      "createProject",
      "fetchProjects",
      "saveProject",
      "deleteProject"
    ])
  }
};
</script>

<style>
.project {
  font-size: 24px;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  color: #333;
}
</style>
