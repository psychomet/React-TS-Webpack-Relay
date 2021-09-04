import React from "react";
import { useAsync } from "../../../core/hooks";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { register } from "../sandbox";

export function Register() {
  // eslint-disable-next-line
  const { execute, status, value, error } = useAsync<string>(register, false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    execute(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={"container h-100"}>
      <Row className={"h-100"} align={"middle"} justify={"center"}>
        <Col xs={12} sm={12} md={6} lg={8} xl={10}>
          <Card title="Register Form">
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="firstName"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="lastName"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="email"
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="phone"
                name="phone"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
