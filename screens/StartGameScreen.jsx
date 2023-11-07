import { TextInput, View, StyleSheet } from 'react-native';
import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {

    const [mobile, setMobile] = useState('');

    const numberInputHandler = (inputText) => {
        setMobile(inputText.replace(/[^0-9]/g, ''));
    };

    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                secureTextEntry={false}
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={mobile}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor:'#72063c',
        borderRadius:8,
        elevation: 8,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 0,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight:'bold',
        textAlign: "center",
    },
})