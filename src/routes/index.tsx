import { escola, presente, japinha, elevador, carmi, bola, tico, zig } from '../img'
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Heart, Stethoscope, Moon, Star, Sparkles, Dog, BookHeart,
  Stars, FlaskConical, Cross, ScrollText, ArrowRight, ArrowUp, Cat,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para você — Feliz Dia dos Namorados" },
      { name: "description", content: "Um pequeno presente digital feito com carinho, código e um pouco de magia." },
      { property: "og:title", content: "Para a futura médica mais incrível que eu conheço" },
      { property: "og:description", content: "Um presente feito com carinho, código e um pouco de magia." },
    ],
  }),
  component: Index,
});

// ─── Floating hearts easter egg ──────────────────────────
function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (Math.random() > 0.92) {
        const id = Date.now() + Math.random();
        setHearts((h) => [...h, { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => setHearts((h) => h.filter((p) => p.id !== id)), 1200);
      }
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 1, scale: 0.5, x: h.x - 8, y: h.y - 8 }}
            animate={{ opacity: 0, scale: 1.2, y: h.y - 60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute"
          >
            <Heart className="h-4 w-4 fill-rose-soft text-rose-soft" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── Decorative stars layer ──────────────────────────────
function StarField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 starry opacity-70" />
      {[
        { top: "12%", left: "8%", d: 0 },
        { top: "22%", left: "82%", d: 0.5 },
        { top: "65%", left: "12%", d: 1 },
        { top: "78%", left: "88%", d: 1.5 },
        { top: "40%", left: "50%", d: 0.8 },
      ].map((s, i) => (
        <Star
          key={i}
          className="absolute h-3 w-3 fill-lilac text-lilac animate-twinkle"
          style={{ top: s.top, left: s.left, animationDelay: `${s.d}s` }}
        />
      ))}
    </div>
  );
}

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as any },
};

// ─── HERO ────────────────────────────────────────────────
function Hero() {
  const scrollNext = () => {
    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <StarField />
      {/* moon glow */}
      <div className="absolute -top-24 right-[10%] h-64 w-64 rounded-full bg-lilac/20 blur-3xl" />
      <div className="absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-coraline/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8 flex items-center gap-3"
      >
        <Moon className="h-5 w-5 text-lilac animate-float" />
        <span className="font-script text-lg text-rose-soft">com carinho, para a minha Roró</span>
        <Sparkles className="h-5 w-5 text-coraline animate-twinkle" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Para a{" "}
        <span className="text-gradient italic">futura médica</span>{" "}
        mais incrível do universo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
      >
        Um pequeno presente feito com carinho, código e muito amor.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        onClick={scrollNext}
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-soft via-primary to-lilac px-7 py-3.5 text-sm font-semibold text-midnight stitched glow-pink transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-base"
      >
        <Heart className="h-4 w-4 fill-current animate-heartbeat" />
        Abrir meu presente
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </motion.button>

      {/* stitched buttons décor */}
      <div className="pointer-events-none absolute left-6 top-1/3 hidden flex-col gap-4 md:flex">
        <div className="h-6 w-6 rounded-full bg-coraline stitched" />
        <div className="h-4 w-4 rounded-full bg-rose-soft stitched" />
      </div>
      <div className="pointer-events-none absolute right-8 bottom-32 hidden flex-col gap-3 md:flex">
        <Stethoscope className="h-7 w-7 text-lilac/70 animate-float" style={{ animationDelay: "1s" }} />
        <Heart className="h-5 w-5 fill-rose-soft/60 text-rose-soft/60" />
      </div>
    </section>
  );
}

