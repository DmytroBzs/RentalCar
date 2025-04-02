import { List, Typography } from 'antd';
import css from './RentalConditions.module.css';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const RentalConditions = ({ conditions }) => {
  return (
    <div className={css.container}>
      <Title level={4} className={css.title}>
        Rental Conditions
      </Title>
      <List
        dataSource={conditions}
        renderItem={item => (
          <List.Item>
            <Text className={css.conditionItem}>
              <CheckCircleOutlined style={{ marginRight: 8 }} />
              {item}
            </Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RentalConditions;
