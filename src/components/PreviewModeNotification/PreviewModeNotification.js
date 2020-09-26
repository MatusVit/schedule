import React from 'react';
import {Button, notification} from 'antd';
import {FileSearchOutlined} from '@ant-design/icons';

const key = `open${Date.now()}`;

const openNotificationPreviewMode = (close) => {
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key);
        close();
      }}
    >
      Exit mode
    </Button>
  );

  notification.open({
    message: 'Preview Mode',
    key,
    duration: 0,
    btn,
    onClose: close,
    placement: 'bottomLeft',
    style: {backgroundColor: '#f6ff9a8a', width: '275px'},
    icon: <FileSearchOutlined style={{color: '#1d39c4'}} />,
  });
};

export default openNotificationPreviewMode;