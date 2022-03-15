import { } from 'react-native';
import React from 'react';
import { Card, Text} from './styles';

const EmptyMessage = ({message, testID, loading }) => {
  if (loading) {
    return null;
  }

  return (
    <Card testID={testID}>
      <Text>{message}</Text>
    </Card>
  )
}

export default EmptyMessage