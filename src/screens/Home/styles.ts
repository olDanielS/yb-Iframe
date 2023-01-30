import {StyleSheet} from 'react-native'

export const videoHeight = 230;
export const videoPaddingSpace = 24;


export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#121214',
        justifyContent: 'center',
        padding: 24,
        
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 42
    },
    player: {
        width: '100%',
        height: videoHeight,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#FF0000",
        
    }
})