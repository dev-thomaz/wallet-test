import { GestureResponderEvent, Text, TouchableOpacity, TouchableOpacityProps,  View } from "react-native";
import {styles} from './styles'

type ColorVariant = 'black' | 'green'
interface OwnProps {
    number: string,
    cvv: string,
    name: string,
    validDate: string,
    color: ColorVariant,
    onPress?: (event: GestureResponderEvent) => void
}
type CardProps = OwnProps & TouchableOpacityProps
export function Card({name, cvv, number, validDate, color, onPress}: CardProps){
 
    return(
        <View>
       <TouchableOpacity onPress={onPress} style={ color == 'black' ? styles.blackContainer : styles.greenContainer}>
        <View>
       <Text style={ color == 'black' ? styles.blackCardText : styles.greenCardText}>{color} card</Text>
        </View>
        <View style={styles.infoBottomContainer}>
        <Text style={ color == 'black' ? styles.blackCardText : styles.greenCardText}>{name}</Text>
        <Text style={ color == 'black' ? styles.blackCardText : styles.greenCardText}>{number}</Text>
        <Text style={ color == 'black' ? styles.blackCardText : styles.greenCardText}>Validade: {validDate}</Text>
        </View>
       </TouchableOpacity>
        </View>
    )
    }