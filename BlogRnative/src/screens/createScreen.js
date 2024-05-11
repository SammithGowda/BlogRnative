import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from "../context/blogContext"
import BloFormPage from '../component/blogForm';
const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context)
    return (
        <BloFormPage onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.navigate("Index"));
        }} />
    );
};



const styles = StyleSheet.create({});

export default CreateScreen;
