import React from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default () => {
  const props = {
    name: "file",
    action: "../../Docs",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log("info", info);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload showUploadList {...props}>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
  );
};
