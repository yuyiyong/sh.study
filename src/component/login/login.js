import React, {Component} from 'react';
import "antd/dist/antd.css"
import {Form, Icon, Input, Button,} from 'antd';
import styles from './setting/login.less'

/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/

class Login extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
       // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className={styles.layout}>
                     <Input
                        className={styles.name}
                        size='large'
                        placeholder='用户名'
                    />
                    <Input
                        className={styles.pwd}
                        size='large'
                        placeholder='密码'
                        type='password'
                    />
                    <Button
                        type='primary'
                        size='large'
                        className={styles.loginBtn}
                    >登录</Button>
                   {/* <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>*/}
                </div>
            </div>
        )
    }
}

export default Login;