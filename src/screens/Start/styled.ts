import styled from 'styled-components/native';
import theme from '../../global/styles/theme';


export const Container = styled.View`
  flex:1;
  background-color: ${({theme})=>theme.colors.primary};
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.View`
    margin-top: 144px;
`;

export const IntroView = styled.View`
    margin: 40px 48px 0px
`
export const IntroText = styled.Text`
    font-size: ${({theme})=>theme.fontSize.xg}px;
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.medium};
    text-align: center;
`;

export const ButtonView = styled.View`
    margin: 96px 92px 0px;
`;

export const OpenButton = styled.TouchableOpacity`
    background: ${({theme})=>theme.colors.shape};
    width: 311px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${({theme}) => theme.fontSize.sm}px;
    color: ${({theme}) => theme.colors.title};
`;