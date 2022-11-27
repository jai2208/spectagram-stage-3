import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text,View ,Image,StyleSheet, Platform, SafeAreaView} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";

import PostCard from "./PostCard";

let post = require("./temp_posts.json")



export default class Feed extends Component{

    renderItem = ({ item: post }) => {
        return <PostCard post={post} navigation={this.props.navigation} />;
    };

    keyExtractor = (item, index) => index.toString();

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView styles={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                         source = {require("../assets/logo.png")}
                         style={styles.iconImage}
                         ></Image>
                    </View>
                    <View atyle={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>SPECTAGRAM</Text>
                    </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <FlatList
                            keyExtractor={this.KeyExtractor}
                            data={post}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage:{
        width: "100%",
        height: "100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent: "center"
    },
    appTitleText:{
        color:"white",
        fontSize: RFValue(28)
    },
    cardContainer:{
        flex:0.85
    }
})