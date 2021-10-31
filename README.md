# cutiva

![Logo](logoCutiva.png)
                         
## Sobre:
Olá, tudo bem? Nós somos a cutiva, estamos aqui para ajudar você na sua jornada em busca de alimentos produzidos pela agricultura sustentável. Nosso símbolo é a cutia, uma jardineira fiel à biordiversidade e o cultivo às sementes


# Cutiva - Back-end

## Pre-requisitos
- Node.js
- MongoDB

## Como rodar
- na raiz do projeto, no terminal:

```javascript
//baixar dependências
$ npm install

//rodar o projeto
$ npm run dev

```
## Variáveis de ambiente
- Na raiz do projeto crie um arquivo _.env_ conforme o arquivo _.env.default_, passando a url do seu banco local.
## Router
- Você pode testar pelo insomia ou postman.

### Post: Criando perfil de um(a) agricultor/agricultora

```
Post: /api/cutiva
```

- Exemplo <br>
_Body (json)_

```
{
    "title": "Horta do mar",
    "description": "A horta do Mar é cultivada ...",
    "name": "Marisol",
    "photoPerfil": "url",
    "typeAgriculture: "Agricultura Agroecologia"  
}
```
_router_ sendo consumida pelo front-end:

![post](img/postcreate.png)

### Get - Listando todos agricultores ou passando condição

```
Get: api/cutiva/
```
_router_ sendo consumida pelo front-end:

![](img/getall.png)

### Get - Por id
Busca um único agricultor/agricultora
```
Get: api/cutiva/:id
//api/cutiva/617e42100fb4f4f9f474368e
```

### Put - Atualizando
```
put: api/cutiva/:id
//api/cutiva/617e42100fb4f4f9f474368e
```
Body:
```
{
    contact.email: "marisol@hortadomar.com.br
}
```
_router_ sendo consumida pelo front-end:

![](img/putId.png)

### delete - Deletando um agricultor/agricultora 
```
delete: api/cutiva/:id
//api/cutiva/617e42100fb4f4f9f474368e
```
### delete - Deletando todos os agricultores 

```
delete: api/cutiva/

```
