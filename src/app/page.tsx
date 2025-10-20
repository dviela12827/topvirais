import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, AlertTriangle, Unlock, ShieldCheck, Lock, PlayCircle, Tv, FlaskConical, Laugh, Film, Trophy, Globe, DollarSign, BrainCircuit, User, Mic, Dumbbell, Sparkles, Briefcase, Rocket, Play, Users, Lightbulb, Gift, Wrench, Smartphone, Mail, Undo2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ArsenalCard } from "@/components/arsenal-card";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { AnimatedLock } from "@/components/animated-lock";
import { DynamicBackground } from "@/components/dynamic-background";
import { TransformationShowcase } from "@/components/transformation-showcase";
import { AudienceCard } from "@/components/audience-card";

const arsenalItems = [
  { imageUrl: "https://i.imgur.com/61l6Xj4.png", title: "Cortes Family Guy", description: "+350 clipes hilários para engajamento instantâneo.", icon: Tv },
  { imageUrl: "https://i.imgur.com/txA8GXn.png", title: "Cortes Rick and Morty", description: "+100 doses de loucura para um público fiel.", icon: FlaskConical },
  { imageUrl: "https://i.imgur.com/XrLnfj6.png", title: "Cortes Comédia", description: "Risadas e compartilhamentos garantidos para crescer.", icon: Laugh },
  { imageUrl: "https://i.imgur.com/sCb0kIY.png", title: "Cortes Filmes & Séries", description: "Cenas icônicas que todos amam e compartilham.", icon: Film },
  { imageUrl: "https://i.imgur.com/BWVi7Ye.png", title: "Cortes Futebol", description: "Momentos épicos do esporte mais popular do mundo.", icon: Trophy },
  { imageUrl: "https://i.imgur.com/EpMAOun.png", title: "Cortes Gringos Virais", description: "+10k vídeos exclusivos para você se destacar da concorrência.", icon: Globe },
  { imageUrl: "https://i.imgur.com/iAbiYQ4.png", title: "Cortes Milionários", description: "Lifestyle, mindset e estratégias de sucesso.", icon: DollarSign },
  { imageUrl: "https://i.imgur.com/ziZDhel.png", title: "Cortes Motivacionais", description: "Discursos impactantes para inspirar sua audiência.", icon: BrainCircuit },
  { imageUrl: "https://i.imgur.com/4jWRc9B.png", title: "Cortes Ruyter", description: "Conteúdo viral pronto para atrair milhares de seguidores.", icon: User },
  { imageUrl: "https://i.imgur.com/yl03jSK.png", title: "Cortes Podcast", description: "Insights valiosos dos maiores podcasts do Brasil e do mundo.", icon: Mic },
  { imageUrl: "https://i.imgur.com/becCsxa.png", title: "Cortes Fitness Viral", description: "Conteúdos de treino e motivação para o nicho fitness.", icon: Dumbbell },
  { imageUrl: "https://i.imgur.com/q2raevA.png", title: "Cortes Satisfatório", description: "Conteúdos relaxantes que prendem a atenção e geram views.", icon: Sparkles },
  { imageUrl: "https://i.imgur.com/PqndCmS.png", title: "Cortes Marçal", description: "Estratégias e insights do universo do marketing digital.", icon: Briefcase },
];

const testimonials = [
  {
    name: "João Pedro, 22 anos",
    initials: "JP",
    result: "R$ 4.200 no último mês",
    text: "Cara, eu não acreditava que ia dar certo. Comecei postando os cortes do Family Guy e em 2 semanas já tinha feito minha primeira venda. Agora tô tirando mais que meu salário!",
  },
  {
    name: "Ana Silva, estudante",
    initials: "AS",
    result: "R$ 2.800 trabalhando 2h/dia",
    text: "Eu precisava de uma renda extra pra faculdade. Com os vídeos de comédia e motivacionais consegui uma grana boa trabalhando só 2 horas por dia. Mudou minha vida!",
  },
  {
    name: "Roberto Costa, aposentado",
    initials: "RC",
    result: "R$ 3.500 sem aparecer",
    text: "Com 58 anos pensei que era tarde pra internet. Mas os cortes de futebol e podcast me deram uma renda extra incrível. Não preciso nem aparecer no vídeo!",
  }
];

const faqs = [
  { 
    q: "O acesso é vitalício MESMO?", 
    a: "Sim! O acesso é seu para sempre. Você paga uma única vez e pode acessar todo o conteúdo e futuras atualizações sem nenhum custo adicional.",
    icon: Lock
  },
  { 
    q: "Preciso de algum programa ou saber editar?", 
    a: "Não precisa! Nossos vídeos já vêm prontos e legendados. É só baixar e postar. Para quem quer ir além, incluímos tutoriais simples, mas não é necessário saber editar para começar.",
    icon: Wrench
  },
  { 
    q: "Funciona no celular?", 
    a: "Com certeza! Todo o nosso conteúdo é acessível e pode ser baixado diretamente pelo seu celular. Você pode gerenciar suas postagens de qualquer lugar, a qualquer hora.",
    icon: Smartphone
  },
  { 
    q: "Como recebo o acesso?", 
    a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções e o link para acessar a plataforma.",
    icon: Mail
  },
  { 
    q: "E se eu me arrepender?", 
    a: "Risco zero! Você tem 7 dias de garantia total. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.",
    icon: Undo2
  },
];

