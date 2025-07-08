import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const imageWidth = deviceWidth * 0.2; // 80% of the device width

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 10
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 12,
        borderRadius: 8,
        elevation: 2,
        alignItems: 'flex-start'
    },
    image: {
        width: imageWidth,
        height: imageWidth,
        borderRadius: 8,
        marginRight: 10
    },
    title: {
        fontWeight: 'bold'
    },
    price: {
        color: '#0f6cbf',
        marginVertical: 4
    },
    actions: {
        flexDirection: 'row',
        gap: 10,        
        marginVertical:'auto'

    },
    fab: {
        backgroundColor: '#2196F3',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 25,
        left: (deviceWidth - 60) / 2,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fabIcon: {
        fontSize: 45,
        color: '#fff',
        textAlign: 'center'
    }
});