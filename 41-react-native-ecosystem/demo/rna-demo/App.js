import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import * as Expo from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts:[],
      permission:null,
    };
  }

  async componentDidMount() {
    await this.checkPermissionAsync();
  }

  checkPermissionAsync = async () => {
    const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    this.setState({ permission: status === 'granted' });
  };

  showContacts = () => {

    Expo.Contacts.getContactsAsync({
      fields: [Expo.Contacts.PHONE_NUMBERS]
    })
    .then(rawContacts => {
      let contacts = rawContacts.data.map( contact => {
        contact.key = contact.id;
        return contact;
      })
      this.setState({contacts});
    })
    .catch(console.error);

  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={this.showContacts}
          title="Show Contacts"
        />

        <View style={styles.section}>
          <Text>Mapped ...</Text>
          {
            this.state.contacts && this.state.contacts.map( (contact,i) =>
              <Text key={i}>{contact.name}</Text>
            )
          }
        </View>

        <View style={styles.section}>
          <Text>FlatList ...</Text>
          <FlatList
            data={this.state.contacts}
            renderItem={({item}) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    margin: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    marginTop: 25,
  },
});
