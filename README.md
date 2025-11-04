# Comandos Úteis

- npx create-expo-app@latest --template // criar o projeto React Native com Expo

# Comandos Expo

- npm start (roda o projeto no expo)
- npx expo start --tunnel

# Comandos git

- git config --global user.name "rafael-staine"
- git config --global user.email "rafael.staine@aluno.ifsp.edu.br"

- O que é um componente do React

- Todo componente é uma função e começa com letra maiuscula

- A estilização dos componentes podem ser feitas em css js

- Os componente do import { View, Text, StyleSheet }são do react native

- componente // É uma parte que você pode separar

- React é um framework baseado em componentes, voce pode pegar o layout e separar em partes

- existe imagem no ..., sim mas são limitada, então é melhor pegar do expo-image 

### Tipos de navegação

##### Tipos de navegação com o expo router 

- Stack "empilhar"
- Tabs ""
- Modal
- Drawer 

###

- Hooks // São funções e recursos auxiliares que fazem parte da bibioteca react // todos os hooks começam com a palavra (use) só posso usar os hooks dentro dos componentes antes do return dos componentes (return)

useEffect é um hook que dispara um efeito/função sempre que o componente é montado ou algum estado que esta sendo observado é alterado

# Estudos para prova

- O que é React Native
    - uma biblioteca (parecida com framework ) para desenvolver um app

- O que é Expo
    - framework do node para desenvolver um app

- Diferença entre as bibliotecas "react", "react-native" e "expo"?
    - React: biblioteca JavaScript para criar interfaces de usuário na web.
    - React Native: framework que usa React para desenvolver aplicativos móveis nativos (Android e iOS).
    - Expo: ferramenta que facilita o desenvolvimento com React Native, oferecendo ambiente pronto e recursos extras sem precisar configurar nativo manualmente.

- Componente básicos do react-native
    - View, Text, Stylesheet, TextImput, Image

- Criação de um projeto Expo
    - npx create-expo-app@latest --template // cria o projeto React native com o Expo

- Como testar o App na web (Navegador)
    - No navegador usando o expo tunel e o app expo go

- Para que servem os componentes
    - Organização e facilidade de manutenção em um unico arquivo

- Como criar um componente
    - cria uma pasta "component " cria o arquivo card.js cria um export default function e um return para retornar o componente, em formato JSX, e tamebm tem o props (propriedades do componente) para especificar parametros.,

- Como estilizar um componente
    - usa o stylesheet que vem do REACT NATIVE, para estilizar o componente camel case, usando o css IN (No javacript) js, inspirado no css da web.

- O que são propriedades dos componentes
    - São informações que vc pode passar pro componente smp que estiver alguma caracteristica diferente

- O que são propriedades dos componentes
    - São caracteristicas que pode diferenciar algum componente de outro

- O estilo no React Native é igual do CSS da Web
    - É inspirado mas NÃO é igual

- Navegação com Expo Router (Stack, Tab, Modal, drawer)
    - Conjuto de ferramentas para criar a navegação do app, são definidos no arquivo _layout.js
        - Stack = empilha as páginas do app
        - Tab = barra de navegação na parte inferior do app
        - Modal = aparece por cima da tela que você está no app
        - Drawer = aparece na lateral do app

- O que são Hooks
    - São funções do react cor que sempre começam com "use" e são usados dentro dos componentes e antes do retrun, algumas dos pricipais hooks estão dentro do react cor mas tambem podem estar em outras bibliotecas e eu posso criar meu proprio hook 

- useState
    - quando um componente filho precisa usar um estado que está no pai

- useEffect
    - É uma função que dispara outra função quando o componente é exibido ou quando algum estado que ele esta observando é alterado

- Passagem de state pai para filho (Prop Drilling)
    - ultilizado quando mais de um componente precisa mecher em um estado