<div align="center">

# 🧠 Newtion

**Tudo o que você precisa para organizar sua rotina em um único lugar.**

Organize tarefas, notas, viagens, gastos, wishlists e muito mais em uma interface moderna inspirada em Notion, Linear e Arc.

<!-- Banner -->
<!-- <img src="./public/banner.png" alt="Newtion Banner" /> -->

[🚀 Demonstração](#-demonstração) •
[✨ Recursos](#-recursos) •
[🛠 Tecnologias](#-tecnologias) •
[⚙️ Instalação](#️-instalação) •
[🗺 Roadmap](#-roadmap)

</div>

---

# 📖 Sobre

O **Newtion** é uma plataforma de organização pessoal desenvolvida para centralizar tudo o que normalmente fica espalhado entre diversos aplicativos.

A proposta é oferecer uma experiência simples, rápida e intuitiva, permitindo que o usuário organize tarefas, notas, viagens, finanças e objetivos em um único ambiente.

O projeto foi desenvolvido utilizando tecnologias modernas do ecossistema React, priorizando performance, escalabilidade e uma boa experiência de uso.

---

# 🚀 Demonstração

### Landing Page

<!-- imagem -->
<!-- ![](./public/screenshots/landing.png) -->

### Dashboard

<!-- imagem -->
<!-- ![](./public/screenshots/dashboard.png) -->

### Planner

<!-- imagem -->

---

# ✨ Recursos

## Atualmente ✅

- ✅ Dashboard
- ✅ Sistema de autenticação
- ✅ Landing Page
- ✅ Layout responsivo
- ✅ Interface moderna

### Tarefas (Quase pronto, falta apenas a UI)

- ✅ Criar tarefas
- ✅ Editar tarefas
- ✅ Excluir tarefas

### Notas 

- 🚧 Criar notas
- 🚧 Editar notas
- 🚧 Excluir notas

### Wishlists

- 🚧 Criar listas
- 🚧 Gerenciar desejos

### Gastos

- 🚧 Controle financeiro
- 🚧 Organização de despesas

### Viagens

- 🚧 Criar roteiros
- 🚧 Organizar destinos
- 🚧 Gerenciar orçamento da viagem

---

# 🛠 Tecnologias

## Front-end

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui

## Back-end

- Next.js Server Actions
- Drizzle ORM

## Banco de dados

- Neon (PostgreSQL)

## Ferramentas

- Biome
- Git
- GitHub
- Vercel

---

# 🏗 Estrutura do projeto

```text
src/
│
├── app/
├── components/
├── db/
├── hooks/
├── lib/
├── server/
├── validations/
├── providers/
```

---

# ⚙️ Instalação

Clone o projeto

```bash
git clone https://github.com/seuusuario/newtion.git
```

Entre na pasta

```bash
cd newtion
```

Instale as dependências

```bash
npm install
```

Configure as variáveis

```env

# Better Auth Configuration
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000 # Base URL of your app

# Database connection string for NeonDB
DATABASE_URL=

# Google OAuth credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Next.js public environment variable for API base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

```

Execute

```bash
npm dev
```

---

# 📂 Arquitetura

O projeto utiliza:

- Next.js App Router
- React Server Components por padrão
- Client Components apenas quando necessário
- Server Actions
- Drizzle ORM
- PostgreSQL hospedado no Neon
- Better Auth
- Componentização reutilizável
- Organização por módulos

---

# 🎨 Design

O visual do projeto foi inspirado em aplicações modernas como:

- Notion
- Linear
- Arc Browser
- Vercel

O foco da interface é manter:

- simplicidade;
- velocidade;
- consistência visual;
- boa experiência em dispositivos móveis.

---

# 📈 Roadmap

## Planejado

- [ ] Calendário
- [ ] Hábitos
- [ ] Objetivos
- [ ] IA integrada
- [ ] Compartilhamento de páginas
- [ ] Colaboração em tempo real
- [ ] Aplicativo Mobile
- [ ] Exportação em PDF
- [ ] Sincronização em nuvem

## Em desenvolvimento

- [ ] Melhorias de performance
- [ ] Sistema de notificações
- [ ] Dashboard avançado

---

# 📷 Screenshots

## Landing

<!-- screenshot -->

---

## Dashboard

<!-- screenshot -->

---

## Tarefas

<!-- screenshot -->

---

## Notas

<!-- screenshot -->

---

## Gastos

<!-- screenshot -->

---

# 💡 Filosofia

O objetivo do Newtion é reduzir a quantidade de ferramentas necessárias para organizar a rotina.

Em vez de utilizar um aplicativo para tarefas, outro para notas, outro para gastos e outro para planejamento, o usuário encontra tudo em uma única plataforma, mantendo uma experiência consistente e agradável.

---

# 🤝 Contribuições

Contribuições são sempre bem-vindas.

Caso encontre algum problema ou tenha alguma sugestão de melhoria, fique à vontade para abrir uma Issue ou enviar um Pull Request.

---

# 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

<div align="center">

Desenvolvido por **Leonardo Willian Silva do Nascimento**

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório.

</div>
