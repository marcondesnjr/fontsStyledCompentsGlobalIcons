import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../Dashboard';
import Register from '../Register';
import Summary from '../Summary';
import { Header } from './styled';
import theme from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabbedHome() {
  return (
    <Tab.Navigator screenOptions={{
            tabBarLabelPosition: 'beside-icon',
            tabBarLabelStyle:{
                fontFamily: theme.fonts.medium,
                fontSize: theme.fontSize.sm,
            },
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.title,
            
        }}>

        <Tab.Screen name='Listagem' 
            component={Dashboard} 
            options={{
                headerShown: false,
                tabBarIcon: ({size, color})=><Feather name="list" size={size} color={color}/>
            }}

        />
        <Tab.Screen name='Cadastrar' component={Register} options={{
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
            },
            tabBarIcon: ({size, color})=><Feather name="dollar-sign" size={size} color={color} />
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
            },
            tabBarIcon: ({size,color})=><Feather name="pie-chart" size={size} color={color} />
        }}/>
    </Tab.Navigator>
  )
}
