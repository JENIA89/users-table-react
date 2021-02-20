import { useState } from 'react';
import { Button, Modal } from 'antd';
import SendUsersForm from './SendUsersForm/SendUsersForm';

const CreateUsers = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button onClick={showModal} style={{ margin: '10px 0 10px 50px' }}>
        Добавить сотрудника
      </Button>
      <Modal
        title='Добавить сотрудника'
        visible={visible}
        onCancel={showModal}
        footer={null}
      >
        <SendUsersForm showModal={showModal} />
      </Modal>
    </>
  );
};
export default CreateUsers;
