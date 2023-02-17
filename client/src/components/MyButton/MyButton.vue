<template>
  <div>
    <button class="btn" :disabled="isDisabled" @click="createEntity">
      <div class="btn__title" v-if="!loader">Создать</div>
      <MyLoader :is-loader="loader" />
    </button>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import MyLoader from "./MyLoader.vue";
import {useEntityStore} from "../../stores/EntityStore";
import {storeToRefs} from "pinia";

export default defineComponent({
  components: {
    MyLoader
  },
  setup() {
    const entityStore = useEntityStore()

    const isDisabled = computed(() => entityStore.activeEntity.name === "Не выбрано")
    const {loader} = storeToRefs(entityStore)

    const createEntity = () => entityStore.createEntity()

    return {entityStore, isDisabled, loader, createEntity}
  }
})
</script>

<style scoped>

  .btn {
    height: 40px;
    padding: 0 20px;
    background: blue;
    color: white;
    border: 1px solid darkblue;
    border-radius: 3px;
  }

  .btn:disabled {
    background: white;
    color: black;
    border: 1px solid lightgrey;
  }

  .btn__title {
    font-size: 15px;
  }

</style>