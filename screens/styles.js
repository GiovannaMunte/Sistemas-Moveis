import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    padding: 300,
    backgroundColor: '#f5f5f5', // Cor de fundo leve
  },
  input: {
    width: '30%',
    marginBottom: 0,
    backgroundColor: '#fff', // Fundo branco para campos de entrada
  },
  button: {
    marginTop: 15,
    paddingVertical: 5,
    width: '30%',
    borderRadius: 30, // Canto arredondado para botões
  },
  header: {
    backgroundColor: '#6200ee', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 300,
  },
  label: {
    fontSize: 5,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  photoContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  photo: {
    width: 115,
    height: 115,
    borderRadius: 50, // Foto circular
    backgroundColor: '#ddd', // Cor de fundo para área de foto
  },
});

