import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SiderComponent from "./SiderComponent";
import HeaderComponent from "./HeaderComponent";
import ContentComponent from "./ContentComponent";

function MapWrapper(props) {
  return (
    <>
      <Layout style={{ padding: "0", margin: "0", height: "100vh" }}>
        <HeaderComponent />
        <Layout hasSider>
          <SiderComponent />
          <ContentComponent />
        </Layout>
      </Layout>
    </>
  );
}

export default MapWrapper;
