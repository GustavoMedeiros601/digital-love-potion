
## 🚀 Requisitos
Antes de começar, você precisa ter instalado no seu computador:
| Programa | Versão mínima | Para que serve |
|----------|---------------|----------------|
| **Node.js** | 18 ou superior | Interpreta o código JavaScript |
| **npm** | vem com o Node | Instala as dependências |
### Como verificar se já tem instalado
Abra o **Prompt de Comando** (Windows) ou **Terminal** (Mac/Linux) e digite:
```bash
node -v
npm -v
```
Se aparecer um número de versão (ex: `v20.10.0`), está tudo certo.  
Se der erro, baixe e instale o Node.js em: **https://nodejs.org** (escolha a versão LTS).
> 💡 **Dica:** Prefira usar **Bun** (mais rápido) se quiser. Baixe em https://bun.sh. Os comandos abaixo funcionam com npm e bun.
---
## 📦 Passo 1 — Instalar as dependências
1. Extraia o arquivo `.zip` em uma pasta do seu computador.
2. Abra o terminal **dentro da pasta do projeto**.
3. Execute o comando abaixo (escolha um):
### Com npm:
```bash
npm install
```
### Com bun (mais rápido):
```bash
bun install
```
Isso vai baixar tudo que o projeto precisa (`framer-motion`, `lucide-react`, `tailwindcss`, etc.). Pode demorar 1–2 minutos.
---
## ▶️ Passo 2 — Rodar o projeto
### Com npm:
```bash
npm run dev
```
### Com bun:
```bash
bun run dev
```
Abra o navegador e acesse:
```
http://localhost:5173
```
Pronto! A página já está rodando. 🎉
> Sempre que você salvar uma alteração no código, a página recarrega automaticamente.
---
## 🖼️ Passo 3 — Adicionar imagens
### Onde colocar as fotos
Crie a pasta `public/images/` na raiz do projeto e coloque suas fotos lá.
```
meu-projeto/
├── public/
│   └── images/
│       ├── nos-no-parque.jpg
│       ├── cachorro-1.jpg
│       ├── cachorro-2.jpg
│       └── ...
├── src/
│   └── routes/
│       └── index.tsx
```
> 📌 **Dica:** Use imagens leves (JPEG, WebP, até ~500KB cada) para carregar mais rápido.
---
## ✏️ Passo 4 — Personalizar o conteúdo
Todo o texto editável está no arquivo **src/routes/index.tsx**. Abra esse arquivo no VS Code, Sublime, ou qualquer editor de texto.
Abaixo, o mapa de cada seção e o que você pode mudar:
---
### 🏠 HERO (tela inicial)
Localize esta parte no código:
```tsx
<h1 className="...">
  Para a{" "}
  <span className="text-gradient italic">futura médica</span>{" "}
  mais incrível que eu conheço
</h1>
```
| O que mudar | Como exemplo |
|-------------|--------------|
| Texto principal | `"Para a futura médica mais incrível..."` |
| Subtítulo abaixo do título | `"Um pequeno presente digital feito com carinho..."` |
| Texto do botão | `"Abrir meu presente"` |
---
### 📖 HISTÓRIA (timeline)
Procure por `const story = [` — é um array com 4 momentos:
```tsx
{ date: "capítulo 01", title: "O dia em que tudo começou", text: "Aquele momento..." },
```
| Campo | Significado |
|-------|-------------|
| `date` | Tipo `"14 de fevereiro de 2023"` ou `"capítulo 01"` |
| `title` | Título do momento |
| `text` | Descrição do que aconteceu |
> 🖼️ **Para colocar uma foto** em cada card, troque o bloco `foto opcional` por uma tag `<img>`:
>
> ```tsx
> <img
>   src="/images/nos-no-parque.jpg"
>   alt="Momento especial"
>   className="mt-4 w-full rounded-xl object-cover aspect-[4/3]"
> />
> ```
---
### 🩺 DIAGNÓSTICO (prontuário)
Procure por `const rows = [` e edite os valores:
```tsx
["Paciente", "Eu"],
["Causa provável", "Ela"],
["Sintomas", "sorriso bobo, saudade constante..."],
```
Troque tudo o que quiser — é um prontuário fictício divertido.
---
### 💊 PRESCRIÇÃO
Procure por `const items = [` e mude as "receitas":
```tsx
"1 abraço sempre que possível",
"2 elogios antes das provas",
```
A frase de validade também é editável:
```tsx
<p className="...">Validade: enquanto a gente existir.</p>
```
---
### 🐶 CACHORROS
Procure por `const dogs = [` — cada item tem:
```tsx
{ name: "Nome do Cão 1", role: "supervisor de carinho", text: "Especialista em deitar no colo..." },
```
| Campo | O que é |
|-------|---------|
| `name` | Nome do cachorro |
| `role` | Cargo divertido (ex: "fiscal de saudade") |
| `text` | Descrição engraçada |
> 🖼️ **Para adicionar fotos reais dos cachorros**, troque o bloco de `foto aqui` por:
>
> ```tsx
> <img
>   src="/images/cachorro-1.jpg"
>   alt="Nome do cão"
>   className="h-full w-full object-cover"
> />
> ```
> E remova o `<Dog ... />` e o `<span>foto aqui</span>`.
---
### 🎯 QUIZ
Procure por `const quiz = [` — cada pergunta tem:
```tsx
{
  q: "De 0 a infinito, quanto eu gosto de você?",
  a: ["Muito", "Demais", "Infinito + 1", "Sem palavras pra medir"],
}
```
| Campo | Significado |
|-------|-------------|
| `q` | A pergunta |
| `a` | Lista de opções (o usuário pode clicar em qualquer uma) |
No final do quiz, troque a mensagem:
```tsx
<p className="...">você é oficialmente a pessoa mais especial do meu mundo.</p>
```
---
### 💌 CARTA (a mensagem principal)
Procure pela seção `function Carta()` e edite o texto entre as tags `<p>`:
```tsx
<p className="font-display ...">
  Eu poderia tentar explicar isso de mil formas...
</p>
```
Substitua a parte de placeholder:
```tsx
<span className="text-muted-foreground">
  [ deixe aqui sua mensagem mais sincera... ]
</span>
```
Por algo pessoal seu, como:
```tsx
<span className="text-muted-foreground">
  Desde o primeiro dia em que a gente se viu, eu soube que meu mundo
  tinha mudado. Você me inspira todos os dias com sua força, seu
  jeito e seu sorriso. Mal posso esperar pra ver você conquistando
  tudo o que sonha na medicina.
</span>
```
A assinatura também é editável:
```tsx
<p className="...">— com todo o meu amor</p>
```
---
### 🎀 ENCERRAMENTO
Procure por `function Outro()` e edite:
```tsx
<h2 className="...">
  Feliz Dia dos Namorados,{" "}
  <span className="text-gradient italic">meu amor.</span>
</h2>
<p className="...">Feito por mim, especialmente para você.</p>
```
---
### 🌟 SEÇÃO "COISAS QUE ME LEMBRAM VOCÊ"
Procure por `const things = [` e mude os textos de cada card:
```tsx
{ icon: Stethoscope, title: "Medicina", text: "Cada jaleco branco me faz lembrar..." },
```
Você pode trocar os ícones também. Opções disponíveis no `lucide-react`:
`Heart`, `Star`, `Moon`, `Dog`, `Stethoscope`, `FlaskConical`, `Sparkles`, `BookHeart`, `ScrollText`, `Cross`, `ArrowRight`, `ArrowUp`, `Stars`.
---
## 🎨 Passo 5 — Mudar as cores (opcional)
As cores da página estão no arquivo **src/styles.css**. No topo do arquivo, você verá algo assim:
```css
:root {
  --lilac: #c8b6ff;
  --rose-soft: #ff85a1;
  --coraline: #e2a0ff;
  --midnight: #0f0c29;
  --plum: #2a1b3d;
}
```
| Variável | Cor atual | Para que serve |
|----------|-----------|----------------|
| `--lilac` | lilás | Estrelas, detalhes, ícones |
| `--rose-soft` | rosa claro | Corações, destaques, botões |
| `--coraline` | roxo/rosa | Títulos, acentos |
| `--midnight` | azul escuro | Fundo escuro principal |
| `--plum` | roxo escuro | Cards, gradientes |
Você pode trocar essas cores por qualquer outra (use um site como https://colorhunt.co para inspiração).
---
## 🌐 Passo 6 — Mudar o título da aba do navegador
No topo de `src/routes/index.tsx`, localize:
```tsx
meta: [
  { title: "Para você — Feliz Dia dos Namorados" },
  { name: "description", content: "Um pequeno presente digital..." },
],
```
Troque o `title` e `description` para o que você preferir.
---
## 🌍 Passo 7 — Publicar na internet (deploy)
Quando terminar as edições, você pode subir o site gratuitamente em plataformas como:
| Plataforma | Como fazer |
|------------|------------|
| **Vercel** | Crie conta em https://vercel.com → "Add New Project" → importe a pasta do projeto |
| **Netlify** | Crie conta em https://netlify.com → "Add new site" → arraste a pasta |
| **GitHub Pages** | Crie um repositório no GitHub, envie o código, ative Pages nas configurações |
> 💡 **Importante:** Algumas plataformas exigem que você rode `npm run build` (ou `bun run build`) antes de enviar. O build gerará uma pasta `dist/` com o site pronto.
---
## ❓ Problemas comuns
| Problema | Solução |
|----------|---------|
| `command not found: npm` | Reinstale o Node.js |
| Porta `5173` já está em uso | Use `npm run dev -- --port 3000` |
| Imagens não aparecem | Verifique se o caminho começa com `/images/` e se a pasta está em `public/images` |
| Alteração não aparece | Salve o arquivo (Ctrl+S) — o Vite recarrega automaticamente |
---
## 📂 Resumo rápido — Onde editar cada coisa
| O que quero mudar | Arquivo | Local no código |
|-------------------|---------|-----------------|
| Título principal | `src/routes/index.tsx` | Dentro de `<h1>` no `Hero()` |
| Texto da carta | `src/routes/index.tsx` | Dentro de `<p>` no `Carta()` |
| Datas da timeline | `src/routes/index.tsx` | `const story = [...]` |
| Perguntas do quiz | `src/routes/index.tsx` | `const quiz = [...]` |
| Cores do tema | `src/styles.css` | `:root { ... }` |
| Título da aba | `src/routes/index.tsx` | `meta: [{ title: "..." }]` |
| Adicionar fotos | `public/images/` | Crie a pasta e use `<img src="/images/..." />` |
---
> 💌 **Dica final:** Quanto mais pessoal você deixar, mais especial vai ficar. Não tenha medo de mudar os textos, trocar as cores e colocar fotos de vocês. O código foi feito exatamente para isso — ser seu.
Feito com carinho (e código). Boa sorte! 🐾✨
