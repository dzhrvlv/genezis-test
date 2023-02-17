<template>
  <div class="app__container">
    <div class="options">
      <MyDropdown />
      <MyButton />
    </div>
    <MyList />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import MyDropdown from "./components/MyDropdown.vue";
  import MyButton from "./components/MyButton/MyButton.vue";
  import MyList from "./components/MyList.vue";

  export default defineComponent({
    name: "App",
    components: {MyDropdown, MyButton, MyList},

  })
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
.app__container {
  padding: 10px;
}
.options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px
}
</style>
