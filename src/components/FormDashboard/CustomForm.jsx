import { Button, Space, message } from 'antd';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import userService from '@/services/userService';
import { useDispatch } from 'react-redux';
import { actFetchMeAsync } from '@/redux/auth/authAction';
const FormStyle = styled.div`
  padding-bottom: 30px;

  .ant-btn.css-dev-only-do-not-override-owivv6 {
    width: auto;
    height: 24px;
    background: var(--main-color, #e6f1fa);
    display: flex;
    align-items: center;
    border-radius: 0px;
    margin-top: 11px;
    border: 0px solid;
  }

  .cover {
    display: flex;
  }
`;

const TitleContent = styled.div`
  width: 316px;
  height: 22px;
  color: var(--black-2, #3f3f3f);
  /* Oswald Medium 18 AA */
  font-family: Oswald;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding-bottom: 11px;
`;

const Content = styled.div`
  height: 20px;
  color: var(--gray-1, #828282);
  /* Roboto Regular 16 */
  font-family: system-ui;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const CustomForm = ({ id, avatar, title, titlecontent, contentItems, button, button2, titlecontact }) => {
  const dispatch = useDispatch();

  const [fileList, setFileList] = useState([
    {
      url:
        avatar === 'default.png'
          ? 'https://media.istockphoto.com/id/474001724/photo/businessman-icon-as-avatar-or-default-profile-picture.webp?b=1&s=170667a&w=0&k=20&c=L4FWLBUJtbhwL27g11vhSg91bLNUsYsPG0cfWO1TUfU='
          : avatar,
    },
  ]);
  const onChange = async ({ fileList: newFileList }) => {
    const formData = new FormData();
    formData.append('image', newFileList[0].originFileObj);
    const res = await userService.upLoadAvatar(formData, id);
    dispatch(actFetchMeAsync());
    message.success('Upload image success');

    setFileList(newFileList);
  };
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <FormStyle>
      <TitleContent>{titlecontent}</TitleContent>
      {avatar && (
        <ImgCrop rotationSlider>
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            maxCount={1}
            onRemove={() => false}
          >
            {fileList.length < 2 && '+ Upload'}
          </Upload>
        </ImgCrop>
      )}

      {contentItems.map((content, index) => (
        <Content key={index}>{content}</Content>
      ))}
      <div className="cover">
        {/* <Button>{button}</Button> */}
        {button2 ? <Button>{button2}</Button> : null}
      </div>
    </FormStyle>
  );
};
