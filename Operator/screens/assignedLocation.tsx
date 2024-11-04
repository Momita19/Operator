import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const assignedLocation = () => {
  // Sample data for the list
  const dataList = [
    { id: '1', title: 'Warehouse 1' },
    { id: '2', title: 'Warehouse 2' },
    { id: '3', title: 'Warehouse 3' },
    { id: '4', title: 'Warehouse 4' },
    { id: '5', title: 'Warehouse 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
    { id: '11', title: 'Item 11' },
    { id: '12', title: 'Item 12' },
    { id: '13', title: 'Item 13' },

  ];

  return (
    <View style={styles.container}>
      {/* First View */}
      <View style={styles.viewOne}>
        <View>
            <Text style={styles.text}>Assigned Locations</Text>
        </View>
        <View>
        <FlatList
          data={dataList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item.title}</Text>
          )}
        />
        </View>
        
      </View>

      {/* Second View */}
      <View style={styles.viewTwo}>
        <Text style={styles.text}>Second View</Text>
      </View>

      {/* Third View with List */}
      <View style={styles.viewThree}>
        <Text style={styles.text}>Third View with List</Text>
        <FlatList
          data={dataList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item.title}</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:,
    // padding: 10,
  },

  viewOne: {
    flex: 0.3,
    backgroundColor: '#1D212812',
    justifyContent: 'space-around',
    // alignItems: 'center',
    display:'flex',
    flexDirection:'row',
    paddingBottom: 10,
    paddingTop: 10,
  },
  viewTwo: {
    flex: 0.5,
    backgroundColor: '#99ccff',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
  },
  viewThree: {
    flex: 2,
    backgroundColor: '#99ff99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
  },
});

export default assignedLocation;
