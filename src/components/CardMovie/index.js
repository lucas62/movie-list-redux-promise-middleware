import { } from 'react-native';
import React from 'react';
import { Card, Text} from './styles';

const CardMovie = ({title, year, watchers, testID }) => {
  return (
    <Card testID={testID}>
      <Text>Titulo: {title}</Text>
      <Text>Ano de Lançamento: {year}</Text>
      <Text>Assistindo: {watchers}</Text>
    </Card>
  )
}

export default CardMovie