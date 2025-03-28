import React from 'react';
import styled from 'styled-components/native';

const ChatItem = ({ name, lastMessage, time, unread, avatar }) => (
  <Container>
    <Avatar source={{ uri: avatar }} />
    <Content>
      <Name>{name}</Name>
      <Message>{lastMessage}</Message>
    </Content>
    <RightContainer>
      <TimeText>{time}</TimeText>
      {unread && <UnreadBadge />}
    </RightContainer>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.cardBackground};
  margin: 4px 8px;
  border-radius: 8px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Content = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const Message = styled.Text`
  color: #666;
`;

const RightContainer = styled.View`
  align-items: flex-end;
`;

const TimeText = styled.Text`
  color: #666;
  font-size: 12px;
`;

const UnreadBadge = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #4CAF50;
  margin-top: 4px;
`;

export default ChatItem;