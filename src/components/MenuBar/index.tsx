import React from 'react';

import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Menssagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <Botside>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4E03AQH5jxyPM7mRHQ/profile-displayphoto-shrink_200_200/0/1645489589409?e=1652313600&v=beta&t=vwyM4jLfABDRGT-VMBgw4LS0gT6ASjzYes7HcGvD9Fs"
          alt="Foto Perfil"
        />

        <ProfileData>
          <strong>Mary Stefany</strong>
          <strong>@marystefany</strong>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
