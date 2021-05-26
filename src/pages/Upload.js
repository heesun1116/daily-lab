import React, { useRef, useState } from 'react';
import S3 from 'react-aws-s3';

const Upload = () => {
  const [fileUrl, setFileUrl] = useState('');
  const fileInput = useRef();
  const handelClick = async (e) => {
    e.preventDefault();
    let file = fileInput.current.files[0];
    let newFilename = fileInput.current.files[0].name;
    const config = {
      bucketName: 'dailylab',
      dirName: 'Avatar',
      region: 'ap-northeast-2',
      accessKeyId: 'AKIAXBXXD3TLVJWV5YV6',
      secretAccessKey: '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',
    };
    const ReactS3Clinet = new S3(config);
    const data = await ReactS3Clinet.uploadFile(file, newFilename);
    if (data) {
      setFileUrl(data.location);
    }
  };
  const value = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <form className="upload-steps" onSubmit={handelClick}>
        <label>
          Upload file:
          <input type="file" ref={fileInput} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default Upload;
