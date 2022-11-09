import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(146, 151, 196)',
  },
  textInput: {
    height: 40,
    width: 150,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 5,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
});
