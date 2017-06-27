// react-native
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Nav images
import sbLogo from '../assets/sb-logo.gif';
import backIcon from '../assets/back-arrow-icon.png';
import favoriteIcon from '../assets/favorite-icon.png';
import menuIcon from '../assets/menu-icon.png';
import searchIcon from '../assets/search-icon.png';

// Views
import Stories from './Stories';
import WebPage from './WebPage';

// Component - routing
// Stateless functional component - returns what we would like to render
const SmartBrief = StackNavigator({
    Stories: { 
        screen: Stories,
        navigationOptions: ({navigation}) => ({
            header: () => (   
                // JSX - header
                <View style={headerStyles.header} >
                    <Image style={headerStyles.menuIcon} source={menuIcon} />
                    <Text style={headerStyles.title} >Education</Text>
                    <Image style={headerStyles.searchIcon} source={searchIcon}  />
                </View>),
            headerStyle: {
                backgroundColor: '#247FB6',
                height: 100
            }
        }) 
    },
    WebPage: { 
        screen: WebPage,
        navigationOptions: ({navigation}) => ({
            header: () => ( 
                // JSX - header
                <View style={headerStyles.header} >
                    <TouchableHighlight style={headerStyles.touchableBack} onPress={() => navigation.goBack(null)}>
                        <Image style={headerStyles.backIcon} source={backIcon} />
                    </TouchableHighlight>
                    <Image style={headerStyles.sblogo} source={sbLogo}  />
                </View>),
            headerStyle: {
                backgroundColor: '#247FB6',
                height: 100
            }
        }) 
    }
});

const headerStyles = StyleSheet.create({
    header:{
        backgroundColor: '#247FB6',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sblogo: {
        height: 20,
        width: 110,
        alignSelf: 'center',
        marginTop: 22,
        marginLeft: -30,
        resizeMode: 'contain',
        justifyContent: 'center',
        flex: 1
    },
    backIcon: {
        alignSelf: 'flex-start',
        width: 30,
        height: 40,
        marginTop: 20,
        resizeMode: 'contain'
    },
    goback: {
        color: '#FFF'
    },
    touchableBack: {

    },
    title: {
        fontSize: 28,
        fontWeight: "100",
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        color: "#FFF",
        textAlign: 'center',
        marginTop: 20
    },
    menuIcon: {
        alignSelf: 'flex-start',
        width: 30,
        height: 40,
        marginTop: 20,
        resizeMode: 'contain',
        marginLeft: 20
    },
    searchIcon: {
        alignSelf: 'flex-start',
        width: 18,
        height: 26,
        marginTop: 26,
        resizeMode: 'contain',
        marginRight: 20,
    },
});

export default SmartBrief;