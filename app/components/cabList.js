import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';

const CabList = ({ navigation }) => {
  const [cabs, setCabs] = useState([]);
  const [defaultLocation, setDefaultLocation] = useState('Air India Colony, Santacruz, Mumbai, Maharashtra');
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const fetchCabData = async () => {
      try {
        const response = await axios.get('https://662791b9b625bf088c08d532.mockapi.io/cabs');
        // Sort cabs array in ascending order based on price
        const sortedCabs = response.data.sort((a, b) => a.price - b.price);
        setCabs(sortedCabs);
      } catch (error) {
        console.error('Error fetching cab data:', error);
      }
    };

    fetchCabData();
  }, []);

  const handleCabPress = (cab) => {
    navigation.navigate('CabDetails', { cab });
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationBar}>
        <TextInput
          style={styles.locationInput}
          value={defaultLocation}
          onChangeText={setDefaultLocation}
          placeholder="Enter your location"
        />
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 19.0760, // Latitude of Mumbai
            longitude: 72.8777, // Longitude of Mumbai
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 19.0740, longitude: 72.8700}} // Default location coordinates
            title="Default Location"
            description="Your specified location"
          />

          {cabs.map((cab) => (
            <Marker
              key={cab.id}
              coordinate={{
                latitude: cab.location.latitude,
                longitude: cab.location.longitude,
              }}
              title={cab.driverName}
              description={`Model: ${cab.model}, Price: ${cab.price}`}
            >
              <Image
                source={require('./car-icon.png')} 
                style={{ width: 50, height: 70, objectFit: "contain" }} 
              />
            </Marker>
          ))}
        </MapView>
      </View>

      <FlatList
        data={cabs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cabItem} onPress={() => handleCabPress(item)}>
            <View style={styles.cabItemContainer}>
              <Image source={{ uri: item.cabImage }} style={styles.cabImage} />
              <View style={{ gap: 2 }}>
                <Text style={styles.cabModel}>{item.model}</Text>
                <Text>- {item.time}</Text>
              </View>
              <View>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        style={styles.cabList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationBar: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 5,
    borderColor: "#087c59",
    borderWidth: 2
  },
  locationInput: {
    fontSize: 16,
  },
  mapContainer: {
    height: "50%",
    width: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  cabList: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 15,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#087c59",
    borderRadius: 5,
  },
  cabItemContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  cabImage: {
    width: 80,
    height: 60,
    marginRight: 16,
  },
  cabModel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#79bba8",
    fontSize: 20,
    borderRadius: 5,
    color: "#fff"
  },
});

export default CabList;
