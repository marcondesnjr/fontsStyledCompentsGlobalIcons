import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { BottomButtonView, BottomView, ButtonView, CategoryView, Container, RegisterInput, TypeContainer } from './styled'
import IconTextTouchable from '../../components/IconTextTouchable'
import theme from '../../global/styles/theme'
import {Picker} from '@react-native-picker/picker';


export default function Register() {

    const [pickerFocused, setPickerFocused] = useState(false)

  return (
    <Container>
        <RegisterInput placeholder='Nome'/>
        <RegisterInput placeholder='Preço'/>
        <TypeContainer>
            <ButtonView>
                <IconTextTouchable 
                    icon='arrow-up-circle' 
                    text='Income'
                    backgroundColor={theme.colors.background}
                    iconSize={24}
                    iconColor={theme.colors.success}
                    textColor={theme.colors.title}
                    fontSize={theme.fontSize.sm}
                    />
            </ButtonView>
            <ButtonView>
                <IconTextTouchable 
                    icon='arrow-down-circle' 
                    text='Outcome'
                    backgroundColor={theme.colors.background}
                    iconSize={24}
                    iconColor={theme.colors.attention}
                    textColor={theme.colors.title}
                    fontSize={theme.fontSize.sm}
                />
            </ButtonView>
        </TypeContainer>
        <BottomView>
            <CategoryView>
                <Picker onFocus={() => setPickerFocused(true)}
                        onBlur={() => setPickerFocused(false)}>
                    <Picker.Item
                        value=""
                        label="Categoria"
                        enabled={!pickerFocused}
                    />
                </Picker>
            </CategoryView>
            <BottomButtonView>
                <IconTextTouchable 
                    text='Enviar'
                    fontFamily={theme.fonts.medium}
                    fontSize={theme.fontSize.sm}
                    textColor={theme.colors.shape}
                    backgroundColor={theme.colors.secondary}
                />
            </BottomButtonView>
        </BottomView>
    </Container>
  )
}