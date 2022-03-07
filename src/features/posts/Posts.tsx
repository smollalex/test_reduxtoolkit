import React, { useEffect } from 'react';
import { IPost, PostsProps } from './types';
import { postApi } from '../posts/postService';
import { Item } from './Item';
import { PostsWrapper as Wrapper, SideBar, Feed } from './styled';

export const Posts: React.FC<PostsProps> = () => {
  const { data: posts, isError, isLoading, isSuccess } = postApi.useFetchAllPostsQuery(10);
  const [ createPost, { error: createPostError }] = postApi.useCreatePostMutation();
  const [ updatePost, { error: updatePostError }] = postApi.useUpdatePostMutation();
  const [ removePost, { error: removePostError }] = postApi.useRemovePostMutation();

  const createPostHandler = async () => {
    const title = prompt();
    await createPost({title, body: title} as IPost)
  }

  return (
    <Wrapper>
      <SideBar>
        <button onClick={createPostHandler}>Create Post</button>
      </SideBar>
      <Feed>
        {isError && 'Error'}
        {isLoading && 'Loading'}
        {isSuccess && 'Success'}
        { createPostError }
        { updatePostError }
        { removePostError }
        {posts?.map((post: IPost) => (
          <Item
            key={post.id}
            post={post}
            remove={removePost}
            update={updatePost}
          />
        ))}
      </Feed>
    </Wrapper>
  );
};

