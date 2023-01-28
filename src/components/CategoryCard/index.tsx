import { View, Text } from 'react-native'
import React from 'react'
import { CardContainer, CardText, ValueText } from './styled'

interface CategoryCardProps{
    category: string,
    value: string
}

export default function CategoryCard({category, value}:CategoryCardProps) {
  return (
    <CardContainer>
      <CardText>{category}</CardText>
      <ValueText>R$ {value}</ValueText>
    </CardContainer>
  )
}