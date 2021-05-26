import client from './client';
import qs from 'qs';
export const writePost = ({ title, body, tags, contributes }) =>
  client.post(
    '/api/posts',
    { title, body, tags, contributes },
    {
      withCredentials: true,
    },
  );

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag, contributes }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
    contributes,
  });
  return client.get(`/api/posts?${queryString}`); // /api/posts?username=tester&page=2
};
// update

export const updatePost = ({ id, title, body, tags, contributes }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
    contributes,
  });
//delete
export const removePost = (id) => client.delete(`/api/posts/${id}`);
