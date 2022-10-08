<img src="https://github.com/arcorreiaa/FCxLabs/blob/master/public/fc.png" alt="Logo of the project" align="right">
</br>

# Teste Ferreira Costa Labs 

> O Desafio
Seu objetivo é criar um simples crud que exibe um
formulário com os campos abaixo, e outra que liste os dados cadastrados.
• Nome completo
• CPF
• Telefone
• Email
• Nome da mãe
• data de inclusão
• data de nascimento

</br>
</br>
<div align="center">
</br></br>
 
<img src="https://github.com/arcorreiaa/FCxLabs/blob/master/src/img/fclabs.gif" width="1200" height="600" alt="Logo of the project" align="center">
</div>
</br>

# O que foi feito

- No lugar de só salvar os dados localmente, cadastrei esses usuários em um banco de dados na núvem(Firebase). Podendo fazer o login com esses e-mails e senha, pode criar uma conta e pode fazer alteração de qualquer usuário.

- Verificações adicionadas:
-Só entra se estiver logado se não cai na página de erro
-E-mail - só é possível salver se for e-mail válido - email@email.com
-Cpf - só é possível salver se conter os 11 dígitos
-Celular - só é possível salvar se conter no mínimo 10 caracteres

# Link para acessar o projeto no ar

- [WEB](https://fcx-labs.web.app/)

</br>

## Instalando / Inicializando

```bash
# Clone o repositório
$ git clone https://github.com/arcorreiaa/FCxLabs.git

# Entre na pasta
$ cd fcxlabs

# Instale as dependencias
$ npm install

# Inicie o site
$ npm run dev
```

## Tecnologias

- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCss](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

## Libs

- [MomentJS](https://momentjs.com/)
- [React Datepicker](https://reactdatepicker.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Input Mask](https://github.com/sanniassin/react-input-mask)
- [React Modal](https://www.npmjs.com/package/react-modal)
- [React Spinners Css](https://www.npmjs.com/package/react-spinners-css)



## Database

- [Firebase - Authentication](https://firebase.google.com/docs/auth?hl=pt-br)

Responsavel por fazer a autenticação de novos usuários, criando um ID único.

<img src="https://github.com/arcorreiaa/FCxLabs/blob/master/src/img/authentication.png" alt="Logo of the project" align="center">

- [Firebase - Firestore](https://firebase.google.com/docs/firestore?hl=pt-br)

Responsavel por salvar os dados para exibição e edição de novos usuários, cadastrando com o mesmo ID criando na autenticação.

<img src="https://github.com/arcorreiaa/FCxLabs/blob/master/src/img/cloud-firestore.png" alt="Logo of the project" align="center">

</br>

<div align="center">
<img src="https://github.com/arcorreiaa/FCxLabs/blob/master/public/fc.png" width="400" height="400" alt="Logo of the project" align="center">
 </div>
