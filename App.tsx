import { applicationConfig } from '@app/config';
import { AppNavigator } from '@app/navigation';
import { ApplicationStore } from '@app/stores';
import { Provider } from 'mobx-react';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Sentry from 'sentry-expo';

Sentry.config(applicationConfig.sentryDSN).install();

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={ApplicationStore}>
        <>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </>
      </Provider>
    );
  }
}
