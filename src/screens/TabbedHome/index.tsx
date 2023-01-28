import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../Dashboard';
import Register from '../Register';
import Summary from '../Summary';
import { Header } from './styled';
import theme from '../../global/styles/theme';

const Tab = createBottomTabNavigator();

export default function TabbedHome() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}/>
        <Tab.Screen name='Cadastro' component={Register} options={{
            headerTitle: "Cadastro",
            headerStyle:{
                backgroundColor: theme.colors.primary,
                height: 113
            },
            headerTintColor: theme.colors.shape,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: theme.fonts.regular,
                fontSize: theme.fontSize.md
            }
        }}/>
        <Tab.Screen name='Resumo' component={Summary} options={{
            headerTitle: "Resumo por categoria",
            headerStyle:{
                backgroundColor: theme.colors.primary,
                height: 113
            },
            headerTintColor: theme.colors.shape,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: theme.fonts.regular,
                fontSize: theme.fontSize.md
            }
        }}/>
    </Tab.Navigator>
  )
}
