import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet
          avatar="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
          name="Willian Santos"
          username="@williansantos"
          time="02 de mar"
          description="Resumindo sem resumir!"
          imageContent="https://picsum.photos/1200?random=1"
          comment="36"
          retweet="25"
          like="100"
        />
        <Tweet
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhJ0u2kTQ9eD1JW3irleD5c76Yg2wT7N8UQ&usqp=CAU"
          name="Caio Luiz"
          username="@caioluiz"
          time="08 de mar"
          description="Resumindo sem resumir!"
          imageContent="https://picsum.photos/1200?random=2"
          comment="40"
          retweet="20"
          like="10"
        />
        <Tweet
          avatar="https://i.pinimg.com/474x/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a--stupid-stuff-stay-calm.jpg"
          name="Rebeka Kimberly"
          username="@Rebekakimberly"
          time="12 de mar"
          description="Resumindo sem resumir!"
          imageContent="https://picsum.photos/1200?random=3"
          comment="15"
          retweet="2"
          like="18"
        />
      </Tweets>
    </Container>
  );
};

export default Feed;
