import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/example';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ExampleScreen extends Component {
  static navigationOptions = {
    title: 'Example',
  };

  componentWillMount() {
    const {
      exampleData,
      dispatch,
    } = this.props;

    if (!exampleData.data) {
      dispatch(fetchData());
    }
  }

  render() {
    const { exampleData, isFetching } = this.props;
console.log('----------', exampleData);
    return (
      <View style={styles.container}>
        <Text>Example Screen</Text>
        { isFetching && <Text>Loading</Text> }
        { exampleData && exampleData.map((item, i) => {
            return <View key={i} >
              <Text>name: {item.name}</Text>
              <Text>height: {item.height}</Text>
            </View>
          })
        }
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});

export default connect(
  state => ({
    exampleData: state.example.get('data'),
    isFetching: state.example.get('isFetching'),
  }),
)(ExampleScreen);
