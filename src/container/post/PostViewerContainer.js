import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../modules/post';

const PostViewerContainer = ({ match }) => {
  //라우투로 사용되는 컴포넌트에서 받아오는 match 라는 객체 안의 params값을 참조(match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는ㄴ지에 대한 정보가 들어있음)
  // 처음 마운트 될떄 포스트 읽기 api 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));
  useEffect(() => {
    dispatch(readPost(postId));
    //언마운트 될때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);
  return <PostViewer post={post} loading={loading} error={error} />;
};

export default withRouter(PostViewerContainer);
