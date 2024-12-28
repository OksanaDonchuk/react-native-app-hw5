import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/CreatePostsStyles";

const CreatePost = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);
  const [name, setName] = useState("");
  const [locationName, setLocationName] = useState("");
  const isFormValid = name && locationName;

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const locationStatus = await Location.requestForegroundPermissionsAsync();
      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(
        cameraStatus.status === "granted" &&
          locationStatus.status === "granted" &&
          mediaLibraryStatus.status === "granted"
      );
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      const asset = await MediaLibrary.createAssetAsync(photoData.uri);
      setPhoto(asset.uri);
    }
  };

  const handlePublish = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const post = {
      photo,
      name,
      locationName,
      geoLocation: location.coords,
    };
    navigation.navigate("Posts", { post });
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Запит дозволу...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>Доступ до камери чи локації заборонено</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.imageContainer}>
            <CameraView
              style={styles.imageWrapper}
              ref={(ref) => setCameraRef(ref)}
            >
              <TouchableOpacity style={styles.iconWrapper} onPress={takePhoto}>
                <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </CameraView>
            <Text style={styles.inputText}>Завантажте фото</Text>
          </View>
          <View style={styles.inputsContainer}>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Назва..."
              autoComplete="off"
              autoCapitalize="none"
              style={styles.commonInput}
            />
            <View style={styles.locationWrapper}>
              <MaterialIcons
                name="location-on"
                size={24}
                style={styles.locationIcon}
              />
              <TextInput
                value={locationName}
                onChangeText={setLocationName}
                placeholder="Місцевість..."
                autoComplete="off"
                autoCapitalize="none"
                style={[styles.commonInput, styles.locationInput]}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.submitButton,
              {
                backgroundColor: isFormValid ? "#FF6C00" : "#F6F6F6",
              },
            ]}
            onPress={isFormValid ? handlePublish : null}
            disabled={!isFormValid}
          >
            <Text
              style={{
                color: isFormValid ? "#FFFFFF" : "#BDBDBD",
              }}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;
