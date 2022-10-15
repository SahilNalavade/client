import React from 'react'
import { Button, Form, Input } from 'antd';

function Register() {
  return (
    <div className="auth-parent">
       <h1 className="brand">Resume</h1>
      
      <Form layout="vertical" >
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  )

}

export default Register