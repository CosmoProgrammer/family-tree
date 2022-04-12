import React from 'react';
import './login.css';
import { Form, Input, Button } from "antd";
import Icon from '@ant-design/icons';

import loginImg from './login.png'
const FormItem = Form.Item;

function LoginPage(props){
    return (
        <div align="center">
        <div className={"lContainer"}>
        <div className="lItem">
            <div className="loginImage">
              <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/>
            </div>
            <div className="loginForm">
              <h2>Login</h2>
                <Form className="login-form" onFinish={props.onSubmit}>
                <FormItem>
                    <Input
                      prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                      placeholder="Username"
                      value={props.identity.username || ''}
                      onChange={props.onChange}
                      name='username'
                    />
                </FormItem>
                <FormItem>
                    <Input
                      prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                      type="password"
                      placeholder="Password"
                      value={props.identity.password || ''}
                      onChange={props.onChange}
                      name='password'
                    />
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </FormItem>
              </Form>
            </div>
        </div>
        <div className="footer">
        <a href="/" rel="noopener noreferrer" className="footerLink">Powered by Anirudh M</a>
        </div>
        </div>
        </div>
    );
};

export default LoginPage;