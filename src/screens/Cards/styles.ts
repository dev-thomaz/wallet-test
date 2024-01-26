import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'#142995',
       alignItems:'center',
       justifyContent:'center',
       zIndex:1,
    },
    topBar:{
       backgroundColor:'#fff',
       alignItems:'center',
       justifyContent:'center',
       top:60,
       position:'absolute',
       width:'100%',
       height:80,
       borderBottomEndRadius:50,
       borderBottomStartRadius:50,
       zIndex:1,
       
    },
    topBarText:{
       color:'#12C2E9',
       fontSize:25,
       fontFamily:'PTSans-Regular',
       lineHeight:35,
       fontWeight:'400',
    },
    cardSelectedContainer:{
       gap:80,
       flex:1,
       justifyContent:'flex-end',
       alignItems:'center',
       position:'absolute',
       bottom: -150
    },
    othersCardContainer:{
       opacity:0.5,
       gap:-130,
       zIndex:1,
       width:'100%'
    },
    useThisCard:{
       color:'#fff',
       fontFamily:'PTSans-Regular',
       fontSize:18,
       marginTop:20
    }
   });
   
   
   