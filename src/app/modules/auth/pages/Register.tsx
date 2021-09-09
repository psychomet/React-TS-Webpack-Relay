import React from "react";
import { useAppDispatch } from "core/hooks";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { commitMutation, graphql } from "react-relay/hooks";
import Relay from "core/relay";
import { RegisterQuery } from "./__generated__/RegisterQuery.graphql";
import { setToken } from "store/authSlice";
import { useHistory } from "react-router-dom";

export function Register() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
    commitMutation<RegisterQuery>(Relay.environment, {
      mutation: graphql`
        mutation RegisterQuery($input: RegisterInput!) {
          register(input: $input) {
            accessToken
          }
        }
      `,
      variables: { input: values },
      onCompleted(res) {
        dispatch(setToken(res.register.accessToken));
        history.push("/");
      },
    });
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
                label="name"
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="lastname"
                name="lastname"
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
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
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
