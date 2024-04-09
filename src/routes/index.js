import { createNativeStackNavigator} from '@react-navigation/native-stack'

import { PreLoader } from '../screens/PreLoader/index'
import {Welcome} from '../screens/Welcome/index'
import {Login} from '../screens/Login/index'
import {Register} from '../screens/Register/index'
import {Main} from '../screens/Main/index'
import {Marcador} from '../screens/Marcador/index'
import {Statistic} from '../screens/Statistic/index'
import {Tournament} from '../screens/Tournament/index'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="PreLoader"
                component={PreLoader}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false, headerLeft: null}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal'}}                
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal'}}                
            />
            <Stack.Screen
                name="Marcador"
                component={Marcador}
                options={{headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal'}}                
            />
            <Stack.Screen
                name="Statistic"
                component={Statistic}
                options={{headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal'}}                
            />
            <Stack.Screen
                name="Tournament"
                component={Tournament}
                options={{headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal'}}                
            />
        </Stack.Navigator>
    )
}