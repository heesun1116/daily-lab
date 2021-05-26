import React from 'react';
import HeaderContainer from '../container/common/HeaderContainer';
import PaginationContainer from '../container/posts/PaginationContainer';
import PostListContainer from '../container/posts/PostListContainer';
import Upload from './Upload';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
      <Upload />
    </div>
  );
};

export default PostListPage;
