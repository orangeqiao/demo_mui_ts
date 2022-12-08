import { lazy } from 'react'
// 基于路由进行代码分割     
// 经测试可进行路由懒加载
// https://zh-hans.reactjs.org/docs/code-splitting.html#route-based-code-splitting
const router = [
	{
		path: "/user",
		component: lazy(() => import('../views/user/Index')),
		exact: false,
		children: [
				{
						path: "/user",
						component: lazy(() => import('../views/user/home/Index')),
						exact: true,

				}, {
						path: "/user/info",
						component: lazy(() => import('../views/user/info/Index')),
						exact: true,},
					
			
		]
}, 
{
	path: "/login",
	component: lazy(() => import('../views/login/index')),
	exact: true,

}, 
{
	path: "/layout",
	component: lazy(() => import('../views/layout/index')),
	exact: true,

}, 
]
export default router