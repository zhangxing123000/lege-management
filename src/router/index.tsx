import React, {lazy} from "react"

import Home from "../views/Home"
import {Navigate} from "react-router-dom"
// import About from "../views/About"
// import User from "../views/User"
// 懒加载
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

// 抽取函数
const withLoading = (router: JSX.Element) => (
    <React.Suspense fallback={<div>loading......</div>}>
        {router}
    </React.Suspense>
)

const routers = [
    // 嵌套路由
    {
        path: "/",
        element: <Navigate to="/page1"/>
    },
    {
        path: "/",
        // 默认展示的主页
        element:  <Home/>,
        // home下的子窗口
        children: [
            {
                path: "/page1",
                element: withLoading(<Page1/>)
            },
            {
                path: "/page2",
                element: withLoading(<Page2/>)
            },
        ]
    }
    // {
    //     path: "/home",
    //     element: <Home/>
    // },
    // {
    //     path: "/about",
    //     element: withLoading(<About/>)
    // },
    // {
    //     path: "/user",
    //     element: withLoading(<User/>)
    // }
]

export default routers
