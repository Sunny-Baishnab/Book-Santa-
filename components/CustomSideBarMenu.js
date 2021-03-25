import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.drawerItemContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style = {styles.logOut}>
                    <TouchableOpacity style = {styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text style = {styles.buttonText}>LOG OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({ 
    container : { 
        flex:1 
    }, 
    drawerItemsContainer:{ 
        flex:0.8 
    },
    logOut:{
        justifyContent:'flex-end',
        flex:0.2,
        paddingBottom:30
    },
    button:{
        height:40,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        padding:10,
        borderRadius:10,
        marginLeft:25
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold'
    }
})