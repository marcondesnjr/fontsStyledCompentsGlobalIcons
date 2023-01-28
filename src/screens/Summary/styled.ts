import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 25px;
    background-color: ${({theme})=>theme.colors.background};
`;


export const HeaderView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0 80px;
`

export const HeaderText = styled.Text`
    font-size: ${({theme})=> theme.fontSize.ld}px;
    color: ${({theme})=> theme.colors.text_dark};
    font-family: ${({theme})=> theme.fonts.regular};
`

export const ContentView = styled.View`
    margin-top: 80px;
`