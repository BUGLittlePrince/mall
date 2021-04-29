<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"/>
		<recommend-view :recommends="recommends"/>
		<feature-view/>
		<tab-control :titles="['流行', '新款', '精选']" class="tab-control"/>
		<goods-list/>
	</div>
</template>

<script>
	// 组件导入
	import HomeSwiper from './childComps/HomeSwiper'
	import RecommendView from './childComps/RecommendView'
	import FeatureView from './childComps/FeatureView'

	// 引入公共组件
	import NavBar from 'components/common/navbar/NavBar'
	import TabControl from 'components/content/tabControl/TabControl'
	import GoodsList from 'components/content/goods/GoodsList'

	// 网络请求
	import { getHomeMultidata, getHomeGoods} from 'network/home'

	export default {
		name: "Home",
		components: {
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl,
			GoodsList
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					// 流行
					'pop': {page: 0, list: []},
					// 新款
					'new': {page: 0, list: []},
					// 精选
					'sell': {page: 0, list: []},
				}
			}
		},
		created() {
			// 请求多个数据
			this.getHomeMultidata()

			// 请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods: {
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
				})
			}
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}

	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.tab-control {
		/* 顶部停留效果 */
		position: sticky;
		top: 44px;
	}
</style>