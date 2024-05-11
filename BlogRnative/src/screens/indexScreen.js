import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/blogContext";

const IndexScreen = () => {
    const {data,updateBlogPost} = useContext(BlogContext)
    return (
        <View>
            <Text>Hi IndexScreen not welcome</Text>
            <Button title="Add Post" onPress={updateBlogPost}/>
            <FlatList
                data={data}
                keyExtractor={(post) => post.title}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen