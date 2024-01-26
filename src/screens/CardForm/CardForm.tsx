
import React from 'react';
import {
   Alert,
  View,
} from 'react-native';

import { Button } from '../../components/Button/Button';
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header/Header';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {useForm, useWatch} from 'react-hook-form'
import {styles} from './styles'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cardNumberFormatter, expirationDateFormatter } from '../../utils/formaters';
import { cardApi } from '../../store/cards/apiSlice';
import { ColorVariant } from '../../interfaces/ICards';
type FormData ={
   name: string,
   number: string,
   cvv: string,
   validDate: string,
}

const schema = yup.object({
   name: yup.string().required("Inform o nome do titular"),
   number: yup.string().min(19, 'Informe todos os dígitos do cartão').required("Inform o número do cartão"),
   cvv: yup.string().min(3, 'O código do cartão possui 3 digitos').required('Informe o código de segurança do cartão'),
   validDate: yup.string().min(5).required('Informe o vencimento do cartão'),
})


export function CardForm() {
const navigation = useNavigation()
const isFocused = useIsFocused();
const textPosition = useSharedValue(-10)
const [addCard, {data}] = cardApi.useAddCardMutation()
const {data: cards} = cardApi.useGetCardsQuery()

const {control, handleSubmit, formState: {isValid} } = useForm<FormData>({
   resolver: yupResolver(schema),
   defaultValues:{
      name:'',
      cvv:'',
      validDate:'',
      number:''
   }
})



function handleCardRegister({name, number, cvv, validDate,}: FormData){
   const size = cards?.length;
   const last4 = number.substring(number.length - 4)
   console.log(last4);
   
   let color: ColorVariant = 'black'
   if(size){
       color = size % 2 == 0 ? 'black': 'green'
   }
   
   addCard({
      cvv: cvv,
      name: name,
      number: `●●●● ●●●● ●●●● ${last4}`,
      validDate: validDate,
      color: color   
   })
navigation.navigate('cards')
}
React.useEffect(() => {
   if(isFocused){
      textPosition.value = withSpring(-60,{
         mass: 1,
         damping: 15,
         stiffness: 200,
         overshootClamping: false,
         restDisplacementThreshold: 0.01,
         restSpeedThreshold: 0.01,
      }) 
   }else{
      textPosition.value = withSpring(-80,{
         mass: 1,
         damping: 15,
         stiffness: 200,
         overshootClamping: false,
         restDisplacementThreshold: 0.01,
         restSpeedThreshold: 0.01,
      }) 

   }
 }, [isFocused]);
  return (
    <View style={styles.container}>
      <Header title='Cadastro' transparent/>
      <View style={styles.content}>
        <Animated.Text style={[styles.walletText , {top: textPosition}]}>
        Wallet Test
        </Animated.Text>
        <View style={styles.formArea}>
        <ControlledInput name="number" control={control} maxLength={19}   keyboardType='decimal-pad' icon label='número do cartão' formatter={cardNumberFormatter}  />
        <ControlledInput name="name" control={control}   keyboardType='default' autoCapitalize='words' autoComplete='name' label='nome do titular do cartão'/>
        <View style={styles.inputsRow}>
           <View style={{flex:1}}>
        <ControlledInput name="validDate"  control={control}  keyboardType='decimal-pad' maxLength={5} placeholder='00/00'  label='vencimento' formatter={expirationDateFormatter} />
            </View> 
            <View style={{flex:1}}>
        <ControlledInput name="cvv" control={control}   keyboardType='decimal-pad' maxLength={3} placeholder='***' label='codigo de segurança'/>
    </View>
        </View>
        <Button disabled={!isValid} onPress={handleSubmit(handleCardRegister)} text='avançar' />
        </View>
        </View>
      
    </View>
  );
}



