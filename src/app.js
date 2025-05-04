// 动态导入示例
import React from 'react';
import ReactDOM from 'react-dom';

// 基础组件立即加载
const App = () => {
  const [ShowDetails, setShowDetails] = React.useState(null);
  
  const loadDetails = async () => {
    // 动态导入详情组件
    const module = await import(
      /* webpackChunkName: "details" */
      /* webpackPrefetch: true */
      './components/Details'
    );
    setShowDetails(() => module.default);
  };
  
  return (
    <div>
      <h1>Webpack 动态导入示例</h1>
      <button onClick={loadDetails}>加载详情</button>
      {ShowDetails && <ShowDetails />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));