// ─── HISTÓRIA / TIMELINE ─────────────────────────────────
const story = [
  {
    date: "capítulo 01",
    title: "Lá do comecinho...",
    text: "",
    image: escola,
  },
  {
    date: "capítulo 02",
    title: "Um dos meus momentos favoritos",
    text: "",
    image: japinha,
  },
  {
    date: "capítulo 03",
    title: "Uma lembrança que eu guardo com carinho",
    text: "",
    image: presente,
  },
  {
    date: "capítulo 04",
    title: "Mais um capítulo da nossa história",
    text: "E ainda temos tantos por escrever...",
    image: elevador,
  },
];

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div {...fade} className="mb-12 text-center">
          {eyebrow && <p className="font-script text-lg text-rose-soft">{eyebrow}</p>}
          <h2 className="mt-2 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Historia() {
  return (
    <Section id="historia" eyebrow="entre nós dois" title="A Anatomia do nosso amor">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-lilac/0 via-lilac/60 to-coraline/0 sm:left-1/2" />
        <div className="space-y-10">
          {story.map((s, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.08 }}
              className={`relative grid grid-cols-[2rem_1fr] gap-4 sm:grid-cols-2 sm:gap-12 ${
                i % 2 === 0 ? "sm:[&>*:first-child]:order-1" : ""
              }`}
            >
              <div className="absolute left-4 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-primary stitched">
                  <Heart className="h-3 w-3 fill-midnight text-midnight" />
                </div>
              </div>
              <div className={`hidden sm:block ${i % 2 === 0 ? "sm:text-right" : ""}`} />
              <div className="col-start-2 sm:col-auto">
                <article className="card-magic p-5 sm:p-6">
                  <p className="font-script text-base text-coraline">{s.date}</p>
                  <h3 className="mt-1 font-display text-xl text-foreground sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">{s.text}</p>
                  <div className="mt-4 grid aspect-[4/3] place-items-center rounded-xl border border-dashed border-border bg-midnight/40 text-xs text-muted-foreground">
                    <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                  </div>
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── DIAGNÓSTICO ─────────────────────────────────────────
function Diagnostico() {
  const rows = [
    ["Paciente", "Gugu"],
    ["Causa provável", "Roca"],
    ["Sintomas", "Sorriso bobo, saudade constante, vontade de cuidar e orgulho infinito"],
    ["Tratamento", "Abraços, conversas, carinho e muitos momentos juntos"],
    ["Prognóstico", "Altamente promissor ♥"],
  ];
  return (
    <Section eyebrow="prontuário" title="Diagnóstico: amor em estágio avançado">
      <motion.div {...fade} className="card-magic mx-auto max-w-2xl overflow-hidden stitched">
        <header className="flex items-center justify-between border-b border-border/60 bg-midnight/40 px-5 py-3 sm:px-7">
          <div className="flex items-center gap-2">
            <Cross className="h-4 w-4 text-rose-soft" />
            <span className="font-display text-sm tracking-widest text-muted-foreground">PRONTUÁRIO Nº 31·08</span>
          </div>
          <Stethoscope className="h-5 w-5 text-lilac" />
        </header>
        <dl className="divide-y divide-border/40 px-5 py-2 sm:px-7">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[7rem_1fr] gap-3 py-3 sm:grid-cols-[10rem_1fr]">
              <dt className="font-script text-base text-coraline">{k}</dt>
              <dd className="text-sm text-foreground sm:text-base">{v}</dd>
            </div>
          ))}
        </dl>
        <footer className="border-t border-border/60 bg-midnight/40 px-5 py-3 text-right text-xs text-muted-foreground sm:px-7">
          assinado com carinho — Dr. Gugs
        </footer>
      </motion.div>
    </Section>
  );
}

