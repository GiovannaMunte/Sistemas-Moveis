import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';

export default function UsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticação
    if (nome && senha) {
      // Se nome e senha estiverem preenchidos, navega para a tela Cliente
      navigation.navigate('Cliente');
    } else {
      // Aqui você pode adicionar um alerta para informar o usuário que os campos são obrigatórios
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Login de Usuário" />
      </Appbar.Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 70 }}>
        <Text style={{ marginBottom: 50, fontSize: 35 }}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={{ width: '35%', marginBottom: 30 }}
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry
          style={{ width: '35%', marginBottom: 30 }}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={{ marginTop: 10, width: '30%', paddingVertical: 10, }}
          
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
