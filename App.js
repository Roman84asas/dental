import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Group>
          <GroupTitle>11 сентября</GroupTitle>
          <GroupItem>
              <Avatar />
          </GroupItem>
      </Group>
    </Container>
  );
}

const Avatar = styled.View`
`;

const GroupItem = styled.View``;

const GroupTitle = styled.Text`
    font-weight: 800;
    font-size: 22px;
    color: #000000;
`;

const Group = styled.View``;

const Container = styled.View`
    flex: 1;
    margin-top: 50px;
`;