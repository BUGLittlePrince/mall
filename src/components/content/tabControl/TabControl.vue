<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active: index === currentIndex}"
       @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 15px;
    line-height: 40px;
    height: 40px;
    background-color: #fff
  }
  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }
  .active span {
    padding: 5px;
    border-bottom: 2px solid var(--color-high-text);
  }

</style>
