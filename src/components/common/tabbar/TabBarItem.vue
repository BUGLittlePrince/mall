<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-selected"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
		<!-- <img src="../../assets/img/tabbar/category.png" alt="">
		<div>分类</div> -->
	</div>
</template>

<script>
	export default {
		name: "tabBarItem",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: 'cyan'
			}
		},
		data() {
			return {
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor, fontSize: '12px'} : {color: '#bfbfbf', fontSize: '12px'}
			}
		},
		methods: {
			itemClick() {
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
</style>