import React from 'react'
import { View, Text } from 'react-native'
import { color } from 'react-native-reanimated'

export default class CreaterSpace extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'black'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>CreaterSpace</Text>
            </View>
        )
    }
}