// ─── PRESCRIÇÃO ──────────────────────────────────────────
function Prescricao() {
  const items = [
    "Abraço sempre que possível",
    "Várias mordidinhas na abinha do nariz",
    "Carinho em dose contínua",
    "Apoio emocional durante anatomia, fisiologia e plantões futuros",
    "Beijos conforme necessidade",
  ];
  return (
    <Section eyebrow="receita médica" title="Prescrição especial">
      <motion.div {...fade} className="mx-auto max-w-xl">
        <div className="card-magic stitched relative p-7 sm:p-9">
          <FlaskConical className="absolute -top-5 -left-3 h-10 w-10 rotate-[-12deg] text-coraline animate-float" />
          <Sparkles className="absolute -top-3 right-4 h-5 w-5 text-rose-soft animate-twinkle" />
          <ul className="space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-3 border-b border-dashed border-border/60 pb-3 last:border-0">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/90 text-xs font-bold text-midnight">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground sm:text-base">{it}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center font-script text-lg text-lilac">
            Validade: enquanto a gente existir.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

// ─── COISAS QUE ME LEMBRAM VOCÊ ─────────────────────────
const things = [
  { icon: Stethoscope, title: "Medicina", text: "Cada jaleco branco me faz lembrar do seu sonho ganhando forma." },
  { icon: Cat, title: "Coraline", text: "'Porque quando você tem medo, mas mesmo assim faz aquilo que precisa ser feito, isso é coragem.'" },
  { icon: Star, title: "Kuromi", text: "Nem toda garota de preto está triste. A minha só têm um estilo incrível." },
  { icon: Dog, title: "Animais", text: "Qualquer foto me lembra do seu sorriso ao estar com eles." },
  { icon: Heart, title: "Seu jeito", text: "Aquele jeitinho que só você tem, e faz meus olhos brilharem cada dia mais." },
  { icon: Stars, title: "Nosso futuro", text: "Tudo que ainda vamos viver, quero te fazer feliz por toda a vida." },
];
function Coisas() {
  return (
    <Section eyebrow="pequenas coincidências" title="Coisas que me lembram você">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {things.map((t, i) => (
          <motion.div
            key={t.title}
            {...fade}
            transition={{ ...fade.transition, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="card-magic group p-5 transition-shadow hover:glow-pink"
          >
            <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-plum to-midnight stitched">
              <t.icon className="h-5 w-5 text-rose-soft transition-transform group-hover:scale-110" />
            </div>
            <h3 className="font-display text-xl text-foreground">{t.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── CACHORROS ───────────────────────────────────────────
const dogs = [
  { name: "🩺 Dra. Carmi", role: "Cirurgiã-Chefe de Carinhos", text: "Minusclita e morde lentinho.", image: carmi },
  { name: "🩺 Dr. Zig", role: "Diretor de Conforto e Bem-Estar", text: "Ancião master da equipe.", image: zig },
  { name: "🩺 Dr. Tico", role: "Cirurgião Cardíaco e Especialista em Felicidade", text: "Escondeu a linguinha pra tirar a foto.", image: tico },
  { name: "🩺 Dr. Bola", role: "Anestesiologista-Chefe e Supervisor de Cochilos", text: "Vive gostoso.", image: bola },
];
function Cachorros() {
  return (
    <Section eyebrow="aprovado por quem importa" title="A equipe canina aprovou este presente.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dogs.map((d, i) => (
          <motion.article
            key={i}
            {...fade}
            transition={{ ...fade.transition, delay: i * 0.05 }}
            className="card-magic overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={d.image}
                alt={d.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-display text-lg text-foreground">{d.name}</h3>
              <p className="font-script text-base text-coraline">{d.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

// ─── QUIZ ────────────────────────────────────────────────
const quiz = [
  {
    q: "De 0 a infinito, quanto eu gosto de você?",
    a: ["Muito", "Demais", "Infinito + 1", "Sem palavras pra medir"],
  },
  {
    q: "Qual sua especialidade favorita (pra mim)?",
    a: ["Cardio — você cuida do meu", "Pediatria — pura fofura", "Neuro — você ocupa minha mente", "Todas, óbvio"],
  },
  {
    q: "Quantos abraços você merece hoje?",
    a: ["Pelo menos 3", "Uns 7", "Vinte e mais um", "Todos os possíveis"],
  },
  {
    q: "Você é…",
    a: ["A pessoa mais especial", "Meu lugar favorito", "A melhor parte do meu dia", "Todas as anteriores"],
  },
];
function Quiz() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const choose = () => {
    if (step + 1 >= quiz.length) setDone(true);
    else setStep((s) => s + 1);
  };
  const reset = () => { setStep(0); setDone(false); };

  return (
    <Section eyebrow="só pra brincar" title="Um quizzinho rápido">
      <motion.div {...fade} className="mx-auto max-w-xl">
        <div className="card-magic stitched p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>pergunta {step + 1} / {quiz.length}</span>
                  <div className="flex gap-1">
                    {quiz.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-6 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-2xl text-foreground sm:text-3xl">{quiz[step].q}</h3>
                <div className="mt-5 grid gap-2">
                  {quiz[step].a.map((opt) => (
                    <button
                      key={opt}
                      onClick={choose}
                      className="group flex items-center justify-between rounded-xl border border-border bg-midnight/40 px-4 py-3 text-left text-sm text-foreground transition-all hover:border-primary hover:bg-plum/60 sm:text-base"
                    >
                      <span>{opt}</span>
                      <Heart className="h-4 w-4 text-rose-soft opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center"
              >
                <Heart className="mx-auto h-12 w-12 fill-rose-soft text-rose-soft animate-heartbeat" />
                <p className="mt-4 font-script text-2xl text-lilac">Resultado:</p>
                <p className="mt-2 text-balance font-display text-2xl text-foreground sm:text-3xl">
                  você é oficialmente a pessoa mais especial do meu mundo.
                </p>
                <button
                  onClick={reset}
                  className="mt-6 rounded-full border border-border px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  fazer de novo
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Section>
  );
}

// ─── CARTA ───────────────────────────────────────────────
function Carta() {
  return (
    <Section eyebrow="do fundo do peito" title="Uma carta pra você">
      <motion.div {...fade} className="mx-auto max-w-2xl">
        <div className="relative card-magic stitched p-7 sm:p-10">
          <ScrollText className="absolute -top-4 left-6 h-7 w-7 text-coraline" />
          <BookHeart className="absolute -top-4 right-6 h-7 w-7 text-rose-soft" />
          <p className="font-display text-lg leading-relaxed text-foreground sm:text-xl">
            Eu poderia tentar explicar isso de mil formas, mas a verdade é que você
            torna meus dias melhores de um jeito que nenhuma linha de código
            conseguiria traduzir perfeitamente.
            <br /><br />
            Sinceramente, até te conhecer, nunca achei que viveria isso. Que iria querer o bem-estar de alguém acima do meu, que comemoraria mais as conquistas de alguém do que as minhas próprias.
            Até conhecer você, ver a luz que você emana, o brilho no teu olhar pra lutar pelo que quer, sua força, sua inteligência, seu carisma. Tudo isso me atrai como um imã pra perto de 
            ti, e me faz querer viver cada segundo da minha vida do seu lado. Porque se a minha vida não for do seu lado, ela com certeza vai estar sendo desperdiçada.
             Eu amo você Carollina, amo você com todo o meu ser, e espero um dia poder ser pelo menos 1% do ser humano gigantesco que você já é.
            <br /><br />
            Obrigado por ser tudo isso. E por me deixar ser parte disso com você.
          </p>
          <p className="mt-6 text-right font-script text-2xl text-lilac">— com todo o meu amor, Gugu.</p>
        </div>
      </motion.div>
    </Section>
  );
}

// ─── ENCERRAMENTO ────────────────────────────────────────
function Outro() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center">
      <StarField />
      <motion.div {...fade}>
        <Heart className="mx-auto h-10 w-10 fill-rose-soft text-rose-soft animate-heartbeat" />
        <h2 className="mt-6 text-balance font-display text-3xl text-foreground sm:text-5xl">
          Feliz Dia dos Namorados,{" "}
          <span className="text-gradient italic">murica.</span>
        </h2>
        <p className="mt-3 font-script text-xl text-lilac">
          Feito por mim, especialmente para você.
        </p>
        <button
          onClick={top}
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-midnight/50 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
        >
          <ArrowUp className="h-4 w-4" /> voltar ao início
        </button>
      </motion.div>
    </section>
  );
}

function Index() {
  const root = useRef<HTMLDivElement>(null);
  return (
    <div ref={root} className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <Hero />
      <Historia />
      <Diagnostico />
      <Prescricao />
      <Coisas />
      <Cachorros />
      <Quiz />
      <Carta />
      <Outro />
      <footer className="px-6 pb-8 text-center text-xs text-muted-foreground/70">
        <span className="font-script text-sm">com código & carinho ✦</span>
      </footer>
    </div>
  );
}
