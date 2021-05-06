<template>
	<div class="wrapper" ref="parent">
    <ul class="content">
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
      <li>曹晶晶</li>
    </ul>
	</div>
</template>

<script>

  import BScroll from 'better-scroll'

	export default {
		name: "Category",
    data() {
		  return {
		    scroll: null
      }
    },
    created() {

    },
    mounted() {
      /**
       * 默认情况下BScroll是不可以实时的监听滚动位置
       * probe 侦测
       * 0，1都是不侦测实时的位置
       * 2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程不侦测
       * 3：只要是滚动，都侦测
       */
      this.scroll = new BScroll(this.$refs.parent, {
        probeType: 3,
        pullUpLoad: true
      })
      // new BScroll(this.$refs.parent, {
      //
      // })
      this.scroll.on('scroll', (position) => {
        // console.log(position);
      })
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
        setTimeout(() => {
          this.scroll.finishPullUp()
        }, 2000)
      })
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped>
  /*原生滚动设置*/
  .wrapper {
    height: 100vh;
    background-color: #ff8198;
    overflow: hidden;
  }
</style>
