export const translations = {
  es: {
    nav: {
      home: "Inicio",
      objective: "Objetivo",
      activities: "Actividades",
      collaborate: "Cómo colaborar",
      contact: "Contacto",
    },
    hero: {
      title: "Dar Margen",
      subtitle:
        "Somos una asociación civil sin fines de lucro de Buenos Aires, Argentina, integrada por docentes, profesionales y activistas con más de veinte años de experiencia en cárceles. Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales. Apelamos a la potencia crítica de los márgenes para transformar creativamente la realidad.",
    },
    objective: {
      title: "Objetivo",
      content:
        "Nuestro objetivo es ampliar el acceso a la educación, la cultura y el trabajo de las personas afectadas por la justicia penal y el encarcelamiento. Buscamos abrir oportunidades generando proyectos y redes que promuevan los derechos humanos y la inclusión con justicia social.",
    },
    activities: {
      title: "Actividades",
      items: [
        "Acompañamos trayectorias educativas y proyectos culturales de personas que están o estuvieron privadas de libertad.",
        "Ofrecemos cursos de escritura y talleres sobre derechos y oficios culturales dentro y fuera de la cárcel.",
        "Publicamos libros, revistas y podcast producidos en nuestros cursos y talleres.",
        "Organizamos charlas y encuentros para compartir experiencias e intervenir en la conversación pública sobre el delito y el castigo.",
        "Participamos en redes y proyectos que buscan incidir en los procesos de organización social y la creación de políticas vinculadas al tema.",
      ],
      description:
        "Trabajamos con jóvenes y adultos detenidos en complejos penitenciarios y centros de régimen cerrado, personas con prisión domiciliaria y con medidas alternativas al encarcelamiento. Desarrollamos actividades en instituciones y espacios educativos y comunitarios. Nuestra tarea está dirigida a una población compuesta por varones, mujeres y personas trans, de distintas edades, cuyas historias de vida están marcadas por la violencia institucional, la vulneración de derechos y la marginación.",
      closing:
        "A través de nuestro trabajo y acciones buscamos reducir el daño provocado por el encierro, romper el aislamiento, combatir estigmas y promover la integración social.",
    },
    collaborate: {
      title: "Cómo colaborar",
      intro:
        "Recibimos donaciones en dinero y en equipamiento e insumos (artículos de librería, computadoras, impresoras, toner, etc.). Cada aporte, por pequeño que sea, nos ayuda a sostener nuestras actividades y a poner en marcha nuevos proyectos. Su colaboración es fundamental para seguir promoviendo la educación, la cultura y la inclusión en contextos atravesados por la violencia y la exclusión.",
      bankDetails: "Datos de la cuenta bancaria:",
      holder: "Titular: ASOC CIVIL DAR MARGEN",
      cuit: "CUIT: 30-71851061-5",
      bank: "Banco Credicoop",
      accountNumber: "Número de cuenta: 191-241-015747/9",
      cbu: "CBU: 1910241055024101574796",
      contact:
        "Para informar una donación, realizar donaciones en moneda extranjera u otro tipo de aporte, por favor contactarse a info@darmargen.org.ar o al +54 9 11 6172-4812.",
      receipt:
        "Si hace una donación, por favor envíe por mail sus datos personales, incluido DNI, CUIT o CUIL, para la confección del recibo.",
    },
    footer: {
      name: "Asociación civil Dar Margen",
      address: "Av. Entre Ríos 1250 1 C (C1133AAU) Ciudad Autónoma de Buenos Aires, Argentina",
    },
  },
  en: {
    nav: {
      home: "Home",
      objective: "Objective",
      activities: "Activities",
      collaborate: "How to collaborate",
      contact: "Contact",
    },
    hero: {
      title: "Dar Margen",
      subtitle:
        "We are a nonprofit civil association from Buenos Aires, Argentina, composed of educators, professionals, and activists with over twenty years of experience in prisons. We promote inclusion through writing, accompaniment, and training in rights and cultural trades. We appeal to the critical power of the margins to creatively transform reality.",
    },
    objective: {
      title: "Objective",
      content:
        "Our objective is to expand access to education, culture, and work for people affected by criminal justice and incarceration. We seek to open opportunities by generating projects and networks that promote human rights and inclusion with social justice.",
    },
    activities: {
      title: "Activities",
      items: [
        "We accompany educational trajectories and cultural projects of people who are or were deprived of liberty.",
        "We offer writing courses and workshops on rights and cultural trades inside and outside prison.",
        "We publish books, magazines, and podcasts produced in our courses and workshops.",
        "We organize talks and meetings to share experiences and intervene in the public conversation about crime and punishment.",
        "We participate in networks and projects that seek to influence processes of social organization and the creation of related policies.",
      ],
      description:
        "We work with young people and adults detained in penitentiary complexes and closed regime centers, people under house arrest and with alternative measures to incarceration. We develop activities in institutions and educational and community spaces. Our work is directed at a population composed of men, women, and trans people of different ages, whose life stories are marked by institutional violence, violation of rights, and marginalization.",
      closing:
        "Through our work and actions, we seek to reduce the harm caused by confinement, break isolation, combat stigmas, and promote social integration.",
    },
    collaborate: {
      title: "How to collaborate",
      intro:
        "We receive donations in money and equipment and supplies (stationery items, computers, printers, toner, etc.). Every contribution, no matter how small, helps us sustain our activities and launch new projects. Your collaboration is essential to continue promoting education, culture, and inclusion in contexts crossed by violence and exclusion.",
      bankDetails: "Bank account details:",
      holder: "Account holder: ASOC CIVIL DAR MARGEN",
      cuit: "Tax ID (CUIT): 30-71851061-5",
      bank: "Bank: Banco Credicoop",
      accountNumber: "Account number: 191-241-015747/9",
      cbu: "CBU: 1910241055024101574796",
      contact:
        "To report a donation, make donations in foreign currency, or make another type of contribution, please contact info@darmargen.org.ar or +54 9 11 6172-4812.",
      receipt:
        "If you make a donation, please send your personal information by email, including ID, tax ID number (CUIT or CUIL), for receipt preparation.",
    },
    footer: {
      name: "Dar Margen Civil Association",
      address: "Av. Entre Ríos 1250 1 C (C1133AAU) Autonomous City of Buenos Aires, Argentina",
    },
  },
} as const

export type Language = keyof typeof translations
