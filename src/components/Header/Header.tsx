import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BackButton from '../../../assets/svg/icon-back.svg'
import PlusButton from '../../../assets/svg/icon-plus.svg'
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
    title: string,
    transparent?: boolean,
    showPlusButton?: boolean,
    onPressPlus?: (event: GestureResponderEvent) => void
}

export function Header({title, transparent = false, showPlusButton = false, onPressPlus}: HeaderProps){
const navigation = useNavigation()

return(
   <View style={ transparent ? styles.transparentContainer : styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <BackButton width={45} height={45} />
    </TouchableOpacity>
    <Text style={ transparent? styles.transparentTitle :styles.title}>{title}</Text>
    {showPlusButton ? <TouchableOpacity onPress={onPressPlus}>
     <PlusButton  width={40} height={40} /> 
    </TouchableOpacity>
     : <View style={{width:40}} ></View>}
   </View>
)
}