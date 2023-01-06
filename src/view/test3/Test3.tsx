import { FC } from "react";
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
const Test3: FC = (props) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  // 类似 vue.$refs.form
  const [form] = Form.useForm();
  const onGenderChange = (value: string) => {
    setShowX(false);
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        setShowX(true);
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  const [showX, setShowX] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => console.log(1)}>
        xxxxxxxxx
      </Button>
      {/* {} 类似:v-bind */}
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
            <Select.Option value="other">other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item noStyle>
          {/* {({getFieldValue}) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{required: true}]}
              >
                <Input />
              </Form.Item>
            ) : null
          } */}
          {showX ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Test3;
