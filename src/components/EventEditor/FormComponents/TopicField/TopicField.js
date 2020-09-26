import {Form, Input} from 'antd';
import React from 'react';
import './topic-field.css';

const TopicField = () => {
  return (
    <Form.Item
      name="topic"
      label="Topic"
      rules={[
        {
          required: true,
          type: 'string',
          transform(value) {
            return value.trim();
          },
          max: 80,
          message: 'Please enter event topic. Max length of string 80 characters.',
        },
      ]}
    >
      <Input name="topic" allowClear placeholder="Please enter event topic" />
    </Form.Item>
  );
};

export default TopicField;
