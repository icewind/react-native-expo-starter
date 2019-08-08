import { IConnectedComponent } from '@app/stores';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class HomeScreen extends React.Component<IConnectedComponent> {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    const { updateExampleStateValue, exampleStateValue } = this.props.store;
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text style={{ fontSize: 40 }}>{exampleStateValue ? '🙂' : '😎'}</Text>
          <TouchableOpacity onPress={updateExampleStateValue} style={{ borderColor: 'blue', marginTop: 20 }}>
            <Text>Toggle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default inject('store')(observer(HomeScreen));
