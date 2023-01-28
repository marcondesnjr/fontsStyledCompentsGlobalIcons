import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, TouchableContainer, TouchableText } from './styled';

interface IconTextButtonProps{
    text?: string,
    icon?: string,
    backgroundColor?: string,
    textColor?: string,
    fontFamily?: string,
    iconColor?: string,
    iconSize?: number,
    fontSize?: number
}

export default function IconTextTouchable({text, icon, backgroundColor, textColor, fontFamily, iconColor,iconSize, fontSize}:IconTextButtonProps) {
  return (
    <TouchableContainer backgroundColor={backgroundColor}>
        {icon?(<Icon 
                    name={icon} 
                    size={iconSize}
                    iconColor={iconColor} 
                />):""}
        {text?(<TouchableText
                    textColor={textColor}
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                >
                    {text}
                </TouchableText>):""}
    </TouchableContainer>
  )
}