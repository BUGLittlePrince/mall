<template>
	<tab-bar>
		<!-- ~assets使用别名 -->
      <tab-bar-item path="/home" activeColor="#FF8C00">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-selected" src="~assets/img/tabbar/home_selected.png" alt="">
				<div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#FF8C00">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-selected" src="~assets/img/tabbar/category_selected.png" alt="">
				<div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#FF8C00">
        <img slot="item-icon" src="~assets/img/tabbar/shopping_cart.png" alt="">
        <img slot="item-icon-selected" src="~assets/img/tabbar/shopping_cart_selected.png" alt="">
				<div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#FF8C00">
        <img slot="item-icon" src="~assets/img/tabbar/my.png" alt="">
        <img slot="item-icon-selected" src="~assets/img/tabbar/my_selected.png" alt="">
				<div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

	import TabBar from 'components/common/tabbar/TabBar'
	import TabBarItem from 'components/common/tabbar/TabBarItem'

	export default {
		name: "MainTabBar",
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style scoped>

</style>