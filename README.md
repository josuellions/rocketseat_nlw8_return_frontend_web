### Semana OminiStack - 08 | NLW Return - Impulse

##### Data 02/05/2022 a 06/05/2022

##### Instrutor Web: React / Server: NodeJS : Diego Fernandes

##### Instrutor Mobile: ReactNative: Rodrigo Gonçalves

- Projeto frontend web com React, Server com NodeJs e Mobile com ReactNative, para capturar screenshot da view, formulario texto feedback e envio para API do server, dispara email de notificação ao receber novo feedback enviando o texto e anexo o print (screenshot).

##### Download do projeto

- Descompactar download do projeto em um diretório local.

##### Web

- Acessar diretorio /frontend/web
- Configurar as variaveis de ambiente
  /.env.local
  - ITE_API_URL = 'SEU IP:PORTA'
- Rodar comando para atualizar e baixar as dependências do projeto

```
$ yarn
```

ou

```
$ npm install
```

- Rodar aplicação local

```
$ npm run dev
```

##### Server

- Acessar diretorio /server
- Configurar as variaveis de ambiente
  /.env
  - DATABASE_URL = 'CAMINHO SEU BANCO DADOS'
- Configurar as variaveis de ambiente
  /server/prisma/schema.prisma
  - provider = "NOME DO TIPO BANCO DADOS ex sqlite ou postgresql"
- Rodar comando para atualizar e baixar as dependências do projeto

```
$ yarn
```

ou

```
$ npm install
```

- Rodar aplicação local

```
$ npm run dev
```

##### Mobile

- Obs.: Emulador de Mobile previamente configurado com Expo

  - https://efficient-sloth-d85.notion.site/Instalando-Expo-cc5bfac8f19a41e394889e885355f261
  - Configurando emulador
    - https://developer.android.com/studio?hl=pt

- Acessar diretorio /mobile
- Rodar comando para atualizar e baixar as dependências do projeto

```
$ yarn
```

ou

```
$ npm install
```

- Rodar aplicação local

```
$ expo start
```

ou

```
$ expo start --cache
```

##### Boa diversão

###### END
