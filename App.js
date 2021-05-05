import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import Pokedex from "./Pokedex";
import { CustomView,CustomText,CustomItem } from "./Styles";
import { useFonts, Poppins_400Regular,Poppins_500Medium,Poppins_200ExtraLight }  from '@expo-google-fonts/poppins'


export default function App() {
  const [PokeDetail, setPokeDetail] = useState(null);
  const [fontsLoaded] = useFonts({regular: Poppins_400Regular,bold:Poppins_500Medium,light:Poppins_200ExtraLight});
  const [Pokemons, setPokemons] = useState(null)
  const renderItem = (props)=>{
    if(PokeDetail!=null){
      return(
        <CustomView>
          <CustomItem data={PokeDetail[props.index]} image={PokeDetail[props.index].image} />
        </CustomView>
      )
    }else{
      return(
        <CustomView>
          <CustomItem data={[]} image={''} />
        </CustomView>
      )
    }
  }
  useEffect(()=>{
    (async()=>{ 
      let data = await Pokedex.getPokemons();
      if(data!='Error')setPokemons(data);
      else console.log('Error');
    })()
  },[])
  useEffect(()=>{
    if(Pokemons != null){
      let array = [];
      Pokemons.forEach(async(val)=>{
        let data = await Pokedex.getDetail(val.url);
        array.push(data)
      });
        setTimeout(async() => {
          await setPokeDetail(array);
        }, 2000);
    }
  },[Pokemons])
  if(Pokemons!=null && fontsLoaded!=null){
    return (
        <CustomView pb>
          <FlatList data={Pokemons} style={{padding: 10}} keyExtractor={(item,index)=>index.toString()} renderItem={renderItem} ListHeaderComponent={
            <CustomText size='40px' family='light' align='center'>Pokedex</CustomText>
          }>
            </FlatList>
          <StatusBar style='dark' translucent={false} />
        </CustomView>
    );
  }else{
  return (
    <CustomView column>
      <CustomText>Carregando...</CustomText>
      <ActivityIndicator size={70} color='white' />
    </CustomView>
    )
}
}
