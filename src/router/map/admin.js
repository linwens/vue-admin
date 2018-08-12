/*引入组件*/
const Home = resolve => require(['@/pages/home'], resolve);
//Admin_index
const Index = resolve => require(['@/pages/index/index'], resolve);

/*router config*/
export const Admin_index = {
    path:'/',
    name:'首页',
    component:Home,
    meta:{
        requireAuth:true,
        roles:[1]
    },
    icon: 'iconfont icon-caidanlan-shouye',
    redirect: '/index',
    children:[
        {
            path:'index',
            name:'管理员主页',
            components:{
                page:Index
            },
            meta:{
                requireAuth:true,
                role:[1]
            },
            hidden:true,
        }
    ]
}