const audienceItems = [
  { icon: Rocket, title: "Iniciantes no Digital" },
  { icon: Play, title: "Donos de Canais de Cortes" },
  { icon: Users, title: "Criadores de Conteúdo" },
  { icon: DollarSign, title: "Afiliados e Produtores" },
  { icon: Briefcase, title: "Agências e Social Medias" },
  { icon: Lightbulb, title: "Empreendedores Visionários" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <DynamicBackground />
      <main className="flex-1 relative z-0">
        <section id="oferta" className="pt-24 pb-12 md:pt-32 md:pb-20 text-center bg-transparent relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
            <AnimatedSection>
              <AnimatedLock />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter max-w-3xl mx-auto">
                Transforme <span className="underline decoration-primary">Vídeos</span> em <span className="text-primary">Dinheiro</span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
                <span className="text-primary">O vício que te distrai…</span> É o mesmo que <span className="text-primary">enriquece aos outros.</span>
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="mt-12 w-full max-w-md">
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-b from-primary/50 to-primary/20 shadow-2xl shadow-primary/20">
                <Card className="bg-card/95 backdrop-blur-sm p-6 sm:p-8 rounded-[15px]">
                  <CardContent className="p-0 flex flex-col items-center gap-4">
                    <div className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground shadow-md">
                      OFERTA LIMITADA
                    </div>
                    <p className="text-muted-foreground text-lg">De <span className="line-through">R$197</span> por apenas</p>
                    <div className="text-6xl sm:text-7xl font-black text-foreground">
                      R$9,90
                    </div>
                    <p className="text-muted-foreground">ou 12x de R$1,00 no cartão</p>
                    <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 p-2 rounded-md">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Você economiza R$187,10</span>
                    </div>
                    <a href="https://www.ggcheckout.com/checkout/v2/UuhrjJgKfiuu39pg3y7H" className="w-full">
                      <Button size="lg" className="w-full text-lg font-bold h-16 bg-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 hover:bg-green-600">
                        <Unlock className="h-5 w-5 mr-2"/>
                        DESTRAVAR ACESSO AGORA
                      </Button>
                    </a>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span>7 dias de Garantia ou seu dinheiro de volta</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="transformation" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="bg-card/90 backdrop-blur-md rounded-2xl border border-primary/20 p-6 md:p-10 relative overflow-hidden shadow-2xl shadow-primary/10">
              <AnimatedSection>
                <TransformationShowcase />
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <section id="conteudo" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="bg-card/90 backdrop-blur-md rounded-2xl border border-primary/20 p-6 md:p-10 relative overflow-hidden shadow-2xl shadow-primary/10">
              <div 
                className="absolute inset-0 -z-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              ></div>
              <AnimatedSection>
                <h2 className="text-3xl md:text-5xl font-bold text-center">SEU <span className="text-primary">ARSENAL</span> DE CONTEÚDO VIRAL</h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
                  Cada item abaixo é uma ferramenta poderosa e testada para dominar qualquer nicho.
                </p>
              </AnimatedSection>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {arsenalItems.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 50}>
                    <ArsenalCard imageUrl={item.imageUrl} title={item.title} description={item.description} icon={item.icon} />
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection delay={300} className="mt-12 text-center">
                  <a href="https://www.ggcheckout.com/checkout/v2/UuhrjJgKfiuu39pg3y7H">
                    <Button size="lg" className="w-full md:w-auto text-lg font-bold h-16 bg-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 hover:bg-green-600">
                        <Unlock className="h-5 w-5 mr-2"/>
                        Quero todo esse conteúdo
                    </Button>
                  </a>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="para-quem" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-center">
                Pra Quem é o <span className="text-primary">TopVirais</span>?
              </h2>
            </AnimatedSection>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              {audienceItems.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <AudienceCard icon={item.icon} title={item.title} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-primary uppercase">
                        Veja os resultados reais:
                    </h2>
                </AnimatedSection>
                <AnimatedSection delay={200} className="mt-12">
                  <TestimonialCarousel testimonials={testimonials} />
                </AnimatedSection>
            </div>
        </section>
        
        <section id="faq" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-center"><span className="text-primary">Perguntas</span> Frequentes</h2>
              <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
                Tiramos todas as suas dúvidas para você começar com total confiança.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200} className="mt-12">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map(({ q, a, icon: Icon }, index) => (
                   <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 rounded-lg border border-primary/20 px-4 transition-all duration-300 hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                    <AccordionTrigger className="text-left font-semibold text-base sm:text-lg hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                        <span>{q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base sm:text-lg text-muted-foreground pb-4 pl-12">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>
        
        <section id="final-cta" className="bg-transparent py-20">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black text-primary">Sua Última Chance</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
                As vagas com 95% de desconto estão se esgotando rapidamente. Após o fim da promoção, o preço voltará para R$197. Não perca essa oportunidade única.
              </p>
              <div className="mt-8">
                <a href="https://www.ggcheckout.com/checkout/v2/UuhrjJgKfiuu39pg3y7H">
                  <Button size="lg" className="w-full md:w-auto text-lg font-bold h-16 bg-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 hover:bg-green-600">
                    <Unlock className="h-5 w-5 mr-2"/> SIM, QUERO ACESSO IMEDIATO!
                  </Button>
                </a>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-primary">🛡️ GARANTIA BLINDADA 7 DIAS</p>
                <p className="text-sm text-muted-foreground/50">Risco zero para você. Satisfação garantida ou seu dinheiro de volta.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
}
