import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation(); // Obtener la función de navegación

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
  }

  const handleRegister = () => {
    navigation.navigate('YourComponent'); // Corregir el nombre de la pantalla de registro
  }
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textoContainer}>
        <Text style={styles.textoEstilo}>CarsPit</Text>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none" 
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} 
        />
        
        <Button title="Iniciar Sesión" onPress={handleLogin} style={styles.button} />
        

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupLink} onPress={handleRegister}>
          <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  textoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textoEstilo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginBottom: 10,
  },
  forgotPassword: {
    marginBottom: 10,
  },
  signupLink: {
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
  },
});

export default LoginScreen;
