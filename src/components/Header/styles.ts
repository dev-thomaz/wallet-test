import {  StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:25,
        alignItems:'center',
        position:'absolute',
        justifyContent:'space-between',
        top:0,
        backgroundColor:'#fff',
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'#dedede',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        zIndex:2,
    },
    transparentContainer:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:20,
        paddingHorizontal:25,
        alignItems:'center',
        position:'absolute',
        justifyContent:'space-between',
        top:0,
        width:'100%',
    },
    title:{
        color:'#142995',
        fontFamily:'PTSans-Regular',
        fontSize:25,
        fontWeight:'400',
        lineHeight:35
    },
    transparentTitle:{
        color:'#12C2E9',
        fontFamily:'PTSans-Regular',
        fontSize:25,
        fontWeight:'400',
        lineHeight:35
    }

})