import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    view: {
        height: hp('100%'),
        paddingBottom: 40,
        flex: 1
    },
    logo: {
        width: 120,
        height: undefined,
        marginVertical: 20,
        opacity: 0.8,
        marginBottom: 40,
        resizeMode: "center",
        aspectRatio: 1
    },
    button: {
        width: 235,
        marginBottom: 25,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    leaveButton: {
        width: 235,
        marginTop: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        marginHorizontal: 5,
        marginBottom: 20
    },
    RectoCard: {
        width: wp('21%'),
        height: 0,
        backgroundColor: '#C3C3CF',
        borderRadius: 20,
        borderColor: '#858593',
        borderWidth: 1,
        aspectRatio: 1,
        opacity: .8,
        marginHorizontal: 5,
        marginVertical: 5
    },
    PlayingCard: {
        width: wp('21%'),
        height: 0,
        borderRadius: 20,
        aspectRatio: 1,
        borderColor: '#68FF5C',
        borderWidth: 1,
        opacity: .8,
        marginHorizontal: 5,
        marginVertical: 5
    },
    VersoCard: {
        width: wp('21%'),
        height: 0,
        borderRadius: 20,
        opacity: .8,
        marginHorizontal: 5,
        aspectRatio: 1,
        marginVertical: 5
    },
    IconCard: {
        marginTop: 23
    },
    viewGame: {
        marginTop: 10,
        width: wp('95%'),
        height: hp('55%'),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    buttonViewPlay: {
        flexDirection: 'row',
        width: wp('100%'),
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10
    },
    playButtons: {
        alignContent: 'center',
        textAlign: 'center',
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    overlay: {
        borderRadius: 20,
        paddingHorizontal: 45,
        paddingVertical: 30,
        alignItems: 'center',
    },
    headerOverlay: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textOverlay: {
        width: 190,
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },


    /// Help page related
    viewHelpPage: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 20,
        width: wp('100%'),
        paddingBottom: 20
    },
    leaveButtonHelpPage: {
        width: 235,
        backgroundColor: 'red',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 5,
    },
    helpHead: {
        marginVertical: 25,
        width: 250,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        color: '#4954FF',
        alignSelf: 'center'
    },
    helpStepHead: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: 20,
        color: '#1C2068',
        textTransform: 'uppercase'
    },
    helpStep: {
        marginHorizontal: 25,
        marginBottom: 40,
        width: 290,
    },
    helpQuestionMark: {
        position: 'absolute',
        width: 450,
        opacity: .3,
        zIndex: -1
    },
});
