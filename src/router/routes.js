import Tabbar from '@/components/Tabbar'
// 代码切割 路由懒加载
const Home = () => import('@/pages/Home')
const Mall = () => import('@/pages/Mall')
const Category = () => import('@/pages/Category')
const Details = () => import('@/pages/Details')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    title: '首页', // 用于显示tabbar上的文字
    icon: '&#xe663;', // icon
    isTabbar: true,
    components: {
      default: Home,
      tabbar: Tabbar
    }
  }, {
    path: '/mall',
    name: 'mall',
    title: '商城',
    isTabbar: true,
    icon: '&#xe67b;',
    components: {
      default: Mall,
      tabbar: Tabbar
    },
    children: [{
      path: 'category',
      name: 'category',
      component: Category
    }]
  }, {
    path: '/details/:id',
    name: 'details',
    components: {
      default: Details
    },
    props: true
  }, {
    path: '/cart',
    name: 'cart',
    title: '购物车',
    icon: '&#xe656;',
    isTabbar: true,
    components: {
      default: Cart,
      tabbar: Tabbar
    }
  }, {
    path: '/mine',
    name: 'mine',
    title: '我的',
    icon: '&#xe64e;',
    isTabbar: true,
    components: {
      default: Mine,
      tabbar: Tabbar
    }
  }, {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    }
  }, {
    path: '/register',
    name: 'register',
    components: {
      default: Register
    }
  }
]

export default routes
