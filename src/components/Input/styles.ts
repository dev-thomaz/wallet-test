import {  StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        display:'flex',
        gap:10,
    },
    inputContainer: {
        backgroundColor:'#fff',
        gap:10,
        paddingHorizontal:10,
        borderRadius:5,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
    },
    label: {
        color:'#fff',
        fontFamily:'PTSans-Regular',
        fontSize: 16,
        lineHeight:18,
    },
    inputStyle: {
        flex:1,
        fontFamily:'PTSans-Regular',
        color: '#111',
        fontSize:16,
        lineHeight:18,
        fontWeight:'400',
    }
  
   });