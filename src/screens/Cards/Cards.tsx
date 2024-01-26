

import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Button } from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { ICard } from '../../interfaces/ICards';
import { useDispatch } from 'react-redux';
import { startLoad, stopLoad } from '../../store/LoadingReducer';
import { styles } from './styles';
import { useAppDispath, useAppSelector } from '../../store/hooks'
import { cardApi } from '../../store/cards/apiSlice';

export function Cards(): React.JSX.Element {
    const {data: cards} = cardApi.useGetCardsQuery()
   
    
const [cardSelected, setCardSelected] = useState<ICard | null>(null)
const [cardsArray, setCardsArray] = useState<ICard[] | []>([])
const dispatch = useAppDispath()
const navigation = useNavigation()



function handleSelectCard(card: ICard, index:number){
    cardsArray.splice(index, 1)
    setCardSelected(card)
}

function handleResetCardSelector(){
    setCardsArray(array =>[ cardSelected as ICard, ...array])
    setCardSelected(null)
}

function handleFinishPayment(){
    dispatch(startLoad())
    setTimeout(() => {
       dispatch(stopLoad())
      }, 1000);
}


  return (
    <SafeAreaView style={styles.container}>
        <Header showPlusButton title='Wallet Test' onPressPlus={() => navigation.navigate('register')} />
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Meus cartões</Text>
      </View>
      {!!cardSelected 
      ? <View style={[styles.cardSelectedContainer,  cards?.length > 4 && {bottom: cards?.length*-10}]}>
        <Card color={cardSelected.color} name={cardSelected.name} cvv={cardSelected.cvv} number={cardSelected.number} validDate={cardSelected.validDate} />
        <Button text='pagar com este cartão' onPress={() => handleFinishPayment() } />
        <View  style={styles.othersCardContainer}>
        {cards?.map((card: ICard, index: number)  => {
            
          const {id, color} = card
          return(
              <Card style={{zIndex: index}} onPress={() => handleResetCardSelector()} key={id} name="" validDate="" number="" cvv="" color={color} />
            )
        })}
        </View>
      </View> 
      : <View style={{justifyContent:'center', alignItems:'center', gap:-130, marginTop:80}}>
      {cards?.map((card: ICard, index:number)  => {
          const {id, cvv, name, validDate, number, color} = card
          return(
              <Card onPress={() => handleSelectCard(card, index)} key={id} name={name} validDate={validDate} number={number} cvv={cvv} color={color} />
            )
        })}
      </View>
    }
    {
        !cardSelected ?
    !!cardsArray 
   ? <Text style={styles.useThisCard}>usar este cartão</Text>
   : <Text style={styles.useThisCard}>você ainda não cadastrou nenhum cartão</Text>
   :<></>
    }
    </SafeAreaView>
  );
}

