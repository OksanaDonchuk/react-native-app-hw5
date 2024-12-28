import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import CommentsList from "../components/CommentsList";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/CommentsListStyle";
const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const post = route.params?.post;

  const handleSubmit = () => {
    setComment("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri: post.photo }} style={styles.img} />
      </View>
      <CommentsList />
      <View style={styles.commentContainer}>
        <TextInput multiline placeholder="Коментувати..." />
        <TouchableOpacity style={styles.iconWrapper} onPress={handleSubmit}>
          <MaterialIcons name="arrow-upward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CommentsScreen;
