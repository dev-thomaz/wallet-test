import {  StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
       
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:20,
        width:300,
        gap:10,
        borderRadius:12,
    },
    defaultColor:{ backgroundColor:'#12C2E9',},
    secundaryColor:{ backgroundColor:'#A5FF32',},
    disabledContainer: {
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:20,
        width:300,
        gap:10,
        borderRadius:12,
    },
    defaultButtonText: {
       color: '#fff',
       fontSize:18,
       lineHeight:20,
       fontWeight:'400',
       fontFamily:'PTSans-Regular'
    },
    secundaryButtonText: {
       color: '#142995',
       fontSize:18,
       lineHeight:20,
       fontWeight:'400',
       fontFamily:'PTSans-Regular'
    },
    disabledButtonText: {
       color: '#bbbbbb',
       fontSize:18,
       lineHeight:20,
       fontWeight:'400',
       fontFamily:'PTSans-Regular'
    },
  
   });