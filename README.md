# <p align = "center"> Busca CEP </p>

<p align="center">
   <img src="https://images.emojiterra.com/twitter/v13.1/512px/1f5fa.png" width="150"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Fernanda-4dae71?style=flat-square" />
</p>

## :rocket: Rotas

```yml
POST /address
    - Rota que busca o endereço de um CEP enviado.
    - headers: {}
    - body:
        {
          cep: "99999999" 
        }
```

---

## 🏁 Rodando a aplicação

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/acfernanda/busca-cep-backend
```

No terminal, rode o seguinte comando:

```
npm install
```

Finalizado o processo, é só inicializar o servidor

```
npm run dev
```

---
## :dart: Rodando testes

```
npm run test:unit
```

---
## :triangular_flag_on_post: Repositório front-end

https://github.com/ACFernanda/busca-cep-frontend