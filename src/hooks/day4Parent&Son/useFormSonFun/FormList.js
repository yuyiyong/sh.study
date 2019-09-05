import React, {forwardRef, useImperativeHandle} from 'react';
import {Form, Icon, Input, Button} from "antd";

/*
const FormList = (props, ref) => {
    const submits = (e) => {
        console.log("Formlist",props);
       /!* e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });*!/
    };

    useImperativeHandle(ref, () => ({submits}));
  /!*  const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');*!/
    return (
        <Form layout="inline" onSubmit={submits}>
            {/!*<Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                })(
                    <Input
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>*!/}
            <Button onClick={submits}> 子组件提交</Button>
        </Form>
    )
};
 const RefFormList = forwardRef( FormList);
export default Form.create()(RefFormList);
/!*const FormFormList = Form.create()(FormList);
export default forwardRef(FormFormList)*!/
*/

 Form.create()((formProps)=>{

})
export  default  forwardRef((props, ref) => {
    const FForm = Form.create()((FormProps)=>{
        const submits = (e) => {
            console.log("Formlist",props);
            console.log("FormProps",FormProps);
            //console.log("formProps",formProps);
            /* e.preventDefault();
             props.form.validateFields((err, values) => {
                 if (!err) {
                     console.log('Received values of form: ', values);
                 }
             });*/
        };

        useImperativeHandle(ref, () => ({submits}));
        /*  const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = props.form;
          const usernameError = isFieldTouched('username') && getFieldError('username');
          const passwordError = isFieldTouched('password') && getFieldError('password');*/
        return (
            <Form layout="inline" onSubmit={submits}>
                {/*<Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                })(
                    <Input
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>*/}
                <Button onClick={submits}> 子组件提交</Button>
            </Form>
        )

    })
    return <FForm />
    })
