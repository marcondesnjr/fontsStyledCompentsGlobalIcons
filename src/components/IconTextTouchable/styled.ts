import styled from "styled-components/native";
import IconTextTouchable from ".";
import { Feather } from '@expo/vector-icons';


interface ContainerProps{
    backgroundColor?: string
}

interface TextProps{
    textColor?: string,
    fontFamily?: string
    fontSize?: number
}

interface IconProps{
    iconColor?: string
}


export const TouchableContainer = styled.TouchableOpacity<ContainerProps>`
    background-color: ${({backgroundColor, theme})=> backgroundColor || theme.colors.shape};
    flex:1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TouchableText = styled.Text<TextProps>`
    margin: 0 14px;
    color: ${({textColor,theme})=> textColor||theme.colors.text_dark};
    font-family: ${({fontFamily, theme})=> fontFamily||theme.fonts.regular};
    font-size: ${({fontSize, theme})=> fontSize||theme.fontSize.md}px;
`;

export const Icon = styled(Feather)<IconProps>`
    color: ${({iconColor, theme}) => iconColor||theme.colors.text_dark};
`