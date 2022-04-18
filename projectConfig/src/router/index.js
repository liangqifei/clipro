import {createRouter,createWebHashHistory} from 'vue-router'
const FMenu = ()=>import('../pages/editor')
const routes = [
    { 
        path: '/editor/pages',
        name:'编辑页面',
        component:FMenu
    },
]
const FRouter= createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
const setupRouter=(app)=> {
    app.use(FRouter);
}
export default setupRouter