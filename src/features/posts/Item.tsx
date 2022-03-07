import React, { useState } from 'react';
import { IPost } from './types';
import { ItemWrapper as Wrapper, Title, Body, Text, Image, Actions, Button, TitleInput, BodyInput } from './styled';

type ItemProps = {
  post: IPost
  update: (post: IPost) => void
  remove: (post: IPost) => void
}

export const Item: React.FC<ItemProps> = (props) => {
  const { post, update, remove } = props;

  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  
  const updateHandler = () => {
    console.log(title, body);
    update({ ...post, title, body });
    setUpdateMode(false);
  };

  return (
    <Wrapper>
      <Image src={`https://loremflickr.com/320/240?random=${post.id}`} alt="" />
      <Text>
        {updateMode ? (
          <>
            <TitleInput defaultValue={post.title} onChange={(e) => setTitle(e.target.value)}></TitleInput>
            <BodyInput name="" id="" cols={30} rows={10} defaultValue={post.body} onChange={(e) => setBody(e.target.value)}></BodyInput>
          </>
        ) : (
          <>
            <Title>{post.title}</Title>
            <Body>{post.body}</Body>  
          </>
        )}
        <Actions>
          {updateMode ? (
            <>
              <Button onClick={() => setUpdateMode(false)} variant="primary">Cancel</Button>
              <Button onClick={updateHandler} variant="info">Save</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setUpdateMode(true)} variant="primary">Edit</Button>
              <Button onClick={() => remove(post)} variant="danger">Remove</Button>    
            </>
          )}
          
        </Actions>
      </Text>
    </Wrapper>
  );
};
