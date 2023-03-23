import {useState} from 'react'
// import {Button} from "antd";
// import { DownCircleTwoTone } from "@ant-design/icons";
// import {Link, Outlet} from "react-router-dom"
import {Link, useRoutes} from "react-router-dom"
import router from "./router"

function App() {
    const [count, setCount] = useState(0)
    const outlet = useRoutes(router)
    return (
        <div className="App">
            {/*顶级组件*/}
            {/*<Button type="primary">我的按钮</Button>*/}
            {/*<DownCircleTwoTone twoToneColor="red" style={{fontSize:'50px'}}/>*/}
            {/*<Link to="/home">home</Link> |*/}
            {/*<Link to="/about">about</Link> |*/}
            {/*<Link to="/user">user</Link> |*/}
            {/*<Outlet></Outlet>*/}
            {outlet}
        </div>
    )
};

export default App
