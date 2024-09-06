import {
    Image,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Card, TextInput } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

function SignUpScreen() {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../Images/FoxLogo.png")}
                        style={styles.mainImage}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleLabel}>CunningCarat</Text>
                </View>
                <View style={styles.mainContainer}>
                    <Card style={styles.subContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require("../Images/Userplus.png")}
                                style={styles.userImage}
                            />
                        </View>
                        <Text style={styles.emailLabel}> Email </Text>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#AFAFAF"
                            style={styles.inputEmailAddress}
                            mode="outlined"
                            theme={{ roundness: 20 }}
                        />
                        <Text style={styles.passwordLabel}> Password </Text>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#AFAFAF"
                            style={styles.inputPassword}
                            secureTextEntry
                            mode="outlined"
                            theme={{ roundness: 20 }}
                        />
                        <Text style={styles.passwordLabel}>
                            {" "}
                            Confirm Password{" "}
                        </Text>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#AFAFAF"
                            style={styles.inputConfirmPassword}
                            secureTextEntry
                            mode="outlined"
                            theme={{ roundness: 20 }}
                        />
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => console.log("Sign Up pressed")}
                        >
                            <Text style={styles.signInLabel}> Sign Up </Text>
                        </TouchableOpacity>
                        <View style={styles.accountText}>
                            <TouchableOpacity
                                    onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={{ textDecorationLine: "underline" }}>
                                    Already have an account?
                                        <Text style={styles.SignInLabel}>
                                            {" "}
                                            Sign In here
                                        </Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    mainImage: {
        width: 120,
        height: 150,
    },
    userImage: {
        width: 50,
        height: 50,
    },
    SignInLabel: {
        color: "#FCD12A",
    },
    accountText: {
        alignItems: "center",
    },
    signInLabel: {
        fontSize: 17,
        color: "white",
    },
    submitButton: {
        marginVertical: 20,
        backgroundColor: "#424242",
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: "center",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    titleContainer: {
        alignItems: "center",
    },
    titleLabel: {
        fontSize: 30,
        fontWeight: "700",
        marginVertical: -50,
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: 40,
    },
    mainContainer: {
        marginTop: 30,
        padding: 20,
    },
    subContainer: {
        backgroundColor: "#F9F9F9",
        padding: 35,
        borderRadius: 25,
    },
    emailLabel: {
        fontSize: 17,
        marginTop: 15,
        marginBottom: 5,
    },
    inputEmailAddress: {
        marginBottom: 10,
        backgroundColor: "#F9F9F9",
    },
    passwordLabel: {
        fontSize: 17,
        marginBottom: 5,
    },
    inputPassword: {
        marginBottom: 10,
        backgroundColor: "#F9F9F9",
    },
    inputConfirmPassword: {
        backgroundColor: "#F9F9F9",
    },
    container: {
        flex: 1,
        backgroundColor: "#FFDC2E",
    },
    circle: {
        position: "absolute",
        top: "-10%",
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        width: 95,
        height: 95,
        borderRadius: 50,
        backgroundColor: "#ACACAC",
        alignItems: "center",
        justifyContent: "center",
    },
});