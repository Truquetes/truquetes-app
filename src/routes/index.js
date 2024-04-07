import { createNativeStackNavigator} from '@react-navigation/native-stack'

import { PreLoader } from '../screens/PreLoader/index'
import {Welcome} from '../screens/Welcome/index'
import {Login} from '../screens/Login/index'
import {Register} from '../screens/Register/index'

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
        </Stack.Navigator>
    )
}