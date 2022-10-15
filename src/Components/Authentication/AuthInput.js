import React, {useState, useRef} from 'react';
import {Input, Icon} from '@ui-kitten/components';
import {Platform, Pressable, View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const AuthInput = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);
  const [emailBorderColor, setEmailBorderColor] = useState('#c3c3c3');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#c3c3c3');
  const [confirmBorderColor, setConfirmBorderColor] = useState('#c3c3c3');
  const emailRef = useRef();

  const toggleSecureEntry1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const toggleSecureEntry2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };

  const renderIcon1 = props => (
    <Pressable onPress={toggleSecureEntry1} style={styles.accessoryLeftView}>
      <Entypo
        {...props}
        name={secureTextEntry1 ? 'eye-with-line' : 'eye'}
        size={hp(2.5)}
        style={{color: passwordBorderColor}}
      />
    </Pressable>
  );

  const renderIcon2 = props => (
    <Pressable onPress={toggleSecureEntry2} style={styles.accessoryLeftView}>
      <Entypo
        {...props}
        name={secureTextEntry2 ? 'eye-with-line' : 'eye'}
        size={hp(2.5)}
        style={{color: confirmBorderColor}}
      />
    </Pressable>
  );

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <Input
            placeholder="Email"
            value={email}
            ref={emailRef}
            onFocus={() => setEmailBorderColor('#fb7ca0')}
            onBlur={() => setEmailBorderColor('#c3c3c3')}
            style={[styles.inputStyle, {borderColor: emailBorderColor}]}
            accessoryLeft={props => (
              <View style={styles.accessoryLeftView}>
                <Entypo
                  {...props}
                  name={'email'}
                  size={hp(2.5)}
                  style={{color: emailBorderColor}}
                />
              </View>
            )}
            textStyle={styles.inputTextStyle}
            onChangeText={nextValue => setEmail(nextValue)}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            value={password}
            onFocus={() => setPasswordBorderColor('#fb7ca0')}
            onBlur={() => setPasswordBorderColor('#c3c3c3')}
            style={[styles.inputStyle, {borderColor: passwordBorderColor}]}
            textStyle={styles.inputTextStyle}
            placeholder="Password"
            accessoryLeft={renderIcon1}
            secureTextEntry={secureTextEntry1}
            onChangeText={nextValue => setPassword(nextValue)}
            caption={props.signup ? 'Should contain at least 8 characters' : ''}
            captionIcon={props.signup ? AlertIcon : null}
          />
        </View>
        {props.signup && (
          <View style={styles.inputView}>
            <Input
              value={confirmPassword}
              onFocus={() => setConfirmBorderColor('#fb7ca0')}
              onBlur={() => setConfirmBorderColor('#c3c3c3')}
              style={[styles.inputStyle, {borderColor: confirmBorderColor}]}
              textStyle={styles.inputTextStyle}
              placeholder="Confirm Password"
              accessoryLeft={renderIcon2}
              secureTextEntry={secureTextEntry2}
              onChangeText={nextValue => setConfirmPassword(nextValue)}
              caption="Should contain at least 8 characters"
              captionIcon={AlertIcon}
            />
          </View>
        )}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  inputView: {flex: 1, display: 'flex', justifyContent: 'center'},
  inputStyle: {
    borderRadius: hp(1.5),
  },
  accessoryLeftView: {
    height: hp(5),
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(1),
  },
  inputTextStyle: {
    fontSize: Platform.OS === 'android' ? hp(1.95) : hp(1.85),
    paddingVertical: hp(0.5),
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
  },
});

export default AuthInput;
