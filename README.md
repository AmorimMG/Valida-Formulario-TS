
# **form-validator-ts**

**form-validator-ts** é um pacote TypeScript simples e leve que fornece funções de validação para campos comuns de formulários, como e-mails, CPF, senha, telefone e CNPJ. Ele pode ser facilmente integrado a projetos web ou back-end para garantir que os dados do usuário sejam válidos antes de serem processados.

## **Índice**

- [Instalação](#instalacao)
- [Uso Básico](#uso-basico)
- [Funções de Validação](#funcoes-de-validacao)
  - [isValidEmail](#isvalidemail)
  - [isValidCPF](#isvalidcpf)
  - [isValidPassword](#isvalidpassword)
  - [isValidPhone](#isvalidphone)
  - [isValidCNPJ](#isvalidcnpj)
- [Exemplos de Uso](#exemplos-de-uso)
- [API](#api)
- [Licença](#licenca)

---

## **Instalação**

Para instalar o pacote, use o comando abaixo no seu projeto Node.js:

```bash
npm install form-validator-ts
```

Este pacote pode ser utilizado em qualquer aplicação que suporte JavaScript ou TypeScript.

---

## **Uso Básico**

Após a instalação, você pode importar as funções de validação diretamente em seu código. A seguir estão exemplos de como utilizar o pacote.

```ts
import { isValidEmail, isValidCPF, isValidPassword, isValidPhone, isValidCNPJ } from 'form-validator-ts';
```

### **Validação de E-mail**

A função `isValidEmail` verifica se o e-mail fornecido está em um formato válido.

**Exemplo:**

```ts
const email = 'exemplo@dominio.com';
const isEmailValid = isValidEmail(email);

console.log(isEmailValid); // true ou false
```

### **Validação de CPF**

A função `isValidCPF` verifica se o CPF está no formato correto (XXX.XXX.XXX-XX).

**Exemplo:**

```ts
const cpf = '123.456.789-00';
const isCPFValid = isValidCPF(cpf);

console.log(isCPFValid); // true ou false
```

### **Validação de Senha**

A função `isValidPassword` verifica se a senha atende aos seguintes critérios:
- Pelo menos 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos uma letra minúscula
- Pelo menos um número

**Exemplo:**

```ts
const password = 'Senha123';
const isPasswordValid = isValidPassword(password);

console.log(isPasswordValid); // true ou false
```

### **Validação de Telefone**

A função `isValidPhone` verifica se o número de telefone está no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.

**Exemplo:**

```ts
const phone = '(11) 98765-4321';
const isPhoneValid = isValidPhone(phone);

console.log(isPhoneValid); // true ou false
```

### **Validação de CNPJ**

A função `isValidCNPJ` verifica se o CNPJ está no formato correto (XX.XXX.XXX/XXXX-XX).

**Exemplo:**

```ts
const cnpj = '12.345.678/0001-99';
const isCNPJValid = isValidCNPJ(cnpj);

console.log(isCNPJValid); // true ou false
```

---

## **Exemplos de Uso**

A seguir, estão alguns exemplos práticos de uso das funções de validação em uma aplicação:

### **Exemplo de Validação de Formulário de Cadastro**

```html
<form id="form-cadastro">
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required />

  <label for="cpf">CPF:</label>
  <input type="text" id="cpf" name="cpf" required />

  <label for="senha">Senha:</label>
  <input type="password" id="senha" name="senha" required />

  <label for="telefone">Telefone:</label>
  <input type="text" id="telefone" name="telefone" required />

  <button type="submit">Cadastrar</button>
</form>

<script type="module">
  import { isValidEmail, isValidCPF, isValidPassword, isValidPhone } from 'form-validator-ts';

  const form = document.getElementById('form-cadastro');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;

    if (!isValidEmail(email)) {
      alert('E-mail inválido.');
      return;
    }

    if (!isValidCPF(cpf)) {
      alert('CPF inválido.');
      return;
    }

    if (!isValidPassword(senha)) {
      alert('Senha inválida. A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 número.');
      return;
    }

    if (!isValidPhone(telefone)) {
      alert('Telefone inválido.');
      return;
    }

    alert('Cadastro realizado com sucesso!');
  });
</script>
```

---

## **API**

A API do **form-validator-ts** consiste nas seguintes funções:

### **`isValidEmail(email: string): boolean`**
- **Parâmetro**: `email` (string) - O e-mail a ser validado.
- **Retorno**: `true` se o e-mail for válido, caso contrário, `false`.

### **`isValidCPF(cpf: string): boolean`**
- **Parâmetro**: `cpf` (string) - O CPF a ser validado.
- **Retorno**: `true` se o CPF for válido, caso contrário, `false`.

### **`isValidPassword(password: string): boolean`**
- **Parâmetro**: `password` (string) - A senha a ser validada.
- **Retorno**: `true` se a senha for válida, caso contrário, `false`.

### **`isValidPhone(phone: string): boolean`**
- **Parâmetro**: `phone` (string) - O telefone a ser validado.
- **Retorno**: `true` se o telefone for válido, caso contrário, `false`.

### **`isValidCNPJ(cnpj: string): boolean`**
- **Parâmetro**: `cnpj` (string) - O CNPJ a ser validado.
- **Retorno**: `true` se o CNPJ for válido, caso contrário, `false`.

---

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).
