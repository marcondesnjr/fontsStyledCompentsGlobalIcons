import { AntDesign } from '@expo/vector-icons';import React from 'react'
import { FlatList } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { categoryData } from '../../data/transactions';
import theme from '../../global/styles/theme';
import { Container, HeaderText, HeaderView } from './styled'

export default function Summary() {
  return (
    <Container>
      <HeaderView>
        <AntDesign name="left" size={24} color={theme.colors.text_dark}/>
        <HeaderText>{'maio, 2020'}</HeaderText>
        <AntDesign name="right" size={24} color={theme.colors.text_dark}/>
      </HeaderView>
      <FlatList 
        data={categoryData}
        renderItem={({item}) => <CategoryCard category={item.name} value={item.total}/>} 
      />
    </Container>
  )
}