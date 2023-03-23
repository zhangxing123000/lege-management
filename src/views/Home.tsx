import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu} from 'antd';
import React, {useState} from 'react';
import {Outlet,useNavigate} from "react-router-dom"


const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined/>),
    getItem('Option 2', '/page2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const clickMenu = (e: { key: string }) => {
        console.log("点击了菜单", e.key)
        // 点击跳转到对应的路由，编程式导航跳转，利用hook
        navigate(e.key)
    }
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={clickMenu}/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <Breadcrumb style={{margin: '16px 16px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{margin: '16px 16px',}} className="site-layout-background">
                    {/*窗口内容*/}
                    <Outlet />
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;

