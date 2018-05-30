/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,
  Image,TextInput,
  AppRegistry, FlatList,Alert
} from 'react-native';
var SampleArray = ["First","Second"] ;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	 AddItemsToArray=()=>{
 
     
		SampleArray.push( this.state.Holder.toString() );
 
      // Showing the complete Array on Screen Using Alert.
      Alert.alert(SampleArray.toString());  
	 
 
  }
  render() {
    return (
	
      <View style={styles.container}>
	
        <View style={{width: '100%', height: 70, backgroundColor: '#ffffff', flexDirection: 'row'}}>
		
		 <Image
          style={{width: 40, height: 40, marginTop: 15,marginBottom: 15, marginLeft: 10,marginRight: 10}}
         source={{uri: 'asset:/back.png'}}
        />
		 <View
		  style={{backgroundColor: '#ffffff', marginTop: 10, marginLeft: 10}}
		  >
		  <Text style={styles.item_o}>North Sydney Store</Text>
		  <Text style={styles.item_t}>16 members</Text>
  </View>
		<Image
          style={{width: 40, height: 40, marginTop: 15,marginBottom: 15, marginLeft: 10,marginRight: 10,right: 0,position:'absolute'}}
          source={{uri: 'asset:/setting.png'}}
        />
		
		
		
		</View>
		  <FlatList
          data={[
            {key: 'Give us any rule we will break it.We are gonna make our dreams.'},
            {key: 'I never thaught I could'},
            {key: 'We finally got the piece of the pie'}
           
          ]}
          renderItem={({item}) => 
		  
		  <View
		  style={{alignSelf:'baseline',width: 250 , backgroundColor: '#ffffff',padding: 10 , marginTop: 10, marginLeft: 10}}
		  >
		  <Text style={styles.item}>Firstname Lastname</Text>
		  <Text style={styles.itemm}>{item.key}</Text>
  </View>}
		  
		  
        />
		
		<View style={{width: '100%', height: 70, backgroundColor: '#303131' ,bottom: 0, position: 'absolute', flexDirection: 'row'}}>
		 <Image
          style={{width: 40, height: 40, marginTop: 15,marginBottom: 15, marginLeft: 10,marginRight: 10}}
          source={{uri: 'asset:/add.png'}}
        />
		
		  <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Text"
               placeholderTextColor = "#9b9b9b"
               autoCapitalize = "none"
			   onChangeText={TextInputValue => this.setState({ Holder : TextInputValue }) }
               />
			   <View
			   style={{right: 0,position:'absolute'}}
			   >
         <TouchableOpacity activeOpacity = { .5 } onPress={ this.AddItemsToArray}>
 
        <Image 
          style={{width: 40, height: 40, marginTop: 15,marginBottom: 15, marginLeft: 10,marginRight: 10}}
          source={{uri: 'asset:/send.png'}}
        />
          
        </TouchableOpacity>
		</View>
		</View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#FFF3F7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item: {
   
    fontSize: 18,
	
	marginTop: 10,
	borderRadius: 5,
	color: '#000000',
	   fontWeight: 'bold',
	backgroundColor: '#ffffff',
   
  },
  itemm: {
   
    fontSize: 16,
	
	marginTop:10,
	
	color: '#000000',
	backgroundColor: '#ffffff',
 
  },
  item_o: {
    fontSize: 18,
	marginTop: 5,
	color: '#000000',
	fontWeight: 'bold',
	backgroundColor: '#ffffff',
   
  },
  item_t: {
    fontSize: 14,
	marginTop: 5,
	color: '#9b9b9b',
	backgroundColor: '#ffffff',
   
  },
  input: {
      marginTop: 15,
	  marginBottom: 15,
      height: 40,
	  width:230,
	  textAlign: 'left',
	  padding: 5,
	  backgroundColor:'#ffffff',
      borderColor: '#ffffff',
	  borderRadius: 5,
      borderWidth: 1
   }
 
});
