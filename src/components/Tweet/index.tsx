import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface Props {
  avatar: string;
  name: string;
  username: string;
  time: string;
  description: string;
  imageContent?: string;
  comment: string;
  retweet: string;
  like: string;
}

const Tweet: React.FC<Props> = ({
  avatar,
  name,
  username,
  time,
  description,
  imageContent,
  comment,
  retweet,
  like,
}) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar src={avatar} alt="Foto Perfil" />
        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{username}</span>
            <Dot />
            <time>{time}</time>
          </Header>

          <Description>{description}</Description>

          {imageContent && <ImageContent src={imageContent} />}

          <Icons>
            <Status>
              <CommentIcon />
              {comment}
            </Status>
            <Status>
              <RetweetIcon />
              {retweet}
            </Status>
            <Status>
              <LikeIcon />
              {like}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
