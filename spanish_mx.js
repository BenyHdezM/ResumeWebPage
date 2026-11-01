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
  'Editable document': 'Documento editable',
  'Ready to print': 'Listo para imprimir',
  'Get in touch': 'Contáctame',
  '<span id="years">#</span>+ years': '<span id="years">#</span>+ años',
  'Now at': 'Actualmente en',
  '26+ years': '26+ años',
  'dt:Languages': 'Idiomas',

  // ----- Experience -----
  'Career': 'Trayectoria',
  'My two most recent roles. The full history is on LinkedIn and in my resume.': 'Mis dos puestos más recientes. El historial completo está en LinkedIn y en mi CV.',

  'Jul 2023 – Present': 'Jul 2023 – Actualidad',
  'Sr. Software Engineer': 'Ingeniero de Software Sr.',
  'Applied Systems · Epic insurance platform': 'Applied Systems · Plataforma de seguros Epic',
  'Build agentic workflows with Claude Code, custom skills and MCP servers that connect LLMs to internal tools, repos and docs.': 'Construyo flujos agénticos con Claude Code, skills propios y servidores MCP que conectan LLMs con herramientas, repos y documentación internos.',
  'Use prompt and context engineering to generate code, tests, reviews and refactors across a large multi-repo codebase.': 'Uso ingeniería de prompts y de contexto para generar código, pruebas, revisiones y refactors en una base de código grande con varios repos.',
  'Develop .NET microservices and React front ends over gRPC and Apigee, with event-driven and reconciliation systems for financial software.': 'Desarrollo microservicios .NET y front ends en React sobre gRPC y Apigee, con sistemas de eventos y conciliación para software financiero.',
  'Debug production issues and maintain a legacy VB app; containerized with Docker, Kubernetes and Tilt.': 'Depuro problemas en producción y mantengo una app VB heredada; trabajo con contenedores en Docker, Kubernetes y Tilt.',

  'Sr. FullStack .NET / React Developer': 'Desarrollador Sr. FullStack .NET / React',
  'Built the Admin Portal dashboard and calculator pages from scratch in React and Bootstrap, backed by .NET Web APIs.': 'Construí desde cero el dashboard del portal de administración y las páginas de calculadoras en React y Bootstrap, con Web APIs en .NET.',
  'Supported microservices and web apps built with NestJS and Angular.': 'Di soporte a microservicios y aplicaciones web hechas con NestJS y Angular.',
  'Managed data across MongoDB, PostgreSQL and SQL Server; deployed with the Cloud Foundry CLI.': 'Administré datos en MongoDB, PostgreSQL y SQL Server; desplegué con la CLI de Cloud Foundry.',
  'Worked in Agile/Scrum with Rally, with code reviews and API testing in Postman and Swagger.': 'Trabajé en Agile/Scrum con Rally, con revisiones de código y pruebas de APIs en Postman y Swagger.',

  'Sr. FullStack .NET Developer': 'Desarrollador Sr. FullStack .NET',
  'Aptude · Client: USXpress · Mexico': 'Aptude · Cliente: USXpress · México',
  'Built and supported the USXpress customer and admin portals and Web APIs in C#, .NET Core, React and Bootstrap.': 'Construí y di soporte a los portales de clientes y administración de USXpress y sus Web APIs en C#, .NET Core, React y Bootstrap.',
  'Introduced pull-request reviews and CI/CD in Azure DevOps.': 'Introduje revisiones de pull requests y CI/CD en Azure DevOps.',
  'Coordinated releases across teams and databases; supported .NET Core microservices on Entity Framework and T-SQL.': 'Coordiné lanzamientos entre equipos y bases de datos; di soporte a microservicios .NET Core con Entity Framework y T-SQL.',
  'Ran .NET, Angular and React technical interviews.': 'Realicé entrevistas técnicas de .NET, Angular y React.',

  'Microsoft · Azure Global, Customer Analytics · Redmond, WA': 'Microsoft · Azure Global, Analítica de clientes · Redmond, WA',
  'Built the Customer Analytics page from scratch in Angular 8, on .NET Core Web APIs and microservices.': 'Construí desde cero la página de analítica de clientes en Angular 8, sobre Web APIs y microservicios de .NET Core.',
  'Managed the SQL Server schema with EF Code First migrations and T-SQL stored procedures.': 'Administré el esquema de SQL Server con migraciones EF Code First y procedimientos almacenados T-SQL.',
  'Wrote BDD unit tests and coordinated releases through Azure DevOps pull requests in Scrum.': 'Escribí pruebas unitarias BDD y coordiné lanzamientos con pull requests de Azure DevOps en Scrum.',

  'Software Engineer and Consultant': 'Ingeniero de Software y Consultor',
  'NearShore Technology · Mexico': 'NearShore Technology · México',
  '<b>Check Into Cash</b> (Jan – Nov 2019): e-commerce site, reporting tools and Web APIs in .NET Core and Angular; fixed production incidents.': '<b>Check Into Cash</b> (ene – nov 2019): sitio de e-commerce, herramientas de reportes y Web APIs en .NET Core y Angular; resolví incidentes en producción.',
  '<b>Becton Dickinson</b> (May 2017 – Jan 2019): upgraded C++ (MFC), C# and VB6 apps; configured CIISafe for the U.S. DoD.': '<b>Becton Dickinson</b> (may 2017 – ene 2019): actualicé apps C++ (MFC), C# y VB6; configuré CIISafe para el Departamento de Defensa de EE. UU.',
  '<b>Becton Dickinson:</b> built a logging DLL (log4net / ADO.NET) and an Angular page to display the logs.': '<b>Becton Dickinson:</b> construí una DLL de logging (log4net / ADO.NET) y una página en Angular para mostrar los registros.',

  'Aug 2016 – May 2017': 'Ago 2016 – May 2017',
  'Software Engineer, Project Lead': 'Ingeniero de Software, Líder de Proyecto',
  'MarathonGroup Mexico': 'MarathonGroup México',
  'Led the team that built a Seller Portal from scratch on Acumatica ERP SOAP services, simplifying data entry for sales staff.': 'Lideré el equipo que construyó desde cero un portal de vendedores sobre servicios SOAP de Acumatica ERP, simplificando la captura de datos de ventas.',
  'Built with CakePHP, Bootstrap and JavaScript over MS SQL and MySQL; delivered Android apps and ran Linux servers on Azure.': 'Desarrollé con CakePHP, Bootstrap y JavaScript sobre MS SQL y MySQL; entregué apps Android y administré servidores Linux en Azure.',

  'Sep 2015 – Aug 2016': 'Sep 2015 – Ago 2016',
  'VB, C++ and C# Developer': 'Desarrollador VB, C++ y C#',
  'Softtek · Client: General Electric (Aviation) · Aguascalientes, Mexico': 'Softtek · Cliente: General Electric (Aviación) · Aguascalientes, México',
  'Supported and migrated legacy VB6 and C++ 6 apps to newer Windows Server versions.': 'Di soporte y migré apps heredadas en VB6 y C++ 6 a versiones más nuevas de Windows Server.',
  'Built C# WinForms tools on SQL Server, replacing Crystal Reports; maintained ASP.NET pages and Windows Server 2003/2008.': 'Construí herramientas WinForms en C# sobre SQL Server, reemplazando Crystal Reports; mantuve páginas ASP.NET y Windows Server 2003/2008.',

  'Web and Video Game Developer': 'Desarrollador Web y de Videojuegos',
  'Gameloft · Mexico': 'Gameloft · México',
  'Built and debugged carrier e-shop sites across Latin America: billing, SMS and carrier web services in PHP and MySQL.': 'Construí y depuré tiendas en línea para operadores móviles en Latinoamérica: facturación, SMS y servicios web en PHP y MySQL.',
  'Ported Dungeon Hunter 5 to Windows Phone: C# ↔ C++ bridge modules, input handling and QA fixes.': 'Porté Dungeon Hunter 5 a Windows Phone: módulos puente C# ↔ C++, manejo de entrada y correcciones de QA.',

  'IT Intern, .NET C# Developer': 'Practicante de TI, Desarrollador .NET C#',
  'Tenaris Tamsa · Veracruz, Mexico': 'Tenaris Tamsa · Veracruz, México',
  'Built C# console apps and Excel VBA automation for level 2 IT incident tickets and weekly Oracle reports.': 'Construí apps de consola en C# y automatizaciones en Excel VBA para tickets de incidentes de TI nivel 2 y reportes semanales de Oracle.',

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
  'I have used GNU/Linux for more than 26 years. I contribute to open source and publish Spanish-language tech videos.':
    'Uso GNU/Linux desde hace más de 26 años. Contribuyo a proyectos de código abierto y publico videos de tecnología en español.',
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
