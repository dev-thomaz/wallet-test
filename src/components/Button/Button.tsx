import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
type ButtonVariant = 'default' | 'secundary'
interface ButtonProps {
    type?: ButtonVariant,
    text: string,
    disabled?: boolean,
    onPress: (event: GestureResponderEvent) => void
}

export function Button({text, type = 'default', disabled, onPress}: ButtonProps){
return(
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[ type == 'default' ? styles.defaultColor : styles.secundaryColor, disabled ? styles.disabledContainer : styles.container]}>
    <Text style={[type == 'default' ? styles.defaultButtonText : styles.secundaryButtonText, disabled && styles.disabledButtonText ]}>{text}</Text>
</TouchableOpacity>
)
}