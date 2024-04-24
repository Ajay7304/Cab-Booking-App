import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const CabDetailsScreen = ({ route }) => {
  const { cab } = route.params;
  const { driverName, monthsWorked, trips, price, model, cabNumber, rating, time, driverImage, gender } =
    cab;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: driverImage }} style={styles.driverImage} />
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 3 }}>
          {gender === 'male' ? <Ionicons name="male" size={18} color="#79bba8" /> : <Ionicons name="female" size={18} color="#79bba8" />}
          <Text style={styles.driverName}>{driverName}</Text>
        </View>
      </View>

      <View style={styles.ratingContainer}>
        {/* Rating */}
        <View style={{ alignItems: 'center', gap: 2 }}>
          <AntDesign name="star" size={24} style={styles.icons} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{rating}</Text>
          <Text style={{ color: "#666967" }}>Rating</Text>
        </View>

        {/* Trips */}
        <View style={{ alignItems: 'center', gap: 2 }}>
          <FontAwesome5 name="car" size={24} style={styles.icons} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{trips}</Text>
          <Text style={{ color: "#666967" }}>Trips</Text>
        </View>

        {/* Months Worked */}
        <View style={{ alignItems: 'center', gap: 2 }}>
          <Ionicons name="time-outline" size={24} style={styles.icons} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{monthsWorked}</Text>
          <Text style={{ color: "#666967" }}>Months</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        {/* Cab Details */}
        <View>
          <Text style={styles.detailsContainerLeft}>Cab Model:</Text>
          <Text style={styles.detailsContainerLeft}>Cab Number:</Text>
          <Text style={styles.detailsContainerLeft}>Time:</Text>
          <Text style={styles.detailsContainerLeft}>Trip Cost:</Text>
        </View>

        <View>
          <Text style={styles.detailsContainerRight}>{model}</Text>
          <Text style={styles.detailsContainerRight}>{cabNumber}</Text>
          <Text style={styles.detailsContainerRight}>{time}</Text>
          <Text style={styles.detailsContainerRight}>{price}</Text>
        </View>
      </View>

      {/* Contact Buttons */}
      <View style={styles.contact}>
        <TouchableOpacity>
          <Ionicons name="call-outline" size={24} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="message1" size={24} style={styles.icons} />
        </TouchableOpacity>
      </View>

      {/* Book Button */}
      <TouchableOpacity style={styles.book}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: "#fff" }}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#f1f5f4",
    gap: 20
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 5
  },
  ratingContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailsContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailsContainerLeft: {
    fontSize: 18,
    color: "#a2a3a2",
  },
  detailsContainerRight: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'right'
  },
  contact: {
    marginTop: 20,
    flexDirection: "row",
    gap: 30
  },
  book: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#04845a",
    backgroundColor: '#79bba8',
    justifyContent: 'space-around',
    borderRadius: 10,
    shadowColor: '#000',
    marginTop: 10,
    paddingVertical: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icons: {
    color: "#fff",
    backgroundColor: "#79bba8",
    padding: 10,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#04845a",
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  driverImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#067b57",
  },
  driverName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default CabDetailsScreen;
