import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
// 两种路由模式的组件: BrowserRouter ( History模式 )， HashRouter( Hash模式 )
// const baseRouter = O => f
// return ()
// 以上写法可以简写为:
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter
