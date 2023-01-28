import styled from "styled-components/native";

export const CardContainer = styled.View`
    background-color: ${({theme})=> theme.colors.shape};
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    margin: 6px 0;
`

export const CardText = styled.Text`
    color: ${({theme})=> theme.colors.title};
    font-family: ${({theme})=> theme.fonts.regular};
    font-size: ${({theme})=> theme.fontSize.sm}px
`

export const ValueText = styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=> theme.fonts.bold};
    font-size: ${({theme})=> theme.fontSize.sm}px
`