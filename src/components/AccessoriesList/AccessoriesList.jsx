import { List, Typography } from 'antd';
import css from './AccessoriesList.module.css';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const AccessoriesList = ({ accessories, functionalities }) => {
  const data = [...accessories, ...functionalities];
  return (
    <div className={css.container}>
      <Title level={4}> Accessories and functionalities:</Title>
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item className={css.listItem}>
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            {item}
          </List.Item>
        )}
        locale={{ emptyText: 'No accessories information' }}
      />
    </div>
  );
};

export default AccessoriesList;
