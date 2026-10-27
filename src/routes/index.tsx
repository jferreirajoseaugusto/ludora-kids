import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Brain, Check, Footprints, Heart, Lightbulb, Palette, Printer, Search, ShieldCheck,
  Shuffle, Sparkles, Star, Users, Wand2, FileText, Clock,
} from "lucide-react";
import { BONUS_DRAWING_COUNT, CHECKOUT_URL, ORIGINAL_PRICE, PRICE } from "@/config/offer";
import { Carousel, CtaButton, FaqItem, Reveal, SectionHeading, Countdown, type Slide } from "@/components/landing/ui";
import cover from "@/assets/kit-capa.jpg.asset.json";
import bonusQuadro from "@/assets/bonus-checklist-real.jpg.asset.json";
import bonusLivro from "@/assets/bonus-colorir-capa.jpg.asset.json";
import avatarMariana from "@/assets/avatar-mariana.jpg";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarJuliana from "@/assets/avatar-juliana.jpg";
import p1 from "@/assets/kit-cacadores-de-cores.jpg.asset.json";
import p2 from "@/assets/kit-caminho-da-cenoura.jpg.asset.json";
import p3 from "@/assets/kit-complete-o-desenho.jpg.asset.json";
import p4 from "@/assets/kit-memoria-dos-animais.jpg.asset.json";
import p5 from "@/assets/kit-cartoes-de-movimento.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Pequenos Exploradores | 50 Atividades Infantis" },
      { name: "description", content: "50 atividades infantis em PDF para crianças de 3 a 6 anos brincarem, criarem e aprenderem em casa. Inclui 2 bônus e 7 dias de garantia." },
      { property: "og:title", content: "Kit Pequenos Exploradores | 50 Atividades Infantis" },
      { property: "og:description", content: "50 atividades infantis para imprimir e usar em casa, com 2 bônus — LudoraKids." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: Brain, color: "bg-sun-soft", title: "Aprender Brincando", text: "10 atividades voltadas a estimular a observação, a percepção, o raciocínio e o aprendizado de forma divertida." },
  { icon: Search, color: "bg-sky-soft", title: "Pequenos Detetives", text: "10 atividades de exploração, observação e descoberta, incentivando a curiosidade e a atenção aos detalhes." },
  { icon: Palette, color: "bg-coral-soft", title: "Criatividade sem Limites", text: "10 atividades para desenhar, imaginar, criar e expressar ideias de maneira lúdica." },
  { icon: Users, color: "bg-mint-soft", title: "Jogos para Compartilhar", text: "10 atividades que incentivam a interação, a cooperação e os momentos divertidos com familiares e amigos." },
  { icon: Footprints, color: "bg-sun-soft", title: "Movimento e Aventura", text: "10 atividades lúdicas para explorar o ambiente, movimentar o corpo e transformar a rotina em pequenas aventuras, com supervisão adulta quando necessária." },
];

const benefits = [
  { icon: Lightbulb, title: "Mais Criatividade", text: "Proporcione oportunidades para a criança imaginar, desenhar, experimentar e criar suas próprias ideias." },
  { icon: Sparkles, title: "Aprendizado Divertido", text: "Apresente desafios lúdicos que incentivam a observação, o raciocínio e a descoberta de novas possibilidades." },
  { icon: BookOpen, title: "Praticidade Para os Pais", text: "Tenha diferentes opções de atividades organizadas em um só lugar, facilitando a escolha da próxima brincadeira." },
  { icon: Heart, title: "Momentos em Família", text: "Encontre oportunidades para participar das brincadeiras, conversar, incentivar a curiosidade e compartilhar experiências." },
  { icon: Shuffle, title: "Variedade de Atividades", text: "Alterne entre desenho, exploração, jogos, desafios e outras propostas para diversificar a rotina." },
  { icon: Wand2, title: "Fácil de Preparar", text: "Utilize as atividades impressas ou adapte as brincadeiras conforme as instruções e os materiais disponíveis." },
];

const slides: Slide[] = [
  { src: cover.url, title: "Capa do Kit Pequenos Exploradores", alt: "Capa real do Kit Pequenos Exploradores — 50 Brincadeiras Infantis" },
  { src: p1.url, title: "Caçadores de Cores", alt: "Página real do kit: ligar os objetos às suas cores" },
  { src: p2.url, title: "O Caminho da Cenoura", alt: "Página real do kit: labirinto para levar o coelhinho até a cenoura" },
  { src: p3.url, title: "Complete o Desenho", alt: "Página real do kit: completar e pintar uma borboleta, uma casa e um rosto" },
  { src: p4.url, title: "Jogo da Memória dos Animais", alt: "Página real do kit: cartas de animais para recortar e encontrar os pares" },
  { src: p5.url, title: "Cartões de Movimento", alt: "Página real do kit: oito cartões com movimentos para brincar" },
];

