import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    blackContainer:{
        width:300,
        height:180,
        borderRadius:16,
        padding:20,
        gap:30,
        backgroundColor: '#111',
        borderWidth:1,
        borderColor:'#bbb',
        elevation:5,
    },
    blackCardText:{
        color:'#fff',
        fontFamily:'PTSans-Regular',
        fontSize:16,
        fontWeight:'400',
        lineHeight:20,
        textTransform:'capitalize'

    },
    greenContainer:{
        width:300,
        height:180,
        borderRadius:16,
        padding:20,
        gap:30,
        backgroundColor: '#A5FF32',
        borderWidth:1,
        borderColor:'#bbb',
        elevation:5,
    },
    greenCardText:{
        color:'#000',
        fontFamily:'PTSans-Regular',
        fontSize:16,
        fontWeight:'400',
        lineHeight:20,
        textTransform:'capitalize',
    },
    infoBottomContainer:{
        gap:5
    }

})