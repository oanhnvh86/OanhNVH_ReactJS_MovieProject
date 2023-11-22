/**
 * * https://ant.design/components/tabs: Tab Content
 */

import React, {useState} from 'react'
import { Radio, Space, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';


// const changeTabPosition = (e: RadioChangeEvent) => {
//   setTabPosition(e.target.value);
// };


function HomeTabs(props) {
  console.log("HomeTab",props);

  type TabPosition = 'left' | 'right' | 'top' | 'bottom';
  const [tabPosition, setTabPosition] = useState<TabPosition>('left');

  const {heThongRapChieu} = props;
  const logo = heThongRapChieu.logo
  console.log("heThongRapChieu:", logo)

  // const renderHeThongRap = () =>{
  //   return heThongRapChieu.map((heThongRap, index) => {

  //   })
  // }

  return (
    <>
    {/* <Space style={{ marginBottom: 24 }}>
      Tab position:
      <Radio.Group value={tabPosition} onChange={changeTabPosition}>
        <Radio.Button value="top">top</Radio.Button>
        <Radio.Button value="bottom">bottom</Radio.Button>
        <Radio.Button value="left">left</Radio.Button>
        <Radio.Button value="right">right</Radio.Button>
      </Radio.Group>
    </Space> */}

    {/* <Tabs
      tabPosition={tabPosition}
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: `Content of Tab ${id}`,
        };
      })}
    /> */}

<Tabs
      tabPosition={tabPosition}
      items={new Array(6).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `<img src = ${heThongRapChieu.logo} width="50" />`,
          key: id,
          children: `${heThongRapChieu.maHeThongRap}`,
        };
      })}
    />

{/* 
    <Tabs tabPosition ={tabPosition}>
      <TabPane tab={<img scr="https://picsum.photos/200" className='rounded' />} key="1">
          Content of Tab 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
          Content of Tab 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
          Content of Tab 3
      </TabPane>
    </Tabs> */}
  </>
  )
}

export default HomeTabs
