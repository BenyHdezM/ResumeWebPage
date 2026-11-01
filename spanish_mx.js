'use strict';

// Spanish translations. English is the base text in index.html (also what search
// engines and no-JS visitors get), so only Spanish lives here.
//
// Keys are the English text of an element exactly as written in the HTML
// (whitespace collapsed; the live "years" counters are written as "#").
// "tag:text" keys apply to one kind of element only, for words that translate
// differently depending on where they appear.
// Anything missing from this list simply stays in English.
const ES = {
  // ----- Head / meta / aria -----
  'Benito Hernandez Morales · Sr. Software Engineer': 'Benito Hernandez Morales · Ingeniero de Software Sr.',
  'Senior Software Engineer, 12+ years in .NET, C#, React, Angular and SQL. AI-native engineering with Claude Code, MCP servers, custom skills and subagents. Based in Moses Lake, Washington.':
    'Ingeniero de Software Senior, más de 12 años en .NET, C#, React, Angular y SQL. Ingeniería nativa en IA con Claude Code, servidores MCP, skills propios y subagentes. Radicado en Moses Lake, Washington.',
  'Senior Software Engineer, 12+ years in .NET, React and SQL. AI-native engineering with agents, MCP and skills.':
    'Ingeniero de Software Senior, más de 12 años en .NET, React y SQL. Ingeniería nativa en IA con agentes, MCP y skills.',
  'Portrait of Benito Hernandez Morales': 'Retrato de Benito Hernandez Morales',
  'Close video': 'Cerrar video',
  'Menu': 'Menú',
  'Home': 'Inicio',
  'Main': 'Principal',

  // ----- Navigation -----
  'Skip to content': 'Saltar al contenido',
  'Experience': 'Experiencia',
  'AI': 'IA',
  'Skills': 'Habilidades',
  'About': 'Acerca de',
  'Projects': 'Proyectos',
  'Contact': 'Contacto',

  // ----- Hero -----
  'Senior Software Engineer · Moses Lake, WA': 'Ingeniero de Software Senior · Moses Lake, WA',
  'Full-stack <b>.NET</b> and <b>React</b> engineer. I build and modernize enterprise software, and I use AI agents to ship code, tests and reviews faster.':
    'Ingeniero full-stack <b>.NET</b> y <b>React</b>. Construyo y modernizo software empresarial, y uso agentes de IA para entregar código, pruebas y revisiones más rápido.',
  'Download Resume': 'Descargar CV',
  'Get in touch': 'Contáctame',
  '<span id="years">#</span>+ years': '<span id="years">#</span>+ años',
  'Now at': 'Actualmente en',
  '20+ years': '20+ años',
  'dt:Languages': 'Idiomas',

  // ----- Experience -----
  'Career': 'Trayectoria',
  'Jul 2023 – Present': 'Jul 2023 – Actualidad',
  'Jun 2022 – May 2023': 'Jun 2022 – May 2023',
  'Sep 2020 – Jun 2022': 'Sep 2020 – Jun 2022',
  'Nov 2019 – Sep 2020': 'Nov 2019 – Sep 2020',
  'May 2017 – Nov 2019': 'May 2017 – Nov 2019',
  'Aug 2016 – May 2017': 'Ago 2016 – May 2017',
  'Sep 2015 – Aug 2016': 'Sep 2015 – Ago 2016',
  'Sep 2014 – Sep 2015': 'Sep 2014 – Sep 2015',
  'Feb 2014 – Jul 2014': 'Feb 2014 – Jul 2014',

  'Sr. Software Engineer': 'Ingeniero de Software Sr.',
  'Applied Systems · Epic insurance platform': 'Applied Systems · Plataforma de seguros Epic',
  'Build agentic workflows with Claude Code, custom skills and MCP servers that connect LLMs to internal tools, repos and docs.':
    'Construyo flujos agénticos con Claude Code, skills propios y servidores MCP que conectan LLMs con herramientas internas, repositorios y documentación.',
  'Use AI to generate code, tests, reviews and refactors across a large multi-repo codebase.':
    'Uso IA para generar código, pruebas, revisiones y refactorizaciones en una base de código grande con múltiples repositorios.',
  'Develop .NET microservices and React front ends over gRPC and Apigee for financial modules.':
    'Desarrollo microservicios .NET y front ends en React sobre gRPC y Apigee para módulos financieros.',

  'Sr. FullStack .NET / React Developer': 'Desarrollador Sr. FullStack .NET / React',
  'Built Admin Portal dashboard and calculator pages in React, backed by .NET Web APIs.':
    'Construí el dashboard del portal de administración y las páginas de calculadoras en React, con Web APIs en .NET.',
  'Supported NestJS and Angular services over MongoDB, PostgreSQL and SQL Server.':
    'Di soporte a servicios en NestJS y Angular sobre MongoDB, PostgreSQL y SQL Server.',

  'Sr. FullStack .NET Developer': 'Desarrollador Sr. FullStack .NET',
  'Aptude · Client: USXpress': 'Aptude · Cliente: USXpress',
  'Built customer and admin portals and Web APIs in C#, .NET Core and React.':
    'Construí portales de clientes y de administración, y Web APIs, en C#, .NET Core y React.',
  'Introduced pull-request reviews and CI/CD in Azure DevOps; ran technical interviews.':
    'Introduje revisiones de pull requests y CI/CD en Azure DevOps; realicé entrevistas técnicas.',

  'Microsoft · Azure Global, Customer Analytics': 'Microsoft · Azure Global, Analítica de clientes',
  'Built the Customer Analytics page in Angular 8 on .NET Core Web APIs.':
    'Construí la página de analítica de clientes en Angular 8 sobre Web APIs de .NET Core.',
  'Managed SQL Server with EF Code First migrations and wrote BDD tests.':
    'Administré SQL Server con migraciones EF Code First y escribí pruebas BDD.',

  'Software Engineer and Consultant': 'Ingeniero de Software y Consultor',
  '<b>Check Into Cash:</b> e-commerce site, reporting tools and Web APIs in .NET Core and Angular.':
    '<b>Check Into Cash:</b> sitio de e-commerce, herramientas de reportes y Web APIs en .NET Core y Angular.',
  '<b>Becton Dickinson:</b> upgraded C++/MFC, C# and VB6 apps; configured CIISafe for the U.S. DoD.':
    '<b>Becton Dickinson:</b> actualicé aplicaciones C++/MFC, C# y VB6; configuré CIISafe para el Departamento de Defensa de EE. UU.',

  'Software Engineer, Project Lead': 'Ingeniero de Software, Líder de Proyecto',
  'MarathonGroup Mexico': 'MarathonGroup México',
  'Led the team that built a seller portal on Acumatica ERP SOAP services.':
    'Lideré el equipo que construyó un portal de vendedores sobre servicios SOAP de Acumatica ERP.',
  'Delivered Android apps and ran Linux servers on Azure.':
    'Entregué aplicaciones Android y administré servidores Linux en Azure.',

  'VB, C++ and C# Developer': 'Desarrollador VB, C++ y C#',
  'Softtek · Client: General Electric (Aviation)': 'Softtek · Cliente: General Electric (Aviación)',
  'Migrated legacy VB6 and C++ 6 apps and built C# WinForms tools on SQL Server.':
    'Migré aplicaciones heredadas en VB6 y C++ 6 y construí herramientas WinForms en C# sobre SQL Server.',

  'Web and Video Game Developer': 'Desarrollador Web y de Videojuegos',
  'Built carrier e-shop sites across Latin America: billing, SMS and web services.':
    'Construí tiendas en línea para operadores móviles en Latinoamérica: facturación, SMS y servicios web.',
  'Ported Dungeon Hunter 5 to Windows Phone.': 'Porté Dungeon Hunter 5 a Windows Phone.',

  'IT Intern, .NET C# Developer': 'Practicante de TI, Desarrollador .NET C#',
  'Automated incident tickets and Oracle reports with C# and Excel VBA.':
    'Automaticé tickets de incidentes y reportes de Oracle con C# y Excel VBA.',

  // ----- AI-native engineering -----
  'How I work today': 'Cómo trabajo hoy',
  'AI-native engineering': 'Ingeniería nativa en IA',
  'Models write, test and review code under my direction, inside guardrails I design. Every merge is still a human decision.':
    'Los modelos escriben, prueban y revisan código bajo mi dirección, dentro de límites que yo diseño. Cada merge sigue siendo una decisión humana.',
  'Agentic workflows': 'Flujos agénticos',
  'Claude Code daily: plan, build, test and review loops across multi-repo codebases.':
    'Claude Code a diario: ciclos de planear, construir, probar y revisar en bases de código con múltiples repositorios.',
  'Subagents': 'Subagentes',
  'Specialized agents for research, running tests and writing tests, each on the right model.':
    'Agentes especializados para investigar, ejecutar pruebas y escribirlas, cada uno con el modelo adecuado.',
  'Custom skills': 'Skills propios',
  'Repeatable procedures packaged as skills. Third-party skills get a code review first.':
    'Procedimientos repetibles empaquetados como skills. Los skills de terceros pasan primero por una revisión de código.',
  'MCP servers': 'Servidores MCP',
  'Model Context Protocol connects LLMs to internal tools, code navigation and memory.':
    'Model Context Protocol conecta los LLMs con herramientas internas, navegación de código y memoria.',
  'Context engineering': 'Ingeniería de contexto',
  '<code>CLAUDE.md</code> rules, memory, hooks, tool calling and RAG: the smallest accurate context.':
    'Reglas en <code>CLAUDE.md</code>, memoria, hooks, llamadas a herramientas y RAG: el contexto más pequeño que siga siendo preciso.',
  'Local LLMs': 'LLMs locales',
  'Self-hosted models on my own Linux server for privacy, cost control and offline work.':
    'Modelos autoalojados en mi propio servidor Linux para privacidad, control de costos y trabajo sin conexión.',

  // ----- Skills -----
  'Toolbox': 'Herramientas',
  'Technical skills': 'Habilidades técnicas',
  'h3:Languages': 'Lenguajes',
  'Backend and APIs': 'Backend y APIs',
  'Frontend and desktop': 'Frontend y escritorio',
  'Databases': 'Bases de datos',
  'Cloud and DevOps': 'Nube y DevOps',
  'AI engineering': 'Ingeniería de IA',
  'tag:Skills': 'Skills',
  'Agents and subagents': 'Agentes y subagentes',
  'Prompt engineering': 'Ingeniería de prompts',

  // ----- About -----
  'Background': 'Perfil',
  'About me': 'Acerca de mí',
  'Senior full-stack engineer with <span id="years-about">#</span>+ years building and modernizing enterprise systems in C#/.NET, React, Angular and C/C++, for clients like Microsoft, Comcast Business, General Electric and Becton Dickinson.':
    'Ingeniero full-stack senior con más de <span id="years-about">#</span> años construyendo y modernizando sistemas empresariales en C#/.NET, React, Angular y C/C++, para clientes como Microsoft, Comcast Business, General Electric y Becton Dickinson.',
  'I have used GNU/Linux for more than 20 years. I contribute to open source and publish Spanish-language tech videos.':
    'Uso GNU/Linux desde hace más de 20 años. Contribuyo a proyectos de código abierto y publico videos de tecnología en español.',
  'Education': 'Educación',
  '<b>B.S. Computer Systems Engineering</b><br><span class="muted">National Institute of Technology of Mexico · 2009 – 2014</span>':
    '<b>Ingeniería en Sistemas Computacionales</b><br><span class="muted">Instituto Tecnológico Nacional de México · 2009 – 2014</span>',
  'Community': 'Comunidad',
  'Open source on <a href="https://github.com/BenyHdezM">GitHub</a>': 'Código abierto en <a href="https://github.com/BenyHdezM">GitHub</a>',
  'Talks and Git courses': 'Charlas y cursos de Git',
  'Home lab': 'Laboratorio en casa',
  'Linux server at home': 'Servidor Linux en casa',
  'Hosts this site, my services and local LLM experiments.':
    'Aloja este sitio, mis servicios y experimentos con LLMs locales.',
  'Every service runs in its own container, isolated and easy to redeploy.':
    'Cada servicio corre en su propio contenedor, aislado y fácil de volver a desplegar.',
  'Network security': 'Seguridad de red',
  'SSH keys, firewalls and minimal port forwarding keep the attack surface small.':
    'Llaves SSH, firewalls y redirección mínima de puertos mantienen pequeña la superficie de ataque.',

  // ----- Projects / videos -----
  'Open source': 'Código abierto',
  'GitHub projects': 'Proyectos en GitHub',
  'Loading repositories…': 'Cargando repositorios…',
  'No description.': 'Sin descripción.',
  'No public repositories yet.': 'Aún no hay repositorios públicos.',
  'This section could not be loaded right now.': 'No se pudo cargar esta sección en este momento.',
  'Spanish-language content on IT and GNU/Linux.': 'Contenido en español sobre TI y GNU/Linux.',
  'Loading videos…': 'Cargando videos…',
  'No videos yet.': 'Aún no hay videos.',
  'Show all': 'Ver todo',
  'Show fewer': 'Ver menos',
  'Play video:': 'Reproducir video:',

  // ----- Contact / footer -----
  "Let's talk": 'Hablemos',
  'The fastest way to reach me is LinkedIn or Telegram. Email works too.':
    'La forma más rápida de contactarme es LinkedIn o Telegram. El correo también funciona.',
  'Message on LinkedIn': 'Escríbeme en LinkedIn',
  'dt:Email': 'Correo',
  'Phone': 'Teléfono',
  'Back to top ↑': 'Volver arriba ↑',
};
