import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context } from "../context/blogContext"
const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { addBlogPost } = useContext(Context)
    return (
        <View>
            <Text style={styles.lable}>Enter Title</Text>
            <TextInput
                style={styles.title}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.lable}>Enter Content</Text>
            <TextInput
                style={styles.title}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title='Add Post'
                onPress={() => addBlogPost(title, content,()=>{
                    navigation.navigate("Index")
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        margin: 5

    },
    lable: {
        fontSize: 24,
        margin: 5
    }

});

export default CreateScreen;
