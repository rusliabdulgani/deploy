import React from 'react';
import { Progress } from 'antd';

const ProgressComp: React.FC = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
);

export default ProgressComp;