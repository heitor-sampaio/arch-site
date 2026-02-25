import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Database, 
  Workflow, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  Activity,
  Layers,
  Terminal,
  ShieldCheck,
  MessageSquare,
  Globe,
  Zap
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "", light = false }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="/img/logo.png" 
      alt="ARCH Sistemas Inteligentes" 
      className="h-6 md:h-9 w-auto object-contain"
      style={light ? { filter: 'brightness(0) invert(1)' } : {}}
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-black/5 bg-arch-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {['Manifesto', 'Pilares', 'Benchmark', 'Como Funciona'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-xs uppercase tracking-widest hover:text-arch-cyan transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contato"
            className="px-6 py-2 bg-arch-ink text-arch-bg text-xs uppercase tracking-widest hover:bg-arch-cyan hover:text-arch-ink transition-all duration-300"
          >
            Diagnóstico
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-arch-bg border-b border-black/5 p-8 flex flex-col gap-6 md:hidden"
          >
            {['Manifesto', 'Pilares', 'Benchmark', 'Como Funciona'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contato"
              className="w-full py-4 bg-arch-ink text-arch-bg text-xs uppercase tracking-widest text-center"
              onClick={() => setIsOpen(false)}
            >
              Agendar Diagnóstico
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Wireframe Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-px bg-arch-ink" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-arch-ink" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-arch-ink" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-arch-ink" />
        <div className="absolute left-2/4 top-0 w-px h-full bg-arch-ink" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-arch-ink" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-arch-cyan" />
            <span className="text-xs uppercase tracking-[0.3em] text-arch-cyan font-semibold">
              Sistemas de Alta Performancee
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-8 leading-[1.1]">
            Sistemas inteligentes que <span className="text-arch-cyan">cortam custos</span> e escalam sua eficiência.
          </h1>
          
          <p className="text-lg md:text-xl text-arch-ink/70 max-w-2xl mb-12 leading-relaxed">
            Elimine gargalos operacionais e recupere o tempo da sua equipe. Projetamos arquiteturas que automatizam o complexo para você focar no que realmente importa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contato"
              className="group relative px-8 py-5 bg-arch-ink text-arch-bg text-sm uppercase tracking-widest overflow-hidden transition-all inline-block"
            >
              <span className="relative z-10 flex items-center gap-3">
                Agendar Diagnóstico Técnico <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-arch-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <button className="px-8 py-5 border border-arch-ink/20 text-arch-ink text-sm uppercase tracking-widest hover:border-arch-copper hover:text-arch-copper transition-all">
              Ver Portfólio Técnico
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-6 flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-tighter opacity-40">Status do Sistema</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-arch-cyan animate-pulse" />
            <span className="text-[10px] font-mono">OPERACIONAL // 2026_ARCH_V1</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let packets: DataPacket[] = [];
    const particleCount = 35;
    const connectionDistance = 180;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
      pulseSpeed: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 3 + 1.5;
        this.pulse = 0;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const glow = Math.sin(this.pulse) * 0.5 + 0.5;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${glow * 0.1})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${0.4 + glow * 0.4})`;
        ctx.fill();
      }
    }

    class DataPacket {
      start: Particle;
      end: Particle;
      progress: number;
      speed: number;

      constructor(start: Particle, end: Particle) {
        this.start = start;
        this.end = end;
        this.progress = 0;
        this.speed = 0.005 + Math.random() * 0.01;
      }

      update() {
        this.progress += this.speed;
        return this.progress >= 1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const x = this.start.x + (this.end.x - this.start.x) * this.progress;
        const y = this.start.y + (this.end.y - this.start.y) * this.progress;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00F0FF';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00F0FF';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      particles = [];
      packets = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Randomly spawn packets
            if (Math.random() < 0.001) {
              packets.push(new DataPacket(particles[i], particles[j]));
            }
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      // Update and draw packets
      packets = packets.filter(packet => {
        const finished = packet.update();
        if (!finished) packet.draw(ctx);
        return !finished;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-32 bg-arch-ink text-arch-bg relative overflow-hidden">
      <NeuralNetworkBackground />
      <div className="scan-line" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-row-2 gap-20 relative z-10">
        <div className="max-w-3xl">
          <span className="text-arch-cyan text-xs uppercase tracking-[0.4em] mb-6 block">O Manifesto</span>
          <h2 className="text-3xl md:text-5xl mb-12 leading-tight">
            Engenharia aplicada a soluções que <span className="text-arch-cyan">potencializam o crescimento</span> e reduzem custos.
          </h2>
          <div className="space-y-8 text-arch-bg/60 leading-relaxed text-lg">
            <p>
              Muitas agências entregam fluxos isolados que geram dívida técnica e custos ocultos. Na ARCH, projetamos sistemas que reduzem drasticamente seu OpEx e recuperam milhares de horas produtivas.
            </p>
            <p>
              Nossa engenharia é focada em eliminar o trabalho manual e repetitivo, liberando sua equipe para focar no que realmente importa: o crescimento estratégico do seu negócio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-arch-bg/10 pt-20">
          {[
            { label: "Propriedade", value: "100%", sub: "Código e Infra do Cliente", color: "text-arch-cyan" },
            { label: "Escalabilidade", value: "Nativa", sub: "Arquitetura Cloud-First", color: "text-arch-copper" },
            { label: "Eficiência", value: "24/7", sub: "Sistemas Autônomos Ininterruptos", color: "text-arch-cyan" },
          ].map((stat, i) => (
            <div key={i} className="p-8 border border-arch-bg/5 hover:bg-white/5 transition-colors">
              <span className={`text-[10px] uppercase tracking-widest ${stat.color} mb-4 block`}>{stat.label}</span>
              <div className="text-3xl font-display mb-2">{stat.value}</div>
              <span className="text-[10px] opacity-40 uppercase">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Engenharia de Integrações",
      desc: "Elimine silos de dados e reduza custos de manutenção unificando sistemas legados em uma arquitetura moderna e eficiente.",
      icon: <Layers className="text-arch-cyan" />,
      tags: ["API-First", "Redução de Custos", "ETL"]
    },
    {
      title: "Sistemas Autônomos",
      desc: "Reduza o custo operacional e o erro humano com fluxos que operam 24/7, liberando sua equipe para tarefas de alto valor.",
      icon: <Workflow className="text-arch-cyan" />,
      tags: ["ROI", "Auto-Heal", "Eficiência"]
    },
    {
      title: "Arquitetura de Dados",
      desc: "Transforme dados brutos em vantagem competitiva com infraestruturas que aceleram a tomada de decisão e reduzem o tempo de resposta.",
      icon: <Database className="text-arch-cyan" />,
      tags: ["Vector DB", "Big Data", "Analytics"]
    }
  ];

  return (
    <section id="pilares" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-arch-cyan text-xs uppercase tracking-[0.4em] mb-6 block">Nossos Pilares</span>
            <h2 className="text-4xl md:text-6xl">Infraestrutura Inteligente.</h2>
          </div>
          <p className="text-arch-ink/50 max-w-sm text-sm uppercase leading-relaxed">
            Arquiteturas robustas desenhadas para eliminar gargalos técnicos e sustentar o crescimento acelerado da sua operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {services.map((s, i) => (
            <div key={i} className="bg-arch-bg p-12 group hover:bg-arch-ink transition-all duration-500">
              <div className="mb-12 p-4 border border-black/5 w-fit group-hover:border-white/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl mb-6 group-hover:text-arch-bg transition-colors">{s.title}</h3>
              <p className="text-arch-ink/60 mb-12 text-sm leading-relaxed group-hover:text-arch-bg/60 transition-colors">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 border border-black/10 uppercase tracking-widest group-hover:border-white/20 group-hover:text-arch-bg transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-arch-cyan text-xs uppercase tracking-[0.4em] mb-6 block">Contato</span>
          <h2 className="text-4xl md:text-7xl mb-8">Pronto para escalar?</h2>
          <p className="text-arch-ink/50 text-lg">
            Inicie seu diagnóstico técnico e descubra como a ARCH pode redesenhar sua eficiência operacional.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-black/5 shadow-2xl overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Avpa4fA5bfqZDAZUiCi2lh5oNtVI44pfrfv0bhl7fG_kJVVYZp5LOcp-ia2x_XkTfIo1wmuX4?gv=true" 
              style={{ border: 0}} 
              width="100%" 
              height="710"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-black/5 bg-arch-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div>
            <Logo className="mb-6" />
            <p className="text-arch-ink/40 text-xs max-w-xs leading-relaxed">
              Arquitetura de Sistemas Inteligentes para empresas que buscam a fronteira da eficiência tecnológica.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[10px] uppercase tracking-widest mb-6 opacity-40">Navegação</h5>
              <ul className="space-y-4 text-xs">
                <li><a href="#manifesto" className="hover:text-arch-cyan transition-colors">Manifesto</a></li>
                <li><a href="#pilares" className="hover:text-arch-cyan transition-colors">Pilares</a></li>
                <li><a href="#benchmark" className="hover:text-arch-cyan transition-colors">Benchmark</a></li>
                <li><a href="#como-funciona" className="hover:text-arch-cyan transition-colors">Como Funciona</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-widest mb-6 opacity-40">Legal</h5>
              <ul className="space-y-4 text-xs">
                <li><a href="#" className="hover:text-arch-cyan transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-arch-cyan transition-colors">Termos</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[10px] uppercase tracking-widest mb-6 opacity-40">Social</h5>
              <ul className="space-y-4 text-xs">
                <li><a href="#" className="hover:text-arch-cyan transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-arch-cyan transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-6">
          <span className="text-[10px] opacity-30 uppercase tracking-widest">© 2026 ARCH INTELLIGENT SYSTEMS. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-arch-cyan" />
             <span className="text-[10px] opacity-30 uppercase tracking-widest">LATAM // GLOBAL HQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Comparison = () => {
  const categories = [
    {
      label: "Tempo de Setup",
      arch: "Menos de 7 dias",
      free: "2-4 semanas",
      house: "3-6 meses",
      agency: "1-2 meses"
    },
    {
      label: "Nível Técnico",
      arch: "Arquitetura Sênior",
      free: "Iniciante / Júnior",
      house: "Especialista (Caro)",
      agency: "Genérico / Geralista"
    },
    {
      label: "Custo de Manutenção",
      arch: "Mínimo (Autônomo)",
      free: "Alto (Horas/Homem)",
      house: "Altíssimo (Headcount)",
      agency: "Médio (Retainers)"
    },
    {
      label: "Entregas",
      arch: "Propriedade Total do Cliente",
      free: "Código Frágil / Sem Dono",
      house: "Dependente de Equipe",
      agency: "Lock-in / Dependência"
    }
  ];

  return (
    <section id="benchmark" className="py-32 bg-arch-bg border-t border-black/5 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6 min-w-[800px]">
        <div className="text-center mb-20">
          <span className="text-arch-cyan text-xs uppercase tracking-[0.4em] mb-6 block">Benchmark</span>
          <h2 className="text-4xl md:text-6xl mb-8">ARCH vs. O Mercado</h2>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/10">
              <th className="py-8 px-4 text-[10px] uppercase tracking-widest opacity-40">Critério</th>
              <th className="py-8 px-4">
                <div className="flex items-center gap-2">
                  <Logo className="scale-75 origin-left" />
                  <div className="w-4 h-4 rounded-full bg-arch-cyan flex items-center justify-center">
                    <ShieldCheck size={10} className="text-arch-ink" />
                  </div>
                </div>
              </th>
              <th className="py-8 px-4 text-[10px] uppercase tracking-widest opacity-40">Freelancers</th>
              <th className="py-8 px-4 text-[10px] uppercase tracking-widest opacity-40">In-house</th>
              <th className="py-8 px-4 text-[10px] uppercase tracking-widest opacity-40">Outras Agências</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            {categories.map((cat, i) => (
              <tr key={i} className="border-b border-black/5 hover:bg-black/[0.02] transition-colors">
                <td className="py-8 px-4 font-semibold uppercase tracking-wider">{cat.label}</td>
                <td className="py-8 px-4">
                  <span className="bg-arch-cyan/10 text-arch-cyan px-4 py-2 border border-arch-cyan/20">
                    {cat.arch}
                  </span>
                </td>
                <td className="py-8 px-4 opacity-50">{cat.free}</td>
                <td className="py-8 px-4 opacity-50">{cat.house}</td>
                <td className="py-8 px-4 opacity-50">{cat.agency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultoria Técnica",
      desc: "Fale com um arquiteto de sistemas sênior e discuta os requisitos críticos do seu projeto. Entendemos sua visão para desenhar a fundação correta.",
      link: "Agendar Conversa"
    },
    {
      number: "02",
      title: "Escopo & Blueprint",
      desc: "Fornecemos um roadmap detalhado, incluindo arquitetura técnica, cronograma e orçamento preciso para a implementação do sistema.",
      link: "Ver Proposta"
    },
    {
      number: "03",
      title: "Kick-off & Execução",
      desc: "Com a proposta validada, iniciamos o desenvolvimento imediato. Foco total em entrega de valor e estabilidade sistêmica.",
      link: "Iniciar Projeto"
    }
  ];

  return (
    <section id="como-funciona" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-arch-cyan text-xs uppercase tracking-[0.4em] mb-6 block">Workflow</span>
          <h2 className="text-4xl md:text-6xl mb-8 font-display">Como funciona</h2>
          <p className="text-arch-ink/50 text-lg leading-relaxed">
            A automação é complicada – mas implementá-la não precisa ser. <br className="hidden md:block" />
            Simplificamos o processo para você em 3 etapas estratégicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-black/5 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-16 h-16 bg-arch-ink text-arch-bg flex items-center justify-center font-display text-xl mb-8 border border-arch-cyan/20">
                {step.number}
              </div>
              <h3 className="text-xl mb-4 font-display">{step.title}</h3>
              <p className="text-arch-ink/60 text-sm leading-relaxed mb-8 min-h-[80px]">
                {step.desc}
              </p>
              <a 
                href="#contato" 
                className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-arch-cyan hover:text-arch-ink transition-colors"
              >
                {step.link} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "OpenAI", icon: <Cpu size={20} /> },
    { name: "Claude", icon: <Activity size={20} /> },
    { name: "n8n.io", icon: <Workflow size={20} /> },
    { name: "WhatsApp", icon: <MessageSquare size={20} /> },
    { name: "Google", icon: <Globe size={20} /> },
    { name: "Make", icon: <Layers size={20} /> },
    { name: "Zapier", icon: <Zap size={20} /> },
    { name: "Python", icon: <Terminal size={20} /> },
    { name: "AWS", icon: <Database size={20} /> },
  ];

  const marqueeItems = [...techs, ...techs, ...techs];

  return (
    <section className="py-24 bg-arch-ink overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#00F0FF,transparent_70%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-arch-cyan text-xs uppercase tracking-[0.4em] mb-4 block">Ecosistema</span>
            <h2 className="text-3xl md:text-5xl text-arch-bg font-display">Tecnologias de Ponta.</h2>
          </div>
          <p className="text-arch-bg/40 max-w-xs text-[10px] uppercase tracking-widest leading-relaxed">
            Integramos as melhores ferramentas do mercado para construir sistemas resilientes e escaláveis.
          </p>
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-8 pr-8"
        >
          {marqueeItems.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-6 px-10 py-6 border border-white/10 bg-white/[0.02] hover:bg-arch-cyan/10 hover:border-arch-cyan/30 transition-all group"
            >
              <div className="text-arch-cyan group-hover:scale-110 transition-transform duration-500">
                {tech.icon}
              </div>
              <span className="text-arch-bg font-display text-sm uppercase tracking-[0.2em]">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Manifesto />
      <Services />
      <Comparison />
      <Process />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
