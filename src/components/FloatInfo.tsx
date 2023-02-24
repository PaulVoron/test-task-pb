import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const FloatInfo = () => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate('/about');
  };

	return (
    <FloatButton 
      icon={<QuestionCircleOutlined />} 
      type="default" 
      style={{ bottom: 100 }} 
      onClick={() => handleInfoClick()}
    />
	);
};