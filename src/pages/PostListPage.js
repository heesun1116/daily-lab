import React from 'react';
import HeaderContainer from '../container/common/HeaderContainer';
import PaginationContainer from '../container/posts/PaginationContainer';
import PostListContainer from '../container/posts/PostListContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </div>
  );
};

export default PostListPage;
