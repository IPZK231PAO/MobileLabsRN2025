import React from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import ChatItem from '../components/ChatItem';
import { chats } from '../constants/data';

const ChatScreen = () => (
  <Container>
    <SectionList
      sections={[
        { title: 'Open chats', data: chats.filter(c => c.unread) },
        { title: 'My friends', data: chats.filter(c => !c.unread) }
      ]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatItem {...item} />}
      renderSectionHeader={({ section }) => (
        <SectionHeader>
          <SectionTitle>{section.title}</SectionTitle>
        </SectionHeader>
      )}
    />
  </Container>
);

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.background};
`;

const SectionHeader = styled.View`
  padding: 8px 16px;
  background: ${({ theme }) => theme.cardBackground};
`;

const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`;

export default ChatScreen;