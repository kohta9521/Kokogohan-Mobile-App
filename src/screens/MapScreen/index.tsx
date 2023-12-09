import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Modal from 'react-native-modal';

const MapScreen = () => {
  const initialRegion = {
    latitude: 35.6252,
    longitude: 139.7238,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const buildingLocation = {
    latitude: 35.62775515070043,
    longitude: 139.72291768088752,
  };

  const [selectedPin, setSelectedPin] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMarkerPress = (pin) => {
    setSelectedPin(pin);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={buildingLocation}
          title="五反田不二越ビル"
          onPress={() => handleMarkerPress(buildingLocation)}
        />
      </MapView>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          {selectedPin && (
            <View>
              <Text>Details for  sample restaurant</Text>
            </View>
          )}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '70%',
  },
  modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default MapScreen;