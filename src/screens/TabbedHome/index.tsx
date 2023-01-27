import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../Dashboard';
import Register from '../Register';
import Summary from '../Summary';
import { Header } from './styled';

const Tab = createBottomTabNavigator();

export default function TabbedHome() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}/>
        <Tab.Screen name='Cadastro' component={Register} />
        <Tab.Screen name='Resumo' component={Summary} />
    </Tab.Navigator>
  )
}
