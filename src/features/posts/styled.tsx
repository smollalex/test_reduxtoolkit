import styled from "styled-components";

export const PostsWrapper = styled.div`
  display: flex;
`
export const SideBar = styled.div`
  width: 250px;
  margin-right: 50px;
`

export const Feed = styled.div`
  max-width: 720px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: start;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
`
export const Title = styled.div`
  font-size: 24px;
  font-family: serif-sans;
  margin-bottom: 10px;
  border-radius: 4px;
`
export const Body = styled.div`
  font-size: 14px;
`
export const Image = styled.img`
  margin-right: 20px;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-self: normal;
  width: 100%;
`
export const Actions = styled.div`
  display: none;
  margin-top: auto;
  justify-content: flex-end;
  ${ItemWrapper}:hover & {
    display: flex;  
  }
`

export const Button = styled.div<{ onClick: any, variant: 'primary' | 'danger' | 'info' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 4px;
  transition: .5s;
  cursor: pointer;
  margin: 0 5px;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #d4d4d4;
          color: black;
        `;
      case 'danger':
        return `
          background-color: #ef4444;
          color: white;
        `
      case 'info':
        return `
          background-color: #0ea5e9;
          color: white;
        `
    }
  }}
`;

export const TitleInput = styled.textarea`
  font-size: 24px;
  font-family: serif-sans;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  background: none;
`;

export const BodyInput = styled.textarea`
  display: flex;
  flex-direction: column;
  align-self: normal;
  width: 100%;
  border: none;
  background: none;
  font-family: serif-sans;
`;



