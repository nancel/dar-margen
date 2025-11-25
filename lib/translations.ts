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
        "Nuestra tarea está dirigida a una población compuesta por varones, mujeres y personas trans, de distintas edades, cuyas historias de vida están marcadas por la violencia institucional, la vulneración de derechos y la marginación. Trabajamos con jóvenes y adultos detenidos en complejos penitenciarios y centros de régimen cerrado, personas con prisión domiciliaria y con medidas alternativas al encarcelamiento. Desarrollamos actividades en instituciones y espacios educativos y comunitarios.",
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
      alias: "Alias: darmargen",
      contact:
        "Para informar una donación, realizar donaciones en moneda extranjera u otro tipo de aporte, por favor contactarse a info@darmargen.org.ar o al +54 9 11 6172-4812.",
      receipt:
        "Si hace una donación, por favor envíe por mail sus datos personales, incluido DNI, CUIT o CUIL, para la confección del recibo.",
    },
    footer: {
      name: "Asociación civil Dar Margen",
      address: "Av. Entre Ríos 1940 1 C (C1133AAU) Ciudad Autónoma de Buenos Aires, Argentina",
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
        "We are a non-profit civil association based in Buenos Aires, Argentina, constituted by educators, professionals, and activists with over twenty years of experience working in prisons. We promote inclusion through writing, support, and training in rights and cultural crafts. We draw on the critical potential of the margins to creatively transform reality.",
    },
    objective: {
      title: "Mission",
      content:
        "Our mission is to expand access to education, culture, and employment opportunities for people impacted by the criminal justice system. We work to create new opportunities by developing projects and networks that promote human rights and inclusion, grounded in a deep commitment to social justice.",
    },
    activities: {
      title: "Activities",
      items: [
        "Supporting educational programmes and cultural projects for the inclusion of currently or formerly incarcerated people.",
        "Offering writing courses and workshops on rights and artistic and cultural crafts, both inside and outside prison.",
        "Publishing books, magazines and podcasts featuring material produced in prison.",
        "Organizing talks and public events to share experiences and intervene in the public conversation about crime and punishment.",
        "Building strategic alliances with organisations and institutions working in prisons, to influence social organisation processes and the development of policies related to education and culture in prisons.",
      ],
      description:
        "Our work is aimed at a population composed of cis and trans men and women of different ages and backgrounds, whose life stories are marked by institutional violence, human rights violations, and marginalisation. We work with young people and adults detained in prisons and other closed facilities, as well as with people under house arrest or alternative measures to imprisonment. We carry out activities in educational, cultural and community institutions and spaces both inside and outside prison. ",
      closing:
        "Through our work and actions, we aim to reduce the damage caused by incarceration, break isolation, counter stigma, and promote social integration. ",
    },
    collaborate: {
      title: "How to Support our Work",
      intro:
        "We accept monetary donations as well as equipment and supplies. Every contribution, no matter how small, helps sustain our activities and launch new projects. Your support is essential to continue  promoting  education, culture, and inclusion in contexts affected by violence and exclusion.",
      bankDetails: "Bank Account Information:",
      holder: "Account holder: ASOC CIVIL DAR MARGEN",
      cuit: "Tax ID (CUIT): 30-71851061-5",
      bank: "Bank: Banco Credicoop",
      accountNumber: "Account number: 191-241-015747/9",
      cbu: "CBU: 1910241055024101574796",
      alias: "Alias: darmargen",
      contact:
        "To report a donation, make a contribution in foreign currency, or explore other ways to support our work , please contact us at info@darmargen.org.ar or +54 9 11 6172-4812.",
      receipt:
        "If you make a donation, please send us your personal information by email—including ID number (DNI), CUIT, or CUIL—so we can issue a receipt.",
    },
    footer: {
      name: "Dar Margen Civil Association",
      address: "Av. Entre Ríos 1940 1 C (C1133AAU) Buenos Aires, Argentina",
    },
  },
} as const

export type Language = keyof typeof translations
