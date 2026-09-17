# Meu Portfólio

Este é o repositório do meu portfólio pessoal, onde apresento meus projetos, habilidades e experiências como desenvolvedor(a).

## 🛠️ Tecnologias utilizadas

- **JavaScript**
- HTML5
- CSS3

## ✅ Pré-requisitos

Antes de rodar o projeto, verifique se você tem o **Node.js** (que já vem com o npm) instalado no computador:

```bash
npm -v
```

Se aparecer uma mensagem como `command not found` ou `não é reconhecido como comando`, baixe e instale o Node.js pelo site oficial: [nodejs.org](https://nodejs.org)

> ⚠️ **Atenção:** os comandos `npm install` e `npm start` precisam ser executados **dentro da pasta `portfolio_principal`**, que é onde está o arquivo `package.json`. Se rodar de fora dela, vai dar erro. Pra conferir em qual pasta você está, use `pwd` (Mac/Linux) ou `cd` sozinho (Windows); pra entrar na pasta certa, use `cd portfolio_principal`.

## 🚀 Como abrir o projeto

Você pode rodar este portfólio em qualquer computador seguindo os passos abaixo:

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Abra a pasta do projeto no VS Code**
   ```bash
   cd seu-repositorio
   code .
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o projeto**
   ```bash
   npm start
   ```

Pronto! O projeto vai abrir automaticamente no navegador, rodando em um servidor local. 🎉

## 📂 Estrutura do projeto

```
portfolio_principal/
├── index.html          # Página principal (fica fora das outras pastas)
├── package.json
├── README.md
├── assets/
│   ├── icons/          # Ícones utilizados no projeto
│   ├── (imagens)
│   └── (vídeos)
├── css/                 # Arquivos CSS de cada tela
├── javascript/           # Arquivos JavaScript
└── paginas/              # Arquivos HTML de cada tela
```

## 💻 Clonando o projeto em outro computador

Se quiser rodar este portfólio em outro computador (não o que já tem o projeto), siga os passos abaixo:

1. No GitHub, entre no repositório, clique no botão verde **"Code"** e copie o link em **HTTPS**.
2. Abra o VS Code em uma pasta qualquer do computador (ex: Área de Trabalho ou uma pasta "Projetos").
3. Abra o terminal integrado: menu **Terminal > New Terminal** (ou `Ctrl + '` no Windows/Linux, `Cmd + '` no Mac).
4. Digite o comando abaixo, substituindo pelo link copiado:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
5. Entre na pasta criada:
   ```bash
   cd nome-do-repositorio
   ```
6. Abra a pasta no VS Code:
   ```bash
   code .
   ```
7. Instale as dependências e rode o projeto:
   ```bash
   npm install
   npm start
   ```

## 📄 Licença

Este projeto é de uso pessoal e está disponível apenas para fins de demonstração.
