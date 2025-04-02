import { Form, Input, DatePicker, Button, Typography } from 'antd';
import css from './UserCredentialsForm.module.css';

const { TextArea } = Input;
const { Title, Text } = Typography;

const UserCredentialsForm = () => {
  const onFinish = values => {
    console.log('Booking submitted:', values);
  };

  return (
    <div className={css.card}>
      <Title level={4} className={css.title}>
        Book your car now
      </Title>
      <Text className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </Text>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input
            placeholder="Name*"
            style={{ backgroundColor: '#F7F7F7', height: 48, border: 'none' }}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input
            placeholder="Email*"
            style={{ backgroundColor: '#F7F7F7', height: 48, border: 'none' }}
          />
        </Form.Item>

        <Form.Item
          name="date"
          rules={[{ required: true, message: 'Please select date!' }]}
        >
          <DatePicker
            placeholder="Booking date"
            suffixIcon={null}
            icon="none"
            style={{
              width: '100%',
              backgroundColor: '#F7F7F7',
              height: 48,
              border: 'none',
            }}
          />
        </Form.Item>

        <Form.Item name="comment">
          <TextArea
            rows={4}
            placeholder="Comment"
            className={css.textarea}
            style={{ backgroundColor: '#F7F7F7', height: 90, border: 'none' }}
          />
        </Form.Item>

        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: 156, height: 44, fontSize: 18 }}
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserCredentialsForm;
