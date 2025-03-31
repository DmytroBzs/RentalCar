import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, but this page does not exist!"
      extra={
        <Link to="/">
          <Button type="primary">Go to the home page</Button>
        </Link>
      }
    />
  );
};
export default NotFoundPage;
