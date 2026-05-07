import React from 'react';
import {
  Terminal, Code2, GitMerge, Database, FileJson,
  PlayCircle, GitBranch, ShieldCheck, ChevronRight, Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => (
  <header className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyberpunk-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-cyberpunk-cyan/30 text-cyberpunk-cyan text-sm font-mono uppercase tracking-wider">
          <Terminal size={16} />
          <span>v1.0.0 — Stable Release</span>
        </div>
        <div className="mb-8 flex justify-center">
          <img src="/Logo ENIGMA.png" alt="Enigma Compiler Logo" className="h-32 md:h-48 object-contain drop-shadow-[0_0_25px_rgba(14,165,233,0.5)]" />
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
          Un Lenguaje de Dominio Específico (DSL) para la gestión segura y eficiente de políticas de control de accesos empresariales (RBAC/ABAC).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
          <div className="glass-panel p-6 rounded-xl border-l-4 border-l-cyberpunk-cyan hover:bg-cyberpunk-panel transition-colors">
            <h3 className="text-cyberpunk-cyan font-bold mb-2 uppercase tracking-wide text-sm">Equipo de Desarrollo</h3>
            <ul className="space-y-1 text-gray-300 font-medium">
              <li>• Jordin García</li>
              <li>• Victor Chan</li>
              <li>• German Archila</li>
            </ul>
          </div>
          <div className="glass-panel p-6 rounded-xl border-l-4 border-l-cyberpunk-magenta hover:bg-cyberpunk-panel transition-colors">
            <h3 className="text-cyberpunk-magenta font-bold mb-2 uppercase tracking-wide text-sm">Detalles Académicos</h3>
            <ul className="space-y-1 text-gray-300 font-medium">
              <li><span className="text-gray-500">Curso:</span> Compiladores</li>
              <li><span className="text-gray-500">Docente:</span> Jorge Tello</li>
              <li><span className="text-gray-500">Fecha:</span> 30/04/2026</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#demostracion" className="px-8 py-4 bg-cyberpunk-cyan text-cyberpunk-bg font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.4)]">
            <PlayCircle size={20} />
            Ver Demostración
          </a>
          <a href="https://github.com/jordin-garcia/pagina_web_enigma.git" target="_blank" rel="noreferrer" className="px-8 py-4 glass-panel text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/20">
            <GitBranch size={20} />
            Repositorio GitHub
          </a>
        </div>
      </motion.div>
    </div>
  </header>
);

const SectionHeading = ({ title, subtitle, icon: Icon, color = "cyan" }) => {
  const colorClasses = {
    cyan: 'shadow-[0_0_15px_rgba(14,165,233,0.3)] bg-cyberpunk-cyan/20 text-cyberpunk-cyan border-cyberpunk-cyan/30',
    magenta: 'shadow-[0_0_15px_rgba(183,0,255,0.3)] bg-cyberpunk-magenta/20 text-cyberpunk-magenta border-cyberpunk-magenta/30',
    green: 'shadow-[0_0_15px_rgba(4,120,87,0.3)] bg-cyberpunk-green/20 text-cyberpunk-green border-cyberpunk-green/30',
    yellow: 'shadow-[0_0_15px_rgba(255,204,0,0.3)] bg-cyberpunk-yellow/20 text-cyberpunk-yellow border-cyberpunk-yellow/30',
  };

  return (
    <div className="mb-12">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 border ${colorClasses[color]}`}>
        <Icon size={24} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
    </div>
  );
};

const ArchitectureDiagram = () => {
  const steps = [
    { name: "Código", icon: Code2, color: "text-gray-400", border: "border-gray-600", shadow: "shadow-[0_0_15px_rgba(156,163,175,0.2)]" },
    { name: "Scanner", icon: Terminal, color: "text-cyberpunk-cyan", border: "border-cyberpunk-cyan/50", shadow: "shadow-[0_0_15px_rgba(14,165,233,0.3)]" },
    { name: "Parser", icon: GitMerge, color: "text-cyberpunk-magenta", border: "border-cyberpunk-magenta/50", shadow: "shadow-[0_0_15px_rgba(183,0,255,0.3)]" },
    { name: "Semántica", icon: ShieldCheck, color: "text-cyberpunk-green", border: "border-cyberpunk-green/50", shadow: "shadow-[0_0_15px_rgba(4,120,87,0.3)]" },
    { name: "Salida JSON", icon: FileJson, color: "text-cyberpunk-yellow", border: "border-cyberpunk-yellow/50", shadow: "shadow-[0_0_15px_rgba(255,204,0,0.3)]" }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-24 w-full py-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col items-center justify-center w-36 h-36 rounded-xl glass-panel border ${step.border} ${step.shadow} relative z-10 hover:-translate-y-2 transition-transform duration-300`}
          >
            <step.icon size={36} className={`mb-3 ${step.color}`} />
            <span className="text-sm font-bold text-center text-white">{step.name}</span>
          </motion.div>

          {index < steps.length - 1 && (
            <>
              {/* Arrow Desktop */}
              <motion.div 
                className="hidden lg:flex flex-col items-center justify-center relative w-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="h-1 w-full bg-white/10 relative overflow-hidden rounded-full">
                  <motion.div 
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-cyberpunk-cyan to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </div>
              </motion.div>
              {/* Arrow Mobile */}
              <motion.div 
                className="flex lg:hidden flex-col items-center justify-center h-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <ChevronRight className="text-gray-500 rotate-90" size={24} />
              </motion.div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const FeaturePhase = ({ num, title, description, items, icon, isRight, color, codeSnippet }) => {
  const badgeClasses = {
    cyan: 'bg-cyberpunk-cyan/20 text-cyberpunk-cyan border-cyberpunk-cyan/30',
    magenta: 'bg-cyberpunk-magenta/20 text-cyberpunk-magenta border-cyberpunk-magenta/30',
    green: 'bg-cyberpunk-green/20 text-cyberpunk-green border-cyberpunk-green/30',
    yellow: 'bg-cyberpunk-yellow/20 text-cyberpunk-yellow border-cyberpunk-yellow/30',
  };

  const textClasses = {
    cyan: 'text-cyberpunk-cyan',
    magenta: 'text-cyberpunk-magenta',
    green: 'text-cyberpunk-green',
    yellow: 'text-cyberpunk-yellow',
  };

  const content = (
    <div className="flex-1">
      <div className={`inline-block px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-wider border ${badgeClasses[color]}`}>
        Fase {num}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`${textClasses[color]} shrink-0 mt-0.5`} size={18} />
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const visual = (
    <div className="flex-1 scanline">
      <div className="glass-panel p-6 rounded-2xl h-full border-t border-white/10">
        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs font-mono text-gray-500">enigma_compiler_{num}.log</span>
        </div>
        <pre className="font-mono text-sm overflow-x-auto text-gray-300">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-12 py-16 border-b border-white/5 ${isRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      {content}
      {visual}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-cyberpunk-bg selection:bg-cyberpunk-cyan/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-cyberpunk-cyan/20">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Logo ENIGMA.png" alt="Enigma Logo" className="h-8 object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#introduccion" className="hover:text-white transition-colors">Introducción</a>
            <a href="#descripcion-lenguaje" className="hover:text-white transition-colors">Lenguaje</a>
            <a href="#gramatica" className="hover:text-white transition-colors">Gramática</a>
            <a href="#fases" className="hover:text-white transition-colors">Fases</a>
            <a href="#demostracion" className="hover:text-white transition-colors">Demostración</a>
          </div>
        </div>
      </nav>

      <Hero />

      <main className="container mx-auto px-6 py-20 relative z-10">
        {/* Introducción */}
        <section id="introduccion" className="py-20 border-t border-white/5">
          <SectionHeading
            icon={Code2} color="cyan"
            title="¿Qué es Enigma?"
            subtitle="Un lenguaje diseñado específicamente para definir, validar y exportar políticas de seguridad en entornos corporativos."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Lenguaje de Dominio Específico</h3>
              <p className="text-gray-400">Diseñado con una sintaxis clara en español para que administradores de sistemas y auditores puedan definir reglas sin ser programadores expertos.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-4">RBAC & ABAC</h3>
              <p className="text-gray-400">Soporta Control de Acceso Basado en Roles (RBAC) y Control de Acceso Basado en Atributos (ABAC) con condiciones lógicas.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Compilación Segura</h3>
              <p className="text-gray-400">Implementa recuperación de errores en modo pánico y 7 validaciones semánticas estrictas para garantizar políticas consistentes.</p>
            </div>
          </div>
        </section>

        {/* Descripción del Lenguaje */}
        <section id="descripcion-lenguaje" className="py-20 border-t border-white/5">
          <SectionHeading
            icon={FileJson} color="magenta"
            title="Descripción del Lenguaje"
            subtitle="Conoce las instrucciones y la estructura que hacen de Enigma un DSL poderoso."
          />
          <div className="glass-panel p-8 rounded-2xl">
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Enigma es un lenguaje especializado para controlar el acceso a la información en una empresa de ventas. Permite establecer qué empleados pueden acceder a determinados módulos, qué acciones pueden realizar y bajo qué condiciones de manera estructurada mediante palabras reservadas.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyberpunk-cyan mb-4">Instrucciones y Sintaxis</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><strong className="text-white">Definición de Entidades:</strong> <code className="text-cyberpunk-magenta">Definir Rol</code>, <code className="text-cyberpunk-magenta">Definir Usuario</code>, <code className="text-cyberpunk-magenta">Definir Modulo</code></li>
                  <li><strong className="text-white">Asignación de Accesos:</strong> Vincular roles con permisos usando <code className="text-cyberpunk-magenta">Rol [id] = [accion] [id];</code></li>
                  <li><strong className="text-white">Control de Flujo Lógico:</strong> Permite establecer condicionales para reglas dinámicas <code className="text-cyberpunk-magenta">Si [condicion] Entonces &#123; ... &#125;</code></li>
                  <li><strong className="text-white">Operaciones de Negocio:</strong> Acciones soportadas sobre módulos como <code className="text-cyberpunk-magenta">Consultar</code>, <code className="text-cyberpunk-magenta">Registrar</code>, <code className="text-cyberpunk-magenta">Eliminar</code></li>
                </ul>
              </div>
              <div className="bg-black/30 p-5 rounded-xl border border-white/10 font-mono text-sm text-gray-300">
                <span className="text-gray-500">{"// Ejemplo de un programa válido en Enigma"}</span><br/><br/>
                <span className="text-cyberpunk-cyan">Definir</span> Modulo Ventas;<br/>
                <span className="text-cyberpunk-cyan">Definir</span> Rol Gerente;<br/><br/>
                <span className="text-cyberpunk-cyan">Si</span> Verdadero <span className="text-cyberpunk-cyan">Entonces</span> &#123;<br/>
                &nbsp;&nbsp;Rol Gerente = <span className="text-cyberpunk-magenta">Acceder</span> Ventas;<br/>
                &#125;<br/>
              </div>
            </div>
          </div>
        </section>

        {/* Gramática BNF */}
        <section id="gramatica" className="py-20 border-t border-white/5">
          <SectionHeading
            icon={Code2} color="green"
            title="Gramática Formal (BNF)"
            subtitle="Las reglas de producción que definen la estructura sintáctica del lenguaje Enigma."
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-2 md:p-6 rounded-2xl border border-cyberpunk-green/30 shadow-[0_0_30px_rgba(4,120,87,0.1)]"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 text-cyberpunk-green bg-cyberpunk-green/5">
                    <th className="p-4 font-mono font-bold rounded-tl-xl">No Terminal</th>
                    <th className="p-4 font-mono font-bold w-12 text-center">::=</th>
                    <th className="p-4 font-mono font-bold rounded-tr-xl">Producción</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 font-mono text-sm sm:text-base">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;programa&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4">&lt;lista_instrucciones&gt;</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;lista_instrucciones&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4">&lt;instruccion&gt; &lt;lista_instrucciones&gt; <span className="text-gray-500 mx-2">|</span> ε</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;instruccion&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4">&lt;definicion&gt; <span className="text-gray-500 mx-2">|</span> &lt;asignacion&gt; <span className="text-gray-500 mx-2">|</span> &lt;condicional&gt;</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;definicion&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4"><span className="text-cyberpunk-magenta">Definir</span> &lt;tipo_entidad&gt; <span className="text-white">IDENTIFICADOR</span> <span className="text-yellow-500">;</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;tipo_entidad&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4"><span className="text-cyberpunk-magenta">Rol</span> <span className="text-gray-500 mx-2">|</span> <span className="text-cyberpunk-magenta">Usuario</span> <span className="text-gray-500 mx-2">|</span> <span className="text-cyberpunk-magenta">Modulo</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;asignacion&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4"><span className="text-cyberpunk-magenta">Rol</span> <span className="text-white">IDENTIFICADOR</span> <span className="text-yellow-500">=</span> &lt;accion&gt; <span className="text-white">IDENTIFICADOR</span> <span className="text-yellow-500">;</span></td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;accion&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4"><span className="text-cyberpunk-magenta">Acceder</span> <span className="text-gray-500 mx-2">|</span> <span className="text-cyberpunk-magenta">Crear</span> <span className="text-gray-500 mx-2">|</span> <span className="text-cyberpunk-magenta">Modificar</span> <span className="text-gray-500 mx-2">|</span> <span className="text-cyberpunk-magenta">Eliminar</span></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-cyberpunk-cyan">&lt;condicional&gt;</td>
                    <td className="p-4 text-center text-gray-500">::=</td>
                    <td className="p-4"><span className="text-cyberpunk-magenta">Si</span> &lt;expresion&gt; <span className="text-cyberpunk-magenta">Entonces</span> <span className="text-yellow-500">&#123;</span> &lt;lista_instrucciones&gt; <span className="text-yellow-500">&#125;</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Fases del Compilador */}
        <section id="fases" className="py-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">El Pipeline <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-cyan to-blue-500">Interno</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Conoce cómo Enigma transforma texto plano en un árbol lógico validado estructural y semánticamente.</p>
          </div>

          <ArchitectureDiagram />

          <FeaturePhase
            num="1" color="cyan" isRight={false} icon={Terminal}
            title="Analizador Léxico (Scanner)"
            description="El compilador lee el código fuente carácter por carácter y lo agrupa en unidades lógicas llamadas 'Tokens'. Elimina espacios en blanco y comentarios."
            items={[
              "Identificación de Palabras Reservadas (Definir, Rol, Usuario, Si, Entonces, Permitir, etc).",
              "Reconocimiento de identificadores, números, y símbolos/operadores (=, ==, <, >, {, }, ;).",
              "Detección de errores léxicos: Identifica símbolos no definidos en el alfabeto (ej. 'Usuario@1' lanza error por el símbolo '@')."
            ]}
            codeSnippet={`// Entrada:
Definir Rol Admin;

// Salida (Tokens):
[TOKEN_PR_DEFINIR, "Definir", Línea 1]
[TOKEN_PR_ROL, "Rol", Línea 1]
[TOKEN_IDENTIFICADOR, "Admin", Línea 1]
[TOKEN_PUNTO_Y_COMA, ";", Línea 1]`}
          />

          <FeaturePhase
            num="2" color="magenta" isRight={true} icon={GitMerge}
            title="Analizador Sintáctico (Parser)"
            description="Verifica que el orden de los tokens respete la gramática del lenguaje (BNF). Transforma la lista de tokens en una estructura jerárquica: el AST."
            items={[
              "Verificación mediante reglas de gramática BNF (ej. <programa> ::= <lista_instrucciones>).",
              "Código Válido: 'Rol Gerente = Acceder Reportes;' (Cumple la estructura y usa símbolos permitidos).",
              "Código Inválido: 'Acceder == Ventas;' (Falla porque '==' no está definido en el contexto gramatical de esta instrucción)."
            ]}
            codeSnippet={`// Árbol Sintáctico (AST) generado:
ProgramNode
└── DefinicionEntidadNode (Rol: Admin)
└── AsignacionRolAccionNode
    ├── Identificador: Admin
    └── ReglaSeguridadNode
        ├── Accion: Permitir
        ├── Operacion: Crear
        └── Modulo: Usuarios`}
          />

          <FeaturePhase
            num="3" color="green" isRight={false} icon={ShieldCheck}
            title="Analizador Semántico"
            description="Da 'significado' a las estructuras validando la coherencia y las reglas de negocio usando el patrón Visitor sobre el AST."
            items={[
              "Verifica que las entidades (Roles, Módulos) existan antes de ser usadas.",
              "Valida compatibilidad de tipos en expresiones booleanas y aritméticas.",
              "Aplica 7 reglas estrictas (ej. Un usuario no puede tener roles inexistentes)."
            ]}
            codeSnippet={`// Error Semántico Detectado:
Definir Usuario "Juan" Rol Gerente;
// ↑ Error SEM-02: El rol 'Gerente' 
// no ha sido definido previamente.

// Validación ABAC correcta:
Si (HoraActual > 18) Entonces {
  Denegar Acceder Sistema;
}`}
          />

          <FeaturePhase
            num="4" color="yellow" isRight={true} icon={Database}
            title="Tabla de Símbolos"
            description="Estructura de datos en memoria que actúa como el 'cerebro' del compilador guardando el contexto de todas las entidades declaradas."
            items={[
              "Almacena identificadores, tipos (Rol, Usuario, Módulo), subtipos y ámbitos.",
              "Registra las políticas de seguridad vinculadas a cada Rol.",
              "Permite generar el historial (snapshots) para el Modo Didáctico visual de la GUI."
            ]}
            codeSnippet={`| Identificador | Tipo    | Rol Vinculado | Políticas          | Lín |
|---------------|---------|---------------|--------------------|-----|
| Admin         | Rol     | -             | [Permitir, Módulo] | 1   |
| Juan          | Usuario | Admin         | -                  | 2   |
| Ventas        | Módulo  | -             | -                  | 3   |
| HoraActual    | ABAC    | -             | -                  | 4   |`}
          />

          <FeaturePhase
            num="5" color="cyan" isRight={false} icon={FileJson}
            title="Generación de Código (Salida JSON)"
            description="Una vez validado el programa, el AST y la Tabla de Símbolos se traducen a un formato estándar consumible por aplicaciones de terceros."
            items={[
              "Exportación a JSON estructurado.",
              "Matriz de Accesos consolidada por Rol y Módulo.",
              "Traducción de Reglas Condicionales ABAC para motores de reglas externos (ERP, Middleware)."
            ]}
            codeSnippet={`{
  "enigma_version": "1.0",
  "metadata": {
    "status": "valid",
    "total_roles": 1
  },
  "access_matrix": {
    "Admin": {
      "Usuarios": ["Permitir Crear"]
    }
  }
}`}
          />
        </section>

        {/* Demostración */}
        <section id="demostracion" className="py-20 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Demostración en Vivo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">La Interfaz Gráfica desarrollada en PyQt6 proporciona una experiencia de IDE completa con Modo Didáctico animado.</p>
          </div>

          <div className="glass-panel p-2 rounded-2xl border border-cyberpunk-cyan/30 overflow-hidden mx-auto max-w-5xl shadow-[0_0_50px_rgba(0,243,255,0.15)]">
            <div className="aspect-video bg-[#0a0a10] rounded-xl relative overflow-hidden group border border-white/10">
              <video 
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video_enigma.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
              </video>
              {/* Overlay sutil para mantener la estética cyberpunk */}
              <div className="absolute inset-0 pointer-events-none border-2 border-cyberpunk-cyan/10 rounded-xl group-hover:border-cyberpunk-cyan/30 transition-colors"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0A0A10] py-12 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/Logo ENIGMA.png" alt="Enigma Logo" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Universidad Rafael Landívar. Curso de Compiladores.
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://github.com/jordin-garcia/pagina_web_enigma.git" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
              <GitBranch size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
