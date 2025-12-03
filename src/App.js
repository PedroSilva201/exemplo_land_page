import React, { useState } from 'react';
import { Menu, X, ArrowRight, Check, Star, Users, Zap, Shield } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      alert(`Obrigado! Email cadastrado: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-purple-900/80 backdrop-blur-md border-b border-purple-700/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FlowApp
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-purple-300 transition">Recursos</a>
              <a href="#pricing" className="hover:text-purple-300 transition">Preços</a>
              <a href="#testimonials" className="hover:text-purple-300 transition">Depoimentos</a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition">
                Começar Agora
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block hover:text-purple-300">Recursos</a>
              <a href="#pricing" className="block hover:text-purple-300">Preços</a>
              <a href="#testimonials" className="block hover:text-purple-300">Depoimentos</a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full">
                Começar Agora
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-500/30 rounded-full text-sm border border-purple-400/50">
              🚀 Novo: Integração com IA
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transforme Seu
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Negócio Digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
              A plataforma completa para automatizar processos, aumentar vendas e escalar sua empresa de forma inteligente
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-purple-400/50 backdrop-blur-sm focus:outline-none focus:border-purple-400 placeholder-purple-300"
              />
              <button 
                onClick={handleSubmit}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center justify-center gap-2"
              >
                Começar Grátis <ArrowRight size={20} />
              </button>
            </div>
            
            <p className="text-purple-300 text-sm">
              ✓ Grátis por 14 dias • Sem cartão de crédito • Cancele quando quiser
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
              alt="Dashboard" 
              className="rounded-2xl shadow-2xl border border-purple-500/30 w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-purple-950/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recursos Poderosos</h2>
            <p className="text-xl text-purple-200">Tudo que você precisa em um só lugar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Automação Inteligente",
                description: "Automatize tarefas repetitivas e foque no que realmente importa para seu negócio"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Gestão de Equipes",
                description: "Colabore em tempo real com sua equipe e acompanhe o progresso de cada projeto"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Segurança Avançada",
                description: "Seus dados protegidos com criptografia de ponta e backups automáticos"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Planos Transparentes</h2>
            <p className="text-xl text-purple-200">Escolha o melhor para seu negócio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "R$ 49",
                features: ["Até 5 usuários", "10 GB de armazenamento", "Suporte por email", "Relatórios básicos"]
              },
              {
                name: "Pro",
                price: "R$ 149",
                features: ["Até 20 usuários", "100 GB de armazenamento", "Suporte prioritário", "Relatórios avançados", "Integrações ilimitadas"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "R$ 499",
                features: ["Usuários ilimitados", "1 TB de armazenamento", "Suporte 24/7", "Relatórios personalizados", "API dedicada", "Gerente de conta"]
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-purple-400 transform scale-105' 
                    : 'bg-purple-800/30 border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-purple-200">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 hover:bg-purple-500'
                }`}>
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-purple-950/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-xl text-purple-200">Mais de 10.000 empresas confiam em nós</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "CEO, TechStart",
                content: "Aumentamos nossa produtividade em 300% desde que começamos a usar o FlowApp. Incrível!",
                rating: 5
              },
              {
                name: "João Santos",
                role: "Diretor de Marketing",
                content: "A automação nos economizou 20 horas por semana. Agora focamos no que realmente importa.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Fundadora, EcoStore",
                content: "Melhor investimento que fizemos. O ROI foi positivo já no primeiro mês de uso.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-purple-800/30 p-8 rounded-2xl border border-purple-500/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Junte-se a milhares de empresas que já estão crescendo com o FlowApp
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition inline-flex items-center gap-2">
            Comece Grátis Agora <ArrowRight size={24} />
          </button>
          <p className="text-purple-300 text-sm mt-4">
            Sem cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 py-12 px-6 border-t border-purple-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                FlowApp
              </div>
              <p className="text-purple-300 text-sm">
                Transformando negócios através da tecnologia
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><button onClick={() => {}} className="hover:text-white text-left">Recursos</button></li>
                <li><button onClick={() => {}} className="hover:text-white text-left">Preços</button></li>
                <li><button onClick={() => {}} className="hover:text-white text-left">Segurança</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><button onClick={() => {}} className="hover:text-white text-left">Sobre</button></li>
                <li><button onClick={() => {}} className="hover:text-white text-left">Blog</button></li>
                <li><button onClick={() => {}} className="hover:text-white text-left">Carreiras</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><button onClick={() => {}} className="hover:text-white text-left">Central de Ajuda</button></li>
                <li><button onClick={() => {}} className="hover:text-white text-left">Contato</button></li>
                <li><button onClick={() => {}} className="hover:text-white text-left">Status</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-800 pt-8 text-center text-purple-400 text-sm">
            <p>© 2024 FlowApp. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}