// Exibir apenas relatos autênticos enviados com autorização do cliente.
const testimonials = [
  { name: "Mariana Alves", label: "Variedade de atividades", avatar: avatarMariana, text: "Um material muito divertido! Gostei da variedade de atividades e da possibilidade de imprimir em casa para criar momentos diferentes com os pequenos." },
  { name: "Camila Rodrigues", label: "Brincadeiras criativas", avatar: avatarCamila, text: "Adorei a proposta do kit! As atividades são criativas e ajudam a ter novas ideias de brincadeiras para fazer com as crianças no dia a dia." },
  { name: "Juliana Martins", label: "Praticidade em PDF", avatar: avatarJuliana, text: "Gostei muito da praticidade de ter tudo em PDF. Posso escolher as atividades que quero imprimir e organizar as brincadeiras de acordo com o momento." },
];

const faqs = [
  { q: "Para qual idade o material é indicado?", a: "O Kit Pequenos Exploradores foi desenvolvido para crianças de 3 a 6 anos. A participação e a adaptação das atividades devem considerar a idade, as habilidades e as necessidades de cada criança, com supervisão adulta quando necessário." },
  { q: "Como vou receber o produto?", a: "O produto é digital, em PDF. Após a confirmação do pagamento, o acesso será disponibilizado pelo canal de entrega configurado na compra, conforme as instruções enviadas ao cliente." },
  { q: "Preciso comprar materiais especiais?", a: "Não. A proposta é oferecer atividades práticas que utilizem materiais simples, sempre de acordo com as instruções de cada brincadeira. Algumas atividades podem exigir impressão, lápis de cor, papel ou acompanhamento de um adulto." },
  { q: "Posso imprimir as atividades?", a: "Sim. O material foi pensado para utilização digital e impressão doméstica. A quantidade de impressões permitida e as condições de uso devem seguir a licença de utilização apresentada junto ao produto." },
  { q: "E se eu não gostar do material?", a: "Você conta com uma garantia de 7 dias. Caso deseje solicitar o reembolso nesse período, consulte as condições e siga o procedimento de atendimento informado na página e no checkout." },
];

