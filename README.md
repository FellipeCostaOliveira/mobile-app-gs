# 👁️ SentinelEye

Aplicativo mobile desenvolvido com **React Native e Expo**, com foco na construção de uma solução moderna de monitoramento e visualização de informações.

O **SentinelEye** utiliza uma interface com identidade visual tecnológica, baseada em tons escuros e elementos de destaque para facilitar a visualização de informações e possíveis alertas.



---

## 📱 Sobre o projeto

O SentinelEye é um projeto mobile desenvolvido utilizando o ecossistema **React Native + Expo**.

A proposta do projeto é oferecer uma aplicação com uma interface moderna e preparada para trabalhar com informações de monitoramento, utilizando recursos como mapas, requisições HTTP, gerenciamento de estado e componentes visuais interativos.

O projeto foi estruturado pensando em uma aplicação escalável, permitindo a evolução futura da interface e a integração com APIs e serviços externos.

---

## 🚀 Tecnologias utilizadas

### Mobile

* **React Native**
* **Expo**
* **Expo Router**
* **JavaScript**
* **React 19**

### Interface

* **NativeWind**
* **Tailwind CSS**
* **Expo Linear Gradient**
* **Expo Vector Icons**
* **React Native Gesture Handler**
* **React Native Reanimated**
* **React Native Safe Area Context**

### Dados e integração

* **Axios** — consumo de APIs REST
* **Zustand** — gerenciamento de estado global
* **React Native Maps** — integração com mapas

### Ferramentas

* **Node.js**
* **NPM**
* **Git**
* **GitHub**

---

## 🎨 Identidade visual

O projeto utiliza uma identidade visual inspirada em sistemas tecnológicos e de monitoramento.

A paleta principal utiliza:

* 🌑 Fundo escuro — `#020b18`
* 🔵 Azul de destaque — `#378ADD`
* 🟦 Azul secundário — `#185FA5`
* 🟢 Alerta positivo — `#1D9E75`
* 🟡 Alerta — `#EF9F27`
* 🔴 Alerta crítico — `#E24B4A`

Essa combinação proporciona uma interface com aparência tecnológica e facilita a diferenciação visual entre diferentes níveis de informação e alertas.

---

## 📂 Estrutura do projeto

```text
SentinelEye/
├── assets/
│   ├── android-icon-background.png
│   ├── android-icon-foreground.png
│   ├── android-icon-monochrome.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
│
├── .claude/
│   └── settings.json
│
├── App.js
├── index.ts
├── app.json
├── babel.config.js
├── global.css
├── tailwind.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
└── LICENSE
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/)
* NPM
* Expo CLI ou utilização do Expo via `npx`
* Android Studio para execução em Android, caso desejado
* Xcode para execução em iOS, caso esteja utilizando macOS

---

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/SentinelEye.git
```

Entre na pasta:

```bash
cd SentinelEye
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o projeto

Para iniciar o servidor de desenvolvimento do Expo:

```bash
npm start
```

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Web

```bash
npm run web
```

Depois de iniciar o projeto, o Expo disponibilizará as opções para executar a aplicação em um dispositivo físico, emulador ou navegador.

---

## 🗺️ Principais bibliotecas

### Axios

Utilizado para possibilitar a comunicação da aplicação com APIs externas.

```javascript
import axios from 'axios';
```

### Zustand

Utilizado para gerenciamento de estado da aplicação.

```javascript
import { create } from 'zustand';
```

### React Native Maps

Biblioteca preparada para funcionalidades relacionadas a mapas e localização.

```javascript
import MapView from 'react-native-maps';
```

### NativeWind

Permite utilizar uma abordagem baseada em Tailwind CSS para estilização de componentes React Native.

---

## 🔮 Próximos passos

Algumas evoluções planejadas para o projeto incluem:

* [ ] Desenvolvimento completo das telas da aplicação
* [ ] Implementação do sistema de monitoramento
* [ ] Integração com API
* [ ] Implementação de autenticação
* [ ] Gerenciamento de usuários
* [ ] Integração com mapas
* [ ] Sistema de alertas
* [ ] Dashboard de informações
* [ ] Gerenciamento de estado global
* [ ] Melhorias de acessibilidade
* [ ] Testes automatizados
* [ ] Deploy da aplicação

---

## 🧑‍💻 Desenvolvimento

Projeto desenvolvido como parte de estudos e desenvolvimento prático utilizando tecnologias modernas de desenvolvimento mobile.

O objetivo é aplicar conceitos de:

* Desenvolvimento de aplicações mobile
* Consumo de APIs
* Gerenciamento de estado
* Arquitetura de aplicações
* UI/UX
* Integração com serviços externos
* Desenvolvimento utilizando React Native

---

## 📄 Licença

Este projeto está disponível sob a licença definida no arquivo [`LICENSE`](./LICENSE).

---

## ⭐ Contribuição

Contribuições são bem-vindas!

Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua alteração

```bash
git checkout -b feature/minha-feature
```

3. Faça suas alterações
4. Commit:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie para o GitHub:

```bash
git push origin feature/minha-feature
```

6. Abra um Pull Request

---

## 👁️ SentinelEye

**Monitoramento. Tecnologia. Informação.**

Projeto desenvolvido com ❤️ utilizando **React Native + Expo**.
