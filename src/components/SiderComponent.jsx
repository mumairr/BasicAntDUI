import Sider from "antd/es/layout/Sider";
import React from "react";

const SiderComponent = () => {
  return (
    <Sider
      trigger={null}
      collapsedWidth="0"
      width={250}
      collapsible
      // onCollapse={(value) => setCollapsed(value)}
    >
      Sider
    </Sider>
  );
};

export default SiderComponent;
