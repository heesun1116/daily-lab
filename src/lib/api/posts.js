import client from './client';
import qs from 'qs';
export const writePost = ({ title, body, tags }) =>
  client.post(
    '/api/posts',
    { title, body, tags },
    {
      withCredentials: true,
    },
  );

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`); // /api/posts?username=tester&page=2
};
// update

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });
//delete
export const removePost = (id) => client.delete(`/api/posts/${id}`);
