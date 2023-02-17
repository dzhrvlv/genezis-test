<template>
  <div class="list__container">
    <ul class="list" v-if="createdEntities.length">
      <li class="list__item" v-for="entity in createdEntities">
         Name: <strong>{{entity.name}}</strong>, ID: <strong>{{entity.id}}</strong>
      </li>
    </ul>
    <div v-else>
      Сущностей нет
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useEntityStore} from "../stores/EntityStore";

export default defineComponent({
  setup() {
    const entityStore = useEntityStore()

    const {createdEntities} = entityStore

    return {entityStore, createdEntities}
  }
})
</script>

<style scoped>
.list__container {
  margin: 10px 0;
}
.list {
  list-style-type: none;
}
.list__item {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>