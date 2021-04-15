import React from 'react';
import { Helmet } from 'react-helmet-async';
import Responsive from '../components/common/Responsive';

import EditContainer from '../container/write/EditContainer';
import TagBoxContainer from '../container/write/TagBoxContainer';
import WriteActionButtonsContainer from '../container/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - 앙's 블로구</title>
      </Helmet>
      <EditContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
