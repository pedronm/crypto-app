import React from 'react';
import {CaretRightOutlined} from '@ant-design/icons';
import {Collapse} from 'antd';

const Exchanges = () => {

  const { Panel } = Collapse;
  const text = 'Painel'

  // https://ant.design/components/collapse/
  return (
    <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse"
    > 
    <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
      <p>{text}</p>
  </Panel>
    </Collapse>
  )
}

export default Exchanges