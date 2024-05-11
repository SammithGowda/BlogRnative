import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from "../context/blogContext"
import BloFormPage from '../component/blogForm';
const EditScreen = ({ navigation }) => {
    const id = navigation.getParam("id")
    const { state, editBlogPost } = useContext(Context)
    const bPost = state.find((item) => item.id === id)

    const [title, setTitle] = useState(bPost.title)
    const [content, setContent] = useState(bPost.content)

    return (
        <BloFormPage
            initValues={{ title: bPost.title, content: bPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content,()=>navigation.pop())
            }}

        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;
