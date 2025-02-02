import React, { useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import {
    Link
} from "react-router-native";

import StepOne from '../../assets/img/tutorial/1.png'
import StepTwo from '../../assets/img/tutorial/2.png'
import StepThree from '../../assets/img/tutorial/3.png'
import StepFour from '../../assets/img/tutorial/4.png'
import StepFive from '../../assets/img/tutorial/5.png'
import StepSixth from '../../assets/img/tutorial/6.png'

import SwipeImage from '../../assets/img/tutorial/swipe-right.gif'

import { lang as TutorialLang } from '../../language/tutorial';
import Lottie from '../../components/utils/Lottie';

import Swiper from 'react-native-swiper/src';

import styles from './styles'
import * as Config from '../../data/configApi';
import Home from '../Home';


export default function Tutorial(props) {

    const LottieSource = require('../../assets/lottie/swipe-right.json');

    useEffect( () => {
        Config.getUsername().then( res => {
            if (res[0]?.username) return <Home username={res} lang={props.lang} />
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return(
        <>
        <Lottie 
            LottieSource={LottieSource} ImageSource={SwipeImage}
            LottieStyle={{position: 'absolute', height: 80, marginTop: 280, marginLeft: 80, opacity: .8}}
            ImageStyle={{position: 'absolute', height: 80, marginTop: 280, marginLeft: 80, opacity: .8}}
        />
        <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} loop={false}>
                
            <View style={styles.slide}>
                <Image source={StepOne} resizeMode="contain" style={styles.image}/>
                <Text style={styles.title}>{TutorialLang[props.lang].Step1Header}</Text>
                <Text style={styles.text}>{TutorialLang[props.lang].Step1Content()}</Text>
            </View>

            <View style={styles.slideOdd}>
                <Image source={StepTwo} resizeMode="contain" style={styles.image}/>
                <Text style={styles.title}>{TutorialLang[props.lang].Step2Header}</Text>
                <Text style={styles.text}>{TutorialLang[props.lang].Step2Content}</Text>
            </View>

            <View style={styles.slide}>
                <Image source={StepThree} resizeMode="contain" style={styles.image}/>
                <Text style={styles.title}>{TutorialLang[props.lang].Step3Header}</Text>
                <Text style={styles.text}>{TutorialLang[props.lang].Step3Content()}</Text>
            </View>

            <View style={styles.slideOdd}>
                <Image source={StepFour} resizeMode="contain" style={styles.image}/>
                <Text style={styles.title}>{TutorialLang[props.lang].Step4Header}</Text>
                <Text style={styles.text}>{TutorialLang[props.lang].Step4Content()}</Text>
            </View>

            <View style={styles.slide}>
                <Image source={StepFive} resizeMode="contain" style={styles.image}/>
                <Text style={styles.title}>{TutorialLang[props.lang].Step5Header}</Text>
                <Text style={styles.text}>{TutorialLang[props.lang].Step5Content}</Text>
            </View>

            <View style={styles.slideOdd}>
                <Image source={StepSixth} resizeMode="contain" style={styles.image}/>
                <Text style={styles.title}>{TutorialLang[props.lang].LastStepHeader}</Text>
                <View style={styles.buttonContainer}>
                <Link to="/username" component={TouchableOpacity}
                        style={styles.button}
                        onPress={(e) => {Config.SawTutorial(true) }}
                        activeOpacity = { .5 }
                    >
                        <Text style={styles.buttonText}> {TutorialLang[props.lang].LastStepButton} </Text>
                    </Link>
                </View>
            </View>


        </Swiper>
        </>
    );
};