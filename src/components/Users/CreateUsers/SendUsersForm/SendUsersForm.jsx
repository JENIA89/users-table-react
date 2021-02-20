import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { addAsyncUsers } from '../../../../redux/thunk/userThunk';
const { Option } = Select;

const SendUsersForm = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onReset = () => {
    form.resetFields();
    props.showModal();
  };
  const sendSubmitHandler = (e) => {
    dispatch(addAsyncUsers(e));
    props.showModal();
    onReset();
  };

  return (
    <>
      <Form
        onFinish={(e) => sendSubmitHandler(e)}
        form={form}
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
      >
        <Form.Item
          label='Фамилия Имя'
          name='name'
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите имя сотрудника!',
            },
          ]}
        >
          <Input placeholder='Введите фамилию и имя сотрудника' />
        </Form.Item>
        <Form.Item
          label='Отдел'
          name='group'
          rules={[
            {
              required: true,
              message: 'Пожалуйста выберите отдел!',
            },
          ]}
        >
          <Select placeholder='Выберите отдел'>
            <Option value='Склад'>Склад</Option>
            <Option value='Отдел кадров'>Отдел кадров</Option>
            <Option value='Отдел продаж'>Отдел продаж</Option>
            <Option value='Руководство'>Руководство</Option>
          </Select>
        </Form.Item>

        <Button
          type='primary'
          htmlType='submit'
          style={{ marginRight: '270px' }}
        >
          Создать
        </Button>
        <Button type='default' onClick={onReset}>
          Отмена
        </Button>
      </Form>
    </>
  );
};

export default SendUsersForm;
