import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Avatar, { AvatarSize } from '../../components/Avatar';
import {
  ProfileContainer,
  Title,
  Header,
  ProfileLink,
  ProfileLinkContainer,
  ProfileLinkText,
} from './style';

const ProfileScreen = () => {
  return (
    <ProfileContainer>
      <SafeAreaView>
        <Header>
          <Avatar
            image="https://i.stack.imgur.com/l60Hf.png"
            size={AvatarSize.LARGE}
          />
          <Title>Luiz Felipe Rodrigues Chaves</Title>
        </Header>
        <ProfileLinkContainer>
          <TouchableOpacity>
            <ProfileLink>
              <ProfileLinkText>Meus dados</ProfileLinkText>
            </ProfileLink>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProfileLink>
              <ProfileLinkText>Favoritos</ProfileLinkText>
            </ProfileLink>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProfileLink>
              <ProfileLinkText>Forma de pagamento</ProfileLinkText>
            </ProfileLink>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProfileLink>
              <ProfileLinkText>Endereços</ProfileLinkText>
            </ProfileLink>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProfileLink>
              <ProfileLinkText>Configuração</ProfileLinkText>
            </ProfileLink>
          </TouchableOpacity>
        </ProfileLinkContainer>
      </SafeAreaView>
    </ProfileContainer>
  );
};

export default ProfileScreen;
