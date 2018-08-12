/*引入组件*/
const Home = resolve => require(['@/pages/home'], resolve);
	//Guests
const G_index = resolve => require(['@/pages/guests/index'], resolve);
const BaseTable = resolve => require(['@/pages/guests/base-table'], resolve);
const VMarkdown = resolve => require(['@/pages/guests/v-markdown'], resolve);
const VUpload = resolve => require(['@/pages/guests/v-upload'], resolve);
	//VChart
const C_index = resolve => require(['@/pages/vChart/index'], resolve);
	//权限消息展示
const AuthTips = resolve => require(['@/pages/guests/authShow'], resolve);
/*router config*/
export const Guests_index = {
    path:'/',
    name:'首页',
    component:Home,
    meta:{
        requireAuth:true,
        roles:[2]
    },
    icon: 'iconfont icon-caidanlan-shouye',
    redirect: '/index',
    children:[
        {
            path:'index',
            name:'游客主页',
            components:{
                page:G_index
            },
            meta:{
                requireAuth:true,
                role:[2]
            },
            hidden:true,
        }
    ]
}
export const Guests = {
	path:'/guests',
	name:'guests',
	component:Home,
	redirect:'/index',
	icon: 'iconfont icon-iconguest',//自定义属性
	meta: {
        requireAuth: true,
        roles:[2]
    },
	children:[
	    {
	    	path: 'base-table',
	    	name: '基础表格',
	    	components: {
	    		page:BaseTable
	    	},
	    	meta: {
	    		requireAuth: true,
                roles:[2]
            }
	    },
	    {
	    	path: 'v-markdown/:id',
	    	name: '文本编辑器',
	    	components: {
	    		page:VMarkdown
	    	},
	    	meta: {
	    		requireAuth: true,
                roles:[2]
            }
	    },
	    {
	    	path: 'v-upload',
	    	name: '文件上传',
	    	components: {
	    		page:VUpload
	    	},
	    	meta: {
	    		requireAuth: true,
                roles:[2]
            }
	    }
	]
}

export const VChart = {
	path:'/vChart',
	name:'vChart',
	component:Home,
	redirect:'/vChart/index',
	icon: 'iconfont icon-areachart',//自定义属性
	meta: {
        requireAuth: true,
        roles:[2]
    },
	children:[
		{
	    	path: 'index',
	    	name: 'vue-chart图表',
	    	components: {
	    		page:C_index
	    	},
	    	meta: {
	    		requireAuth: true,
                roles:[2]
            }
	    }
	]
}

export const G_unfind = {//游客页显示404路由
    path: '/unfind',
    name: '404页面',
    icon: 'iconfont icon-msnui-forbid',
    meta:{
        requireAuth: true,
        roles:[2]
    },
    redirect: '/404'
}

export const Auth_tips = {//权限效果
	path:'/auth',
	component:Home,
	meta: {
        requireAuth: true,
        roles:[1,2]
    },
	icon: 'iconfont icon-iconguest',//自定义属性
	children:[
	    {
	        path:'/',
			name:'权限消息',
	        components:{
	            page:AuthTips
	        },
	        meta:{
	            requireAuth:true,
	            roles:[1,2]
	        },
	        hidden:true,
	    }
	]
}