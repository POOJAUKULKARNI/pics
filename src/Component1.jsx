import React,{useState} from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const Component1=(props)=> {
  
  return(
  <table>
     {
     props.map((data)=>{
      return(
        <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https:/joesch.moe/api/v1/random" />}
          title={data.username}
          description="This is the description"
        />
      </Card>

      )

     })}
    
    </table>
  )
} 

export default Component1