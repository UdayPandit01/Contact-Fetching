import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet, PermissionsAndroid,Image} from 'react-native';
import  Contact  from 'react-native-contacts';
//   

const Clist = () => {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    getPermission();
  }, []);
 

  // function to fetch contactList from device contacts
  const getPermission=()=>{
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    )
      .then(response => {
        if(response == 'granted') {

          Contact.getAll()
          .then((contacts) => {
            // work with contacts
            setContacts(contacts)
            console.log(contacts)
          })
          .catch((e) => {
            console.log(e)
          })
        }
      }
      )
  }

 // function to show first letter of name as contact icon
  const renderItem=({item})=>{

    const firstname=item.givenName
    const first=firstname.charAt(0).toUpperCase();
    const sirname=item.familyName
    const second=sirname.charAt(0).toUpperCase();


    // adding different colors at different contact icons
    let colors = ['#B9E9FC', '#AAE3E2', '#B3E5BE', '#ABCDEF'];
    let index = item.recordID;

    return(

      <View style={styles.ContactContainer}>   
      <View style={styles.contactInfo} >
        <View> 
          {item.hasThumbnail ? 
          (<Image style={styles.icon} source={{uri:item.thumbnailPath}}/>):
          (<View style={[styles.iconText, {backgroundColor: colors[index % colors.length]}]}> 
            <Text style={styles.NameText} >{first}{second} </Text>
          </View>)}
        </View> 

        <View style={{flex:0.9,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.NameText}>{item.displayName}</Text>
        <Text style={styles.NameText}>{item.phoneNumbers[0].number}</Text>
      </View>

        </View>
      </View>



    );
  };

  return (
<>
    <View style={styles.parent}>
    <Text style={styles.parentText}>Contacts</Text>
    </View>

    <FlatList
      data={contacts}
      renderItem={renderItem}
      // keyExtractor={keyExtractor}
      // style={styles.list}
      />
      </>
  );
};
const styles = StyleSheet.create({


  parent:{
    borderWidth:1,
    borderRadius:4,
    padding:8,
    backgroundColor:"#84C69B",
    // textAlign:'center',
    // justifyContent:'center',
    alignItems:'center',
  },

  parentText:{
    fontSize:25,
    fontWeight:'700',
    // margin:'auto',
  },

  contactInfo:{
    flexDirection:'row',
    borderWidth:1,
    paddingVertical: 5,
    margin: 5,
    marginTop:15,
    borderRadius: 10,
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center',
    backgroundColor:'#C8B6E2'
  }, 


  iconText:{
    borderWidth:1,
    borderRadius:30,
    padding:8,
    backgroundColor:'#7A86B6',
  
    // justifyContent:'flex-start',
    
  },

  NameText:{
    fontSize:15,
    fontWeight:'500',
  },
  
});
export default Clist


