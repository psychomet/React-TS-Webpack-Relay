import React from "react";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { login } from "../sandbox";
import { setToken } from "store/authSlice";
import { useAppDispatch } from "core/hooks";
import { commitMutation, graphql } from "react-relay/hooks";
import Relay from "core/relay";
import { useHistory } from "react-router-dom";
import { LoginQuery } from "./__generated__/LoginQuery.graphql";

export function Login() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    commitMutation<LoginQuery>(Relay.environment, {
      mutation: graphql`
        mutation LoginQuery($input: LoginInput!) {
          login(input: $input) {
            accessToken
          }
        }
      `,
      variables: { input: values },
      onCompleted(res) {
        console.log("res", res);
        dispatch(setToken(res.login.accessToken));
        history.push("/");
      },
    });
  };
  // const stableDispatch = useCallback(dispatch, [])

  // useEffect(() => {
  //   console.log("value", value);
  //   if (value){
  //     dispatch(setToken(value.data.token.accessToken));
  //   }
  // }, [value, dispatch]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={"container h-100"}>
      <Row className={"h-100"} align={"middle"} justify={"center"}>
        <Col xs={12} sm={12} md={6} lg={8} xl={10}>
          <Card title="Login Form">
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
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

const onLogin = (data: any): Promise<any> =>
  new Promise((resolve, reject) => {
    login(data)
      .then((data) => resolve(data))
      .catch((err) => reject);
  });
