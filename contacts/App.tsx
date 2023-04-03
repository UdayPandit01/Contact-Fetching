// import React, {useEffect, useState} from 'react';
// import {FlatList, View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
// import  Contact  from 'react-native-contacts';
// //   

// const App = () => {
//   const [contacts, setContacts] = useState();

//   useEffect(() => {
//     getPermission();
//   }, []);

//   const getPermission=()=>{
//     PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//       {
//         'title': 'Contacts',
//         'message': 'This app would like to view your contacts.',
//         'buttonPositive': 'Please accept bare mortal'
//       }
//     )
//       .then(response => {
//         if(response == 'granted') {

//           Contact.getAll()
//           .then((contacts) => {
//             // work with contacts
//             setContacts(contacts)
//             console.log(contacts)
//           })
//           .catch((e) => {
//             console.log(e)
//           })
//         }
//       }
//       )
//   }

//   // const keyExtractor = (item, index) => {
//   //   return item.recordID;
//   //   // return item?.recordID?.toString() || index.toString();
//   // };
//   // // const renderItem = ({item, index}) => {
//   // //   return <Contact contact={item} />;
//   // // };

//   const renderItem=({item})=>{
//     return(

//       <View> 
//         <Text>{item.displayName} {item.phoneNumbers[0].number}</Text>
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={contacts}
//       renderItem={renderItem}
//       // keyExtractor={keyExtractor}
//       // style={styles.list}
//     />
//   );
// };
// const styles = StyleSheet.create({
  
// });
// export default App


import { View, Text } from 'react-native'
import React from 'react'
import Clist from './components/Clist'

const App = () => {
  return (
    <Clist/>

  )  
}

export default App