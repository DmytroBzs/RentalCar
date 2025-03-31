import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
    </div>
  );
};

export default Loader;
