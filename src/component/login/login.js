import React, {Component} from 'react';
import "antd/dist/antd.css"
import {Button, Form, Icon, Input,} from 'antd';
import styles from './setting/login.less';
import store from "../../store";
import {getLoginSagaAcion} from "../../store/actionCreators";
import {connect} from 'react-redux';
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
                    <h3>{this.props.data.message}</h3>
                </div>
            </div>
        )
    }
}

const Login1 = Form.create()(Login);
const stateToProps = (state) => {
    return{
        data:state.data
    }
}
export default connect(stateToProps,null)(Login1)