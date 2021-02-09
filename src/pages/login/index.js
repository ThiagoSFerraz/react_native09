import React from "react";
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from "react-native";

import styles from './styles'

import Fundo from '../../../assets/fundo.jpg'

export default function Login() {
  return (
    <View>
        <ImageBackground style={styles.fundo} source={Fundo}>
          <View style={styles.fundoCard}>
            <View>
                <Text style={styles.titulo}>Login</Text>
            </View>

            <TextInput placeholder="Digite o email..." style={styles.input} />
            <TextInput placeholder="Digite a senha..." secureTextEntry={true} style={styles.input} />

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.texto}>
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    </View>
  );
}

