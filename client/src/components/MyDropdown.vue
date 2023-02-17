<template>
    <select class="dropdown" @change="onSelect" v-model="activeEntity.name">
      <option v-for="entity in entities" :key="entity">{{ entity }}</option>
    </select>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useEntityStore} from "../stores/EntityStore";
import {storeToRefs} from "pinia";


export default defineComponent({

  setup() {
    const entityStore = useEntityStore()

    const {entities, activeEntity} = storeToRefs(entityStore)
    const onSelect = (event: any) => {
      console.log(event.target.value)
      entityStore.setActiveEntity(event.target.value)
    }

    return {
      entityStore,
      entities,
      activeEntity,
      onSelect
    }

  }
})
</script>

<style scoped>
.dropdown {
  height: 30px;
  border: 1px solid black;
  outline: none;
  border-radius: 3px;
}
</style>