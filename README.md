API REST para gerenciamento de estoque de bebidas desenvolvida com Node.js, Express e TypeScript.

O projeto simula um sistema de depósito/estoque de bebidas, permitindo cadastro, edição, remoção, controle de quantidade e histórico de movimentações.

---

# 🚀 Funcionalidades

- Buscar todas as bebidas
- Buscar bebida por ID
- Criar nova bebida
- Filtrar bebidas energéticas
- Filtrar bebidas alcoolicas
- Atualizar bebidas (Mudar nome, quantidade, preço...)
- Remover bebidas
- Histórico de ações:
  - CREATE
  - UPDATE
  - DELETE
- Estrutura organizada em:
  - Controllers
  - Services
  - Repositories
  - Models

---

# 🛠 Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- File System (fs/promises)
- Thunder Client
- JSON Database

---

# 📌 Endpoints

## 🥤 Bebidas

---

### Buscar todas as bebidas

```http
GET /api/bebidas
```

---

### Buscar bebida por ID

```http
GET /api/bebidas/:id
```

Exemplo:

```http
GET /api/bebidas/1
```

---

### Buscar bebidas energéticas

```http
GET /api/bebidas/energeticos
```

---

### Buscar bebidas alcoólicas

```http
GET /api/bebidas/alcoholic
```

---

### Criar nova bebida

```http
POST /api/bebidas
```

Body:

```json
{
  "id": 1,
  "name": "Monster Energy",
  "company": "Monster",
  "alcoholic": false,
  "energyDrink": true,
  "quantity": 50,
  "price": 12.5
}
```

---

### Atualizar bebida

```http
PATCH /api/bebidas/:id
```

Exemplo:

```json
{
  "price": 15,
  "quantity": 100
}
```

---

### Deletar bebida

```http
DELETE /api/bebidas/:id
```

---

# 📜 Histórico

---

### Buscar histórico completo

```http
GET /api/historico
```

---

### Exemplo de retorno do histórico

```json
{
  "type": "CREATE",
  "drinkId": 1,
  "drinkName": "Monster Energy",
  "date": "2026-05-20T20:46:38.907Z"
}
```
