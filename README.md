# Dicionário Mobile

## Descrição

Aplicativo mobile que permite buscar e visualizar palavras em inglês, com funcionalidades de histórico e favoritos, utilizando a Free Dictionary API.

## Tecnologias Usadas

- **React Native** (para desenvolvimento do aplicativo mobile)
- **Expo** (para facilitar o processo de desenvolvimento e execução)
- **Axios** (para realizar requisições HTTP)
- **React Navigation** (para navegação entre as telas)
- **React Query** (para gerenciamento de dados assíncronos)
- **TypeScript** (para desenvolvimento com tipagem forte)
- **AsyncStorage** (para armazenamento local de dados)
- **React Native Paper** (para componentes UI)

## Como Instalar e Usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/cfads/dicionario-mobile-coodesh.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd dicionario-mobile
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Para rodar o projeto no seu dispositivo ou emulador:

   - Abra o Expo App no seu iPhone ou Android.
   - Execute o comando abaixo:

   ```bash
   npm run start
   ```

   - Escaneie o QR code que aparecerá no terminal com o Expo App no seu dispositivo para começar a debugar.

## .gitignore

Este projeto já inclui um arquivo `.gitignore` para garantir que arquivos desnecessários não sejam versionados. Ele contém, entre outros, os seguintes itens:

- node_modules/
- .expo/
- dist/
- _.p12, _.p8 (certificados e chaves)
- .DS_Store (arquivos do macOS)
- .env\*.local (arquivos de variáveis de ambiente locais)
- \*.tsbuildinfo (arquivos de build do TypeScript)

Veja o conteúdo completo no arquivo `.gitignore` do projeto.

## Challenge by Coodesh

Este repositório é parte do desafio realizado para a plataforma Coodesh.
