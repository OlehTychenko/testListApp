import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Home} from './src/screens';
import {store} from './src/store/store';
import {styles} from './style';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
