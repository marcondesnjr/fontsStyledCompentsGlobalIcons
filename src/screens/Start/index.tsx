import React from 'react'
import {Button, Image, Text} from 'react-native'
import { ButtonText, ButtonView, Container, Header, IntroText, IntroView, OpenButton } from './styled'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


export default function Start() {
    const navigation = useNavigation()

  return (
    <Container>
        <Header>
            <Image source={require('../../../assets/icons/logo/logo-group.png')} />
        </Header>
        <IntroView>
            <IntroText>
                Controle suas finanças de forma muito simples
            </IntroText>
        </IntroView>
        <ButtonView>
            <OpenButton >
                <ButtonText onPress={()=> navigation.navigate('Home')}>
                    Clica aqui para entrar
                </ButtonText>
            </OpenButton>
        </ButtonView>
    </Container>
  )
}
