import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/blogContext';
import { Entypo } from "@expo/vector-icons"
const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context)
    const Bpost = state.find((item) => item.id == navigation.getParam("id"))
    return (
        <View>
            <Text>{Bpost.title}</Text>
            <Text>{Bpost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("edit",{id:navigation.getParam("id")})}>
                <Entypo name='edit' size={30} />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({});

export default ShowScreen;
