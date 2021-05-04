import React from "react";
import { View, ScrollView, Text,Image } from "react-native";
import styled from "styled-components/native";
const Pokeball = styled(Image)`
    width: 17px;
    height: 17px;
`
const urlPokeball = {
    uri: 'https://pngimg.com/uploads/pokeball/pokeball_PNG21.png',
}
const urlWeight = {
    uri: 'https://cdn3.iconfinder.com/data/icons/logistics-caramel-vol-2/256/WEIGHT-512.png'
}
const urlGroup = {uri: 'https://i.dlpng.com/static/png/6589024_preview.png'};
const urlHeight = {uri: 'https://image.flaticon.com/icons/png/512/1050/1050209.png'}


const DividerVertical = styled(View)`
    width: 0.8px;
    height: 100%;
    margin-right: 10px;
    background-color: black;
`
const CustomView = styled(View)`
    flex: 1;
    background-color: ${props=>props.bgColor?props.bgColor:'rgba(20,30,30,1)'};
    justify-content: ${props=>props.justify?props.justify:'center'} ;
    flex-direction: ${props=>props.column?'column':'row'};
    align-items: ${props=>props.align?props.align:'center'};
    overflow: hidden;
    padding-bottom: ${props=>props.pb?'10px':0};
    margin-bottom: ${props=>props.mb?'10px':0};
    width: ${props=>props.width?props.width:'100%'};
    border-radius: ${props=>props.radius?props.radius:'0'};
`
const Avatar = styled(Image)`
    width: 150px;
    height: 150px;
    background-color: #ccc;
`
const CustomText = styled(Text)`
    color: ${props=>props.color?props.color:'#e8e8e8'};
    font-size: ${props=>props.size?props.size:'20px'};
    text-align: ${props=>props.align?props.align:'left'};
    font-family: ${props=>props.family?props.family:'regular'};
    margin-bottom: ${props=>props.margin?props.margin:'0'};
`
const CustomScrollView = styled(ScrollView)`
    width: 100%;
    padding: 10px;
    height: 100%;
`
const CustomItem = (props) => (
    <CustomView bgColor='#eee' radius='8px' mb>
        <Avatar source={{uri:props.image||'https://e7.pngegg.com/pngimages/685/647/png-clipart-pikachu-poke-ball-pokemon-pikachu-pokemon-area.png'}} />
        <DividerVertical />
       <CustomView  bgColor='#eee' column align='flex-start'  >
        <CustomText color='black' size='17px'><Pokeball source={urlPokeball} />   Name: {props.data.name||'???'}</CustomText>
        <CustomText color='black' size='17px'><Pokeball source={urlGroup} />   Type: {props.data.group||'???'}</CustomText>
        <CustomText color='black' size='17px'><Pokeball source={urlHeight} />   Height: {props.data.height||'???'}</CustomText>
        <CustomText color='black' size='17px'><Pokeball source={urlWeight} />   Weight: {props.data.weight||'???'}</CustomText>
       </CustomView>
    </CustomView>
)
export 
{
    CustomText,
    CustomView,
    CustomScrollView,
    CustomItem,
}
