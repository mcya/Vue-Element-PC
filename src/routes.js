import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
    meta: {
			isIgnoreAuth: true //不需要授权的页面
		},
  }, {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  //{ path: '/main', component: Main },
  {
   path: '/',
   component: Home,
   name: '',
   iconCls: 'fa fa-address-card',
   leaf: true, //只有一个节点
   children: [
     {
       path: '/page6',
       component: Page6,
       name: 'POS设备管理'
     }
   ]
  }, {
    path: '/',
    component: Home,
    name: '入账银行管理',
    iconCls: 'el-icon-message', //图标样式class
    children: [
      {
        path: '/main',
        component: Main,
        name: '主页',
        hidden: true
      }, {
        path: '/table',
        component: Table,
        name: '配置入账银行'
      }, {
        path: '/form',
        component: Form,
        name: '指定入账银行'
      }
    ]
  }, {
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  }
];

export default routes;
