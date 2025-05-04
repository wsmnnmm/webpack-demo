import React from 'react';
import moment from 'moment';

const Details = () => {
  return (
    <div>
      <h2>详情组件</h2>
      <p>当前时间: {moment().format('YYYY-MM-DD HH:mm:ss')}</p>
    </div>
  );
};

export default Details;