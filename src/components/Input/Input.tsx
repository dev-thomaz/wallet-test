import { Text, TouchableOpacity, View, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import React, {useState} from "react";
import Icon from '../../../assets/svg/icon-camera.svg'

interface OwnProps {
    label: string,
    icon?: boolean,
    value?: string
}

export type InputProps = TextInputProps & OwnProps

export function Input({label, icon = false, value, keyboardType, ...rest}: InputProps){

   

return(
    <View style={styles.container}>
    <Text style={styles.label} >{label}</Text>
    <View style={styles.inputContainer}>
    {
        icon && <Icon width={35} height={35} />
    }
    <TextInput  returnKeyType="next" style={styles.inputStyle} placeholderTextColor={'#bbb'} value={value}    keyboardType={keyboardType} {...rest} />
    </View>
</View>
)
}