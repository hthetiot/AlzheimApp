import React from 'react';
import { View, Text, Platform } from 'react-native';
import {
  Button,
  Image
} from 'react-native-elements';
import Lottie from '../../../components/utils/Lottie';

import SuccessImage from '../../../assets/img/home/addedUser.gif'

import styles from '../styles';

import { lang as InterfaceLang } from '../../../language/interface';

export default function Success(props) {

  const LottieSource = require('../../../assets/img/home/addedUser.json');

  return (
    <View>
        <Lottie
          LottieSource={LottieSource}
          ImageSource={SuccessImage}
          LottieStyle={styles.imageSuccess}
          ImageStyle={styles.imageSuccess}
          loop={false} autoPlay={true} />
        <Text style={styles.successPageTitle}>{props.edit === false ? InterfaceLang[props.lang].CreatedPerson : InterfaceLang[props.lang].EditedPerson}</Text>
        <Button title={InterfaceLang[props.lang].ReturnToForm}
            style={{backgroundColor: 'grey'}}
            onPress={(e) => { props.close() }}/>
    </View>
  );
};