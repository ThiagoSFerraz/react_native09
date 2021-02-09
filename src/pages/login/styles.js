import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    fundo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#962bff'
    },
    titulo:{
        color: "black",
        fontSize: 32,
        fontWeight: 'bold',

    },
    input: {
        backgroundColor: "white",
        width: "80%",
        margin: 15,
        padding: 5,
        paddingLeft: 5,
        borderRadius: 50,
        borderColor: '#e5e5e5',
        borderWidth: 0.5
    },
    btn:{
        marginTop: 10,
        borderRadius: 250,
        height: 50,
        width: 150,
        backgroundColor: "#f5cb42",
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    fundoCard: {
        width: 350,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
        shadowOpacity: 100,
        borderRadius: 5
    }
})

export default styles