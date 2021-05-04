import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { ActivityIndicator } from 'react-native';
import Pokedex from "./Pokedex";
import { CustomScrollView,CustomView,CustomText,CustomItem } from "./Styles";
import { useFonts, Poppins_400Regular,Poppins_500Medium,Poppins_200ExtraLight }  from '@expo-google-fonts/poppins'
export default function App() {
  const [fontsLoaded] = useFonts({regular: Poppins_400Regular,bold:Poppins_500Medium,light:Poppins_200ExtraLight});
  const [Pokemons, setPokemons] = useState(null)
  useEffect(()=>{
    (async()=>{ 
      let data = await Pokedex.getPokemons();
      if(data!='Error')setPokemons(data);
      else console.log('Error');
    })()
  })
  if(Pokemons!=null && fontsLoaded){
    return (
        <CustomView pb>
          <CustomScrollView>
            <CustomText size='40px' family='light' align='center'>Pokedex</CustomText>
            <CustomItem data={{
              name:'pikachu',
              group: 'eletrico',
              height: 7,
              weight: 20,
            }} image='https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png' />
            
            <CustomItem data={{
              name:'pikachu',
              group: 'eletrico',
              height: 7,
              weight: 20,
            }} image='https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png' />
            
            <CustomItem data={{
              name:'pikachu',
              group: 'eletrico',
              height: 7,
              weight: 20,
            }} image='https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png' />
            
            <CustomItem data={{
              name:'pikachu',
              group: 'eletrico',
              height: 7,
              weight: 20,
            }} image='https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png' />
            
            <CustomItem data={{
              name:'pikachu',
              group: 'eletrico',
              height: 7,
              weight: 20,
            }} image='https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png' />
            
            </CustomScrollView>
          <StatusBar style='dark' translucent={false} />
        </CustomView>
    );
  }else{
  return <ActivityIndicator size={50} color='blue' />
}
}
