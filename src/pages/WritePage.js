import React from 'react';
import Responsive from '../components/common/Responsive';

import EditContainer from '../container/write/EditContainer';
import TagBoxContainer from '../container/write/TagBoxContainer';
import WriteActionButtonsContainer from '../container/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
