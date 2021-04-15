import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入模块
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const Profile = () => import('views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)


//获取原型对象上的push函数
// const originalPush = VueRouter.prototype.push
// //修改原型对象中的push方法
// VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

// 2.创建router

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/shopcart',
		component: Shopcart
	},
	{
		path: '/profile',
		component: Profile
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

// 导出
export default router