import React, {Component} from 'react';
import "antd/dist/antd.css"
import {Button, Form, Icon, Input,} from 'antd';
import styles from './setting/login.less';
import fetch from 'cross-fetch'
import {require} from "../../utils/commentUtils";
import store from "../../store";
import {loginAcion,getLoginAcion,getLoginSagaAcion} from "../../store/actionCreators";


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

                /* const res = require('/thirdpay/customeradmin/login', {
                     method: "POST",
                     body: {
                         mobile: "string",
                         pwd: "string"
                     }
                 }).then((res) => {
                     console.log("res___", res);
                     let action = loginAcion(res);
                     store.dispatch(action)
                 });*/
               /* //thunk把上面的一段给解决掉
                const action = getLoginAcion(values);
                store.dispatch(action);*/
               const action = getLoginSagaAcion(values);
               store.dispatch(action);
            }
        });
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        console.log("getstore", store.getState());
        return (
            <div>
                <div className={styles.layout}>
                    {/* <Input
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
                    >登录</Button>*/}
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('mobile', {
                                rules: [{required: true, message: 'Please input your mobile!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="mobile"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('pwd', {
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
                            <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                    <h3>{store.getState().data.message}</h3>
                </div>
            </div>
        )
    }
}

const Login1 = Form.create()(Login);

export default Login1;