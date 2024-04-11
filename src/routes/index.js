import {createStackNavigator} from '@react-navigation/stack';

import {PreLoader} from '../screens/PreLoader/index'
import {Welcome} from '../screens/Welcome/index'
import {Login} from '../screens/Login/index'
import {Register} from '../screens/Register/index'
import {Main} from '../screens/Main/index'
import {Marcador} from '../screens/Marcador/index'
import {Statistic} from '../screens/Statistic/index'
import {Tournament} from '../screens/Tournament/index'
import {GameHistory} from '../screens/GameHistory/index'
import {Shuffling} from '../screens/Shuffling/index'

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PreLoader"
                component={PreLoader}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Marcador"
                component={Marcador}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Statistic"
                component={Statistic}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Tournament"
                component={Tournament}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GameHistory"
                component={GameHistory}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Shuffling"
                component={Shuffling}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}