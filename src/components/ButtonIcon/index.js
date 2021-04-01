import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {IconAddSaldo, IconGetPoint} from '../../assets/Icon'
import { WARNA_SEKUNDER } from '../../untils/constant'

const ButtonIcon = ({title}) => {

    const Icon = () => {
        if(title === "Add Saldo") return <IconAddSaldo />

        if(title === "GetPoint") return <IconGetPoint />
        
        return <IconAddSaldo />
    };

    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Icon />
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    button: {
        backgroundColor: WARNA_SEKUNDER,
        padding: 7,
        borderRadius: 10,
    },
    text:{
        fontSize: 10,
        textAlign: 'center',
    }
})
