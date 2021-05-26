import React from 'react';
import { useSelector } from 'react-redux';

const Git = () => {
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );
  return (
    <div>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <GitItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </div>
  );
};
const GitItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id, contributes } = post;
  console.log(contributes);
  return <div>git</div>;
};

export default Git;
