import { CAPTCHA } from '@/api/config';
import * as API from '@/api/user';
import { makeCrypto } from '@/utils';
import { LoginOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const initialValues = {
  account: 'admin',
  password: 'admin',
  captcha: ''
};

const rules = {
  account: [
    { required: true, message: 'The account is empty!' },
    {
      min: 5,
      max: 5,
      message: 'The account length is 5',
      validateTrigger: 'blur'
    }
  ],
  password: [
    { required: true, message: 'The password is empty!' },
    {
      min: 5,
      max: 20,
      message: 'The password length is 5-20',
      validateTrigger: 'blur'
    }
  ],
  captcha: [
    { required: true, message: 'The captcha is empty!' },
    {
      min: 4,
      max: 4,
      message: 'The captcha length is 4',
      validateTrigger: 'blur'
    }
  ]
};

const Login = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);

  const onFinish = async (values) => {
    setLoading(true);
    values.password = makeCrypto(values.password);
    const [err, res] = await API.login(values)

    setLoading(false);

    const { current } = formRef
    const resetFields = [
      { name: 'password', value: '' },
      { name: 'captcha', value: '' },
    ]

    if (err) {
      message.error(err.msg)
      return;
    }

    const [err0, ret0] = res[0]

    if (err0) {
      message.error(err0.msg)
      return
    }

    const { code, msg } = ret0;

    if (code !== 0) {
      current.setFields(resetFields)
      message.error(msg)
      code === -1 && push('/login');
      return
    }

    message.success(msg)
    push('/crawler')
  };

  const genImgSrc = () => `${ CAPTCHA }?${ Math.random() }`;

  const refreshImg = () =>
    (imgRef.current.src = genImgSrc());

  const formRef = useRef(null)

  return (
    <Form
      { ...layout }
      ref={ formRef }
      initialValues={ initialValues }
      name="basic"
      onFinish={ onFinish }
      colon={ false }
      className="login-form">
      <Form.Item
        label="Account"
        name="account"
        hasFeedback
        className="login-input-item"
        rules={ rules.account }>
        <Input
          maxLength="5"
          placeholder="Please input your account"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={ rules.password }>
        <Input.Password
          initialValues="admin"
          maxLength="20"
          placeholder="Please input your password"
        />
      </Form.Item>

      <Form.Item className="captcha-wrap" label="Captcha">
        <Form.Item
          rules={ rules.captcha }
          name="captcha">
          <Input
            initialValues="captcha"
            maxLength="4"
            placeholder="Input captcha"
          />
        </Form.Item>

        <Form.Item className="captcha-cell">
          <img
            ref={ imgRef }
            onClick={ () => refreshImg() }
            src={ genImgSrc() }
            alt="验证码"
          />
        </Form.Item>
      </Form.Item>

      <Form.Item { ...tailLayout }>
        <Button
          icon={ <LoginOutlined /> }
          loading={ loading }
          htmlType="submit"
          ghost>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