function buy() {
  if (!CHECKOUT_URL) {
    // PENDENTE: configure CHECKOUT_URL em src/config/offer.ts
    console.warn("CHECKOUT_URL não configurado.");
    alert("O link de pagamento ainda está sendo configurado. Volte em breve!");
    return;
  }
  window.location.href = CHECKOUT_URL;
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO */}
      <section className="relative bg-sun-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-bold tracking-widest text-coral shadow-soft">
              <Star className="h-4 w-4 fill-current" /> DIVERSÃO E APRENDIZADO EM CADA DESCOBERTA
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              50 Atividades Infantis Para Seu Pequeno Explorar, Criar e Aprender!
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Transforme momentos do dia a dia em aventuras cheias de criatividade com atividades práticas para crianças de 3 a 6 anos. Mais imaginação, descobertas e diversão para fazer em casa!
            </p>
            <ul className="mt-6 grid gap-2 text-left sm:grid-cols-2">
              {["50 atividades infantis organizadas em 5 categorias.", "Atividades para brincar, desenhar, observar e aprender.", "Material digital para imprimir e utilizar em casa.", "Opções que não exigem materiais especiais."].map((t) => (
                <li key={t} className="flex gap-2 text-navy">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-mint" /> <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton>QUERO EXPLORAR AS ATIVIDADES!</CtaButton>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1.5"><FileText className="h-4 w-4 text-sky" /> Material digital em PDF</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-sky" /> Acesso após a confirmação do pagamento</span>
              <span className="flex items-center gap-1.5"><Printer className="h-4 w-4 text-sky" /> Imprima e utilize em casa</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-3xl bg-mint-soft" aria-hidden />
            <img src={cover.url} alt="Capa real do Kit Pequenos Exploradores — 50 Brincadeiras Infantis" width={768} height={1044} className="relative mx-auto w-full max-w-sm rounded-2xl shadow-soft" />
          </div>
        </div>
      </section>

      {/* 2. O QUE VOCÊ VAI RECEBER */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading title="Um Mundo de Descobertas Espera Pelo Seu Pequeno!" subtitle="Tudo organizado para transformar brincadeiras simples em momentos de criatividade e aprendizado." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <article key={c.title} className="rounded-3xl border bg-card p-6 shadow-soft">
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.color}`}>
                  <c.icon className="h-7 w-7 text-navy" />
                </div>
                <p className="text-xs font-bold tracking-widest text-coral">CATEGORIA {i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </article>
            ))}
            <div className="flex flex-col justify-center rounded-3xl bg-navy p-6 text-cream">
              <p className="font-display text-xl font-medium leading-snug">
                São 50 atividades organizadas em um único kit, para você escolher a brincadeira que combina com cada momento!
              </p>
              <p className="mt-3 text-sm opacity-80">
                Material 100% digital, em PDF — não é enviado pelos Correios. Para usar as folhas impressas, é preciso ter acesso a uma impressora.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. BENEFÍCIOS */}
      <section className="bg-mint-soft py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <SectionHeading title="Menos Tempo Pensando em Brincadeiras. Mais Momentos de Descoberta!" subtitle="Uma maneira prática de trazer mais criatividade e diversão para a rotina das crianças." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <article key={b.title} className="rounded-3xl bg-card p-6 shadow-soft">
                  <b.icon className="h-8 w-8 text-coral" />
                  <h3 className="mt-4 text-xl font-semibold text-navy">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground">{b.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <div className="bg-sun px-5 py-8 text-center">
        <p className="font-display text-2xl font-semibold text-navy">Grandes descobertas podem começar com uma simples folha de papel!</p>
      </div>

      {/* 4. BÔNUS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading title="E Tem Mais! Sua Aventura Vem Com Dois Presentes Especiais!" subtitle="Além das 50 atividades, você também recebe dois materiais complementares para deixar a experiência ainda mais divertida." />
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { img: bonusQuadro.url, tag: "BÔNUS 1", name: "Quadro de Conquistas do Pequeno Explorador", call: "Cada Pequena Conquista Merece Ser Celebrada!", text: "Um quadro infantil para acompanhar e celebrar as atividades realizadas pela criança. Uma forma lúdica de reconhecer seu envolvimento, incentivar a participação e tornar cada brincadeira ainda mais especial.", alt: "Quadro real de conquistas com checklist de atividades, nome, semana e espaço para desenhar", bg: "bg-sky-soft" },
              { img: bonusLivro.url, tag: "BÔNUS 2", name: "Mini Livro Para Colorir — Animais e Natureza", call: `${BONUS_DRAWING_COUNT} Desenhos Para Soltar a Imaginação!`, text: `Um mini livro digital com ${BONUS_DRAWING_COUNT} desenhos infantis de animais e natureza para colorir, ideal para complementar as brincadeiras e proporcionar momentos tranquilos de criatividade.`, alt: "Capa real do bônus 20 Desenhos Infantis — Animais e Natureza", bg: "bg-coral-soft" },
            ].map((b) => (
              <article key={b.tag} className="overflow-hidden rounded-3xl border bg-card shadow-soft">
                <div className={`${b.bg} p-6`}>
                  <img src={b.img} alt={b.alt} width={768} height={1100} loading="lazy" className="mx-auto aspect-[7/10] w-full max-w-sm rounded-2xl object-contain shadow-soft" />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-sun px-3 py-1 text-xs font-bold tracking-widest text-navy">{b.tag} · INCLUSO</span>
                  <h3 className="mt-4 text-2xl font-semibold text-navy">{b.name}</h3>
                  <p className="mt-1 font-display text-lg text-coral">{b.call}</p>
                  <p className="mt-3 text-muted-foreground">{b.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-xl text-navy">
            São 50 atividades, um quadro de conquistas e um mini livro com {BONUS_DRAWING_COUNT} desenhos para colorir. Mais opções para explorar, criar e se divertir!
          </p>
        </Reveal>
      </section>

      {/* 5. OFERTA */}
      <section id="oferta" className="scroll-mt-4 bg-sky-soft py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <SectionHeading title="Prepare-se Para Uma Nova Aventura!" subtitle="Garanta o Kit Pequenos Exploradores e tenha 50 atividades infantis, mais dois bônus digitais para complementar a diversão." />
            <div className="grid overflow-hidden rounded-3xl border-2 border-sun bg-card shadow-soft md:grid-cols-2">
              <div className="bg-sun-soft p-6">
                <img src={cover.url} alt="Capa do PDF Kit Pequenos Exploradores" width={768} height={1044} loading="lazy" className="mx-auto w-full max-w-xs rounded-2xl shadow-soft" />
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <img src={bonusQuadro.url} alt="Bônus 1: Quadro de Conquistas" width={768} height={1100} loading="lazy" className="aspect-[7/10] w-full rounded-xl object-contain shadow-soft" />
                  <img src={bonusLivro.url} alt="Bônus 2: Mini Livro Para Colorir — Animais e Natureza" width={768} height={1100} loading="lazy" className="aspect-[7/10] w-full rounded-xl object-contain shadow-soft" />
                </div>
              </div>
              <div className="flex flex-col gap-5 p-6 sm:p-8">
                <ul className="space-y-3">
                  {["Kit Pequenos Exploradores — 50 atividades infantis.", "Bônus 1 — Quadro de Conquistas do Pequeno Explorador.", `Bônus 2 — Mini Livro Para Colorir com ${BONUS_DRAWING_COUNT} desenhos de animais e natureza.`, "Arquivos digitais para utilização conforme as instruções."].map((t) => (
                    <li key={t} className="flex gap-3 text-navy">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-navy"><Check className="h-4 w-4" /></span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-lg text-muted-foreground">De <del>R$ {ORIGINAL_PRICE}</del> por apenas</p>
                  <p className="font-display text-6xl font-semibold text-navy">
                    <span className="align-top text-2xl">R$</span> {PRICE}
                  </p>
                  <p className="mt-2 font-semibold text-coral">Economize R$ 10,00</p>
                  <p className="text-sm text-muted-foreground">pagamento único · acesso digital após a confirmação</p>
                </div>
                <Countdown />
                <CtaButton onClick={buy}>QUERO MEU KIT COMPLETO!</CtaButton>
                <p className="flex items-start justify-center gap-2 text-center text-sm text-muted-foreground">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-mint" />
                  Você conta com 7 dias de garantia, conforme as condições da nossa política de reembolso.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CARROSSEL */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading title="Dê Uma Espiadinha no Mundo dos Pequenos Exploradores!" subtitle="Veja alguns exemplos das atividades que fazem parte do kit." />
          <Carousel slides={slides} />
          <p className="mt-4 text-center text-xs text-muted-foreground">Capa e páginas reais do Kit Pequenos Exploradores.</p>
        </Reveal>
      </section>

      {/* 7. DEPOIMENTOS */}
      {testimonials.length > 0 && <section className="bg-coral-soft py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <SectionHeading title="Quem Conheceu o Kit Conta Sua Experiência!" />
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((t) => (
                <article key={t.label} className="rounded-3xl bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt="Avatar ilustrativo; não é foto da cliente" width={512} height={512} loading="lazy" className="h-14 w-14 shrink-0 rounded-full object-cover" />
                    <div>
                      <p className="font-display font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.label}</p>
                    </div>
                  </div>
                  <p className="mt-4 italic text-muted-foreground">“{t.text}”</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-muted-foreground">Avatares ilustrativos; não representam fotos das clientes.</p>
          </Reveal>
        </div>
      </section>}

      {/* 8. GARANTIA */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-3xl border bg-card p-8 text-center shadow-soft md:flex-row md:text-left">
            <div className="flex h-36 w-36 shrink-0 flex-col items-center justify-center rounded-full border-8 border-sun bg-mint-soft font-display text-navy" aria-label="Selo de 7 dias de garantia">
              <span className="text-5xl font-semibold leading-none">7</span>
              <span className="text-sm font-semibold">DIAS DE</span>
              <span className="text-sm font-semibold">GARANTIA</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Você Tem 7 Dias de Garantia!</h2>
              <p className="mt-2 font-display text-lg text-coral">Queremos que você tenha tranquilidade ao conhecer o Kit Pequenos Exploradores.</p>
              <p className="mt-4 text-muted-foreground">Adquira o Kit Pequenos Exploradores com mais tranquilidade. Você terá 7 dias a partir da compra para conhecer o material e avaliar se ele atende às suas expectativas.</p>
              <p className="mt-3 text-muted-foreground">Se decidir solicitar o reembolso dentro desse prazo, poderá fazê-lo conforme a nossa política de garantia e os procedimentos de atendimento.</p>
              <div className="mt-6">
                <CtaButton variant="secondary">QUERO CONHECER O KIT</CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 9. FAQ */}
      <section className="bg-sun-soft py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <SectionHeading title="Ficou Com Alguma Dúvida?" />
            <div className="space-y-4">
              {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. RODAPÉ */}
      <footer className="bg-navy px-5 py-10 text-center text-cream">
        <p className="font-display text-xl font-semibold">LudoraKids</p>
        <p className="mt-2 text-sm opacity-80">© 2026 LudoraKids. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
