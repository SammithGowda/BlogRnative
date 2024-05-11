import React, { useState } from "react";
import { Text, StyleSheet, TextInput, Button, View } from "react-native";
const BloFormPage = ({ onSubmit, initValues }) => {
    const [title, setTitle] = useState(initValues.title)
    const [content, setContent] = useState(initValues.content)

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
                title='Save Post'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
}

BloFormPage.defaultProps = {
    initValues: {
        title: "",
        content: "",
    }
}
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

export default BloFormPage;