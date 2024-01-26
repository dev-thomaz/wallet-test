import {  StyleSheet} from 'react-native'
 export const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'transparent',
       alignItems:'center',
       justifyContent:'center',
    },
    content: {
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       gap:30,
    },
    walletText: {
       color: '#fff',
       fontSize:28,
       lineHeight:32,
       fontWeight:'400',
       fontFamily:'PTSansCaption-Regular',
       position:'absolute'
    },
    formArea:{
       gap:20,
    },
    inputsRow:{
       display:'flex',
       flexDirection:'row',
       gap:15,
    }
   });
   