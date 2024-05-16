// import React, { useState, useRef } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function App() {
//   const camera = useRef(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();

//   const [isCapturing, setIsCapturing] = useState(false);
//   const [capturedImages, setCapturedImages] = useState([]);
//   const [showAlbum, setShowAlbum] = useState(false);

//   if (!permission) {
//     requestPermission();
//   }

//   if (!permission?.granted) {
//     return <Text>You didn't allow Camera</Text>;
//   }

//   const toggleCameraFacing = () => {
//     setType(
//       type === Camera.Constants.Type.back
//         ? Camera.Constants.Type.front
//         : Camera.Constants.Type.back
//     );
//   };

//   const takePicture = async () => {
//     if (camera.current) {
//       setIsCapturing(true);
//       try {
//         const photo = await camera.current.takePictureAsync();
//         console.log('Photo taken:', photo);
//         setCapturedImages([...capturedImages, photo.uri]); // Save the captured image URI
//       } catch (error) {
//         console.error('Failed to take picture:', error);
//       } finally {
//         setIsCapturing(false);
//       }
//     }
//   };

//   const handleShowAlbum = () => {
//     setShowAlbum(true);
//   };

//   const handleBackToCamera = () => {
//     setShowAlbum(false);
//   };

//   return (
//     <View style={styles.container}>
//       {!showAlbum ? (
//         <View style={styles.cameraContainer}>
//           <Camera style={styles.camera} type={type} ref={camera}>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//                 <Text style={styles.text}>Flip Camera</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.button, isCapturing && styles.disabledButton]}
//                 onPress={takePicture}
//                 disabled={isCapturing}>
//                 <Text style={styles.text}>Take Picture</Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//           {capturedImages.length > 0 && (
//             <TouchableOpacity style={styles.albumButton} onPress={handleShowAlbum}>
//               <Text style={styles.albumText}>View Album</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       ) : (
//         <View style={styles.albumContainer}>
//           <TouchableOpacity style={styles.backButton} onPress={handleBackToCamera}>
//             <Text style={styles.albumText}>Back to Camera</Text>
//           </TouchableOpacity>
//           <View style={styles.imageContainer}>
//             {capturedImages.map((image, index) => (
//               <Image key={index} source={{ uri: image }} style={styles.image} />
//             ))}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   cameraContainer: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 20,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },
//   text: {
//     fontSize: 18,
//     color: 'white',
//   },
//   disabledButton: {
//     opacity: 0.5,
//   },
//   imageContainer: {
//     flex: 1,
//     backgroundColor: 'black',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   image: {
//     width: '33.333%',
//     height: 150,
//     resizeMode: 'cover',
//   },
//   albumContainer: {
//     flex: 1,
//     justifyContent: 'flex-start',
//   },
//   albumButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   albumText: {
//     fontSize: 18,
//     color: 'white',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
// });
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const camera = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);
  const [showAlbum, setShowAlbum] = useState(false);

  if (!permission) {
    requestPermission();
  }

  if (!permission?.granted) {
    return <Text>You  allowed Camera</Text>;
  }

  const toggleCameraFacing = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (camera.current) {
      setIsCapturing(true);
      try {
        const photo = await camera.current.takePictureAsync();
        console.log('Photo taken:', photo);
        setCapturedImages([...capturedImages, photo.uri]); // Save the captured image URI
      } catch (error) {
        console.error('Failed to take picture:', error);
      } finally {
        setIsCapturing(false);
      }
    }
  };

  const handleShowAlbum = () => {
    setShowAlbum(true);
  };

  const handleBackToCamera = () => {
    setShowAlbum(false); // Set showAlbum to false to return to camera view
  };

  return (
    <View style={styles.container}>
      {!showAlbum ? (
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={type} ref={camera}>
            <View style={styles.buttonContainer1}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <MaterialIcons
                  name="flip-camera-android"
                  size={60}
                  color="white"
                  style={styles.cameraRotate}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, isCapturing && styles.disabledButton]}
                onPress={takePicture}
                disabled={isCapturing}>
                <MaterialCommunityIcons name="camera-iris" size={70} color="white" />
              </TouchableOpacity>
            </View>
          </Camera>
          {capturedImages.length > 0 && (
            <TouchableOpacity style={styles.albumButton} onPress={handleShowAlbum}>
              <MaterialIcons name="photo-library" size={50} color="white" />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.albumContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackToCamera}>
            <MaterialIcons name="arrow-back" size={34} color="white" />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.imageContainer}>
            {capturedImages.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.image} />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
   
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer1: {
    display: 'flex',
    flexDirection: 'row',
    position: "absolute",
    right: 150,
    bottom: 60,
  },
  button: {},
  disabledButton: {
    opacity: 0.5,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '50%',
    height: 150,
    resizeMode: 'cover',
  },
  albumContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  albumButton: {
    position: 'absolute',
    bottom: 100,
    right: 35,
    borderRadius: 5,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 30,
    borderRadius: 5,
    zIndex: 1,
  },
  cameraRotate: {
    position: "relative",
    left: -20,
    padding: 20,
    bottom: 12,
  },
});
