import React, { lazy, ReactNode } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;
const ArticleCategories = lazy(() => import("./articleCategory"));

export function MainLayout({ children }: { children: ReactNode }) {
  const { url } = useRouteMatch();

  // const [collapsed, setCollapsed] = useState<boolean>(false);
  //
  // const toggle = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={"/articles"}>Article</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to={"/article-categories"}>Article Category</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0 }}
        />
        <Content>
          <div
            style={{ minHeight: 360 }}
          >
            {/*<Button type="primary">Primary Button</Button>*/}
            {/*<Button>Default Button</Button>*/}
            {/*<Button type="dashed">Dashed Button</Button>*/}
            {/*<br />*/}
            {/*<Button type="text">Text Button</Button>*/}
            {/*<Button type="link">Link Button</Button>*/}
            <Switch>
              <Route
                path={`/article-categories`}
                component={ArticleCategories}
              />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
