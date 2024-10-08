# Projeto de Testes Automáticos com Cypress

Este projeto foi desenvolvido como parte do estudo de testes automatizados, seguindo o curso de Cypress da Alura. O objetivo principal foi praticar e consolidar o uso de ferramentas e comandos essenciais no processo de automação de testes.

## Funcionalidades Abordadas

### 1. Estruturação dos Testes
- **Comandos**: Utilização de `describe` para organização dos testes, e `wait` para controle de tempo entre interações.
- **Elementos**: Manipulação de elementos usando `cy.get` e navegação de páginas com `cy.visit`.
- **Asserções**: Implementação de verificações através do método `should` para assegurar o comportamento esperado dos elementos.

### 2. Documentação Automatizada
- **Mocha Wisdom**: Geração de documentação dos testes automatizada com Mocha.
- **Cypress Cloud**: Centralização da documentação e execução dos testes utilizando a plataforma Cypress Cloud.

### 3. Testes de Autenticação
- **Login Personalizado**: Implementação de testes simulando o comportamento de uma pessoa usuária durante o login, garantindo a validação de fluxo de autenticação.

### 4. Testes de API
- **Stub de Requisição**: Criação de testes que interceptam e validam requisições de API usando o Cypress, simulando diferentes respostas e cenários.

### 5. Manipulação de Dados com Fixtures
- **Uso de JSON**: Consumo de dados estáticos de um arquivo JSON para popular os testes através de `fixtures`, garantindo maior flexibilidade e organização.

### 6. Gerenciamento de Flaky Tests
- **Identificação e Solução**: Aprendizado para identificar testes intermitentes (flaky tests) e técnicas para torná-los mais robustos e confiáveis.

### 7. Segurança dos Dados
- **Cypress.env.json**: Proteção de dados sensíveis, como credenciais e chaves de API, utilizando o arquivo de ambiente `cypress.env.json`.

---

## Como Executar

1. Instale as dependências do projeto:
    ```bash
    npm install
    ```

2. Execute os testes:
    ```bash
    npm run test
    ```

---

## Referências

Curso de Cypress da [Alura](https://cursos.alura.com.br/course/cypress-automatizando-testes-e2e).
