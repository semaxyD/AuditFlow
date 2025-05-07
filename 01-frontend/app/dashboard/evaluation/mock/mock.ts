import { EvaluationForm } from "../types/evaluation-form.types";

export const AUDIT_FORM_MOCK: EvaluationForm = {
  name: "Auditoría ISO 14001",
  description:
    "Auditoría del sistema de gestión ambiental según la norma ISO 14001.",
  totalQuestions: 60,
  sections: [
    {
      id: 1,
      title: "Requisitos generales",
      questions: [
        {
          id: 101,
          question:
            "¿La organización ha establecido y mantenido un sistema de gestión ambiental consistente con los requisitos contenidos en la norma ISO 14001?",
        },
      ],
    },
    {
      id: 2,
      title: "Política Medioambiental",
      questions: [
        {
          id: 201,
          question:
            "¿Ha definido la alta dirección la política ambiental de la organización?",
        },
        {
          id: 202,
          question:
            "¿La política ambiental es apropiada para la naturaleza, la escala y los impactos ambientales de las actividades, productos o servicios de la organización?",
        },
        {
          id: 203,
          question:
            "¿La política ambiental incluye un compromiso de mejora continua y prevención de la contaminación?",
        },
        {
          id: 204,
          question:
            "¿La política ambiental incluye un compromiso de cumplir con la legislación y normativa ambiental relevante y con otros requisitos que la organización suscriba?",
        },
        {
          id: 205,
          question:
            "¿Proporciona la política ambiental un marco para establecer y revisar los objetivos y metas ambientales?",
        },
        {
          id: 206,
          question:
            "¿La política ambiental está documentada, implementada, mantenida y comunicada a todos los empleados?",
        },
        {
          id: 207,
          question: "¿La política ambiental está disponible para el público?",
        },
      ],
    },
    {
      id: 3,
      title: "Planificación - Aspectos ambientales",
      questions: [
        {
          id: 301,
          question:
            "¿La organización ha establecido y mantenido (a) procedimiento(s) para identificar los aspectos ambientales de sus actividades, productos o servicios que puede controlar y sobre los cuales se espera que tenga influencia?",
        },
        {
          id: 302,
          question:
            "¿Ha determinado la organización cuáles de sus aspectos tienen un impacto significativo en el medio ambiente?",
        },
        {
          id: 303,
          question:
            "¿Se ha asegurado la organización de que sus aspectos e impactos significativos relacionados se consideren al establecer sus objetivos ambientales?",
        },
        {
          id: 304,
          question:
            "¿La organización actualiza periódicamente la información sobre sus aspectos e impactos significativos?",
        },
      ],
    },
    {
      id: 4,
      title: "Requisitos legales y otros",
      questions: [
        {
          id: 401,
          question:
            "¿La organización ha establecido y mantenido un procedimiento para identificar y tener acceso a los requisitos legales y de otro tipo que la organización suscriba, que sean aplicables a los aspectos ambientales de sus actividades, productos o servicios?",
        },
      ],
    },
    {
      id: 5,
      title: "Objetivos y metas",
      questions: [
        {
          id: 501,
          question:
            "¿La organización ha establecido y mantenido objetivos y metas ambientales documentados, en cada función y nivel relevante dentro de la organización?",
        },
        {
          id: 502,
          question:
            "¿La organización, al establecer y revisar sus objetivos, ha considerado: Los requisitos legales y otros? ¿Sus aspectos ambientales significativos? ¿Sus opciones tecnológicas? ¿Sus requisitos financieros, operativos y comerciales? ¿Las opiniones de las partes interesadas?",
        },
        {
          id: 503,
          question:
            "¿Los objetivos y metas de la organización son consistentes con su política ambiental, incluido el compromiso con la prevención de la contaminación?",
        },
      ],
    },
    {
      id: 6,
      title: "Programa(s) de gestión ambiental",
      questions: [
        {
          id: 601,
          question:
            "¿La organización ha establecido y mantenido programas de gestión ambiental para lograr sus objetivos y metas?",
        },
        {
          id: 602,
          question:
            "¿Los programas de gestión ambiental designan la responsabilidad de lograr objetivos y metas en cada función y nivel relevante de la organización?",
        },
        {
          id: 603,
          question:
            "¿Los programas de gestión ambiental definen los medios y el tiempo en que deben lograrse?",
        },
        {
          id: 604,
          question:
            "¿Se revisan y modifican los programas de gestión ambiental cuando corresponde si se implementan actividades, productos o servicios nuevos o modificados en la organización?",
        },
      ],
    },
    {
      id: 7,
      title: "Implementación y Operación - Estructura y responsabilidad",
      questions: [
        {
          id: 701,
          question:
            "¿La organización ha definido, documentado y comunicado las funciones, responsabilidades y autoridades para facilitar una gestión ambiental eficaz? ¿Cómo se hace esto?",
        },
        {
          id: 702,
          question:
            "¿La dirección ha proporcionado los recursos esenciales para la implementación y el control del sistema de gestión ambiental?",
        },
        {
          id: 703,
          question:
            "¿Los recursos incluyen recursos humanos y habilidades especializadas, tecnología y recursos financieros?",
        },
        {
          id: 704,
          question:
            "¿Ha designado la alta dirección de la organización (a) representante(s) específico(s) de la dirección que, independientemente de otras responsabilidades, tenga funciones, responsabilidades y autoridad definidas para: Garantizar que los requisitos del sistema de gestión ambiental (SGA) se establezcan, implementen y mantengan de acuerdo con esta Norma Internacional. Informar sobre el desempeño del SGA a la alta dirección para su revisión y como base para la mejora del SGA?",
        },
      ],
    },
    {
      id: 8,
      title: "Formación, sensibilización y competencia",
      questions: [
        {
          id: 801,
          question:
            "¿Ha identificado la organización las necesidades de formación de todo el personal cuyo trabajo pueda generar un impacto significativo en el medio ambiente? ¿Cómo se hace esto?",
        },
        {
          id: 802,
          question:
            "¿Ha establecido y mantenido la organización un procedimiento para que sus empleados en cada función relevante sean conscientes de:",
        },
        {
          id: 803,
          question:
            "¿La importancia de la conformidad con la política y los procedimientos ambientales y con los requisitos del sistema de gestión ambiental (SGA)?",
        },
        {
          id: 804,
          question:
            "¿Los impactos ambientales significativos, reales o potenciales, de sus actividades laborales y los beneficios ambientales de un mejor desempeño personal?",
        },
        {
          id: 805,
          question:
            "¿Sus funciones y responsabilidades para lograr la conformidad con la política y los procedimientos ambientales y con los requisitos del SGA, incluidos los requisitos de preparación y respuesta ante emergencias?",
        },
        {
          id: 806,
          question:
            "¿Las posibles consecuencias de la desviación del procedimiento operativo especificado?",
        },
        {
          id: 807,
          question:
            "¿Cómo se asegura la organización de que el personal que realiza tareas que pueden causar impactos ambientales significativos sea competente sobre la base de la educación, capacitación y/o experiencia adecuadas?",
        },
      ],
    },
    {
      id: 9,
      title: "Comunicación",
      questions: [
        {
          id: 901,
          question:
            "En cuanto a sus aspectos ambientales y sistema de gestión ambiental, la organización ha establecido y mantenido procedimientos para asegurar: ¿La comunicación interna entre los distintos niveles y funciones de la organización? ¿Recibir, documentar y responder adecuadamente a comunicaciones relevantes de partes interesadas externas?",
        },
        {
          id: 902,
          question:
            "¿La organización ha considerado su(s) proceso(s) para la comunicación externa sobre sus aspectos ambientales significativos y ha registrado su decisión?",
        },
      ],
    },
    {
      id: 10,
      title: "Documentación del sistema de gestión ambiental",
      questions: [
        {
          id: 1001,
          question:
            "¿La organización ha establecido y mantenido información en papel o en formato electrónico para: Describir los elementos centrales del sistema de gestión y su interacción? ¿Proporciona instrucciones para la documentación relacionada?",
        },
      ],
    },
    {
      id: 11,
      title: "Control de documentos",
      questions: [
        {
          id: 1101,
          question:
            "¿La organización ha establecido y mantenido procedimientos para controlar todos los documentos requeridos por esta Norma Internacional para asegurar:",
        },
        {
          id: 1102,
          question: "¿Se pueden ubicar?",
        },
        {
          id: 1103,
          question:
            "¿Son revisados periódicamente, revisados según sea necesario y aprobados para su adecuación por personal autorizado?",
        },
        {
          id: 1104,
          question:
            "¿Las versiones actuales de los documentos relevantes están disponibles en todos los lugares donde se realizan operaciones esenciales para el funcionamiento efectivo del sistema de gestión ambiental?",
        },
        {
          id: 1105,
          question:
            "¿Los documentos obsoletos se eliminan rápidamente de todos los puntos de emisión y de uso, o se aseguran de otro modo contra el uso no previsto?",
        },
        {
          id: 1106,
          question:
            "¿Se identifican adecuadamente los documentos obsoletos que se conservan con fines legales y/o de preservación del conocimiento?",
        },
        {
          id: 1107,
          question:
            "¿Los documentos de la organización son legibles, fechados (con fechas de revisión) y fácilmente identificables, mantenidos de manera ordenada y retenidos durante un período específico?",
        },
        {
          id: 1108,
          question:
            "¿La organización ha establecido y mantenido procedimientos y responsabilidades con respecto a la creación y modificación de los distintos tipos de documentos?",
        },
      ],
    },
    {
      id: 12,
      title: "Control operativo",
      questions: [
        {
          id: 1201,
          question:
            "¿La organización ha identificado aquellas operaciones y actividades que están asociadas con los aspectos ambientales significativos identificados en línea con su política, objetivos y metas?",
        },
        {
          id: 1202,
          question:
            "¿La organización ha planificado estas actividades, incluido el mantenimiento, para garantizar que se lleven a cabo en las condiciones especificadas mediante: Establecimiento y mantenimiento de procedimientos documentados para cubrir situaciones en las que su ausencia podría conducir a desviaciones de la política ambiental y de los objetivos y metas? ¿Estipula criterios de operación en los procedimientos? ¿Estableciendo y manteniendo procedimientos relacionados con los aspectos ambientales significativos identificables de los bienes y servicios utilizados por la organización y comunicando los procedimientos y requisitos relevantes a los proveedores y contratistas?",
        },
      ],
    },
    {
      id: 13,
      title: "Preparación y respuesta ante emergencias",
      questions: [
        {
          id: 1301,
          question:
            "¿La organización ha establecido y mantenido procedimientos para identificar posibles accidentes y situaciones de emergencia y responder a ellos, y para prevenir y mitigar los impactos ambientales que puedan estar asociados con ellos?",
        },
        {
          id: 1302,
          question:
            "¿Ha examinado y revisado la organización, cuando ha sido necesario, su procedimiento de preparación y respuesta ante emergencias, en particular, después de la ocurrencia de accidentes o situaciones de emergencia?",
        },
        {
          id: 1303,
          question:
            "¿La organización ha probado periódicamente dichos procedimientos cuando es factible?",
        },
      ],
    },
    {
      id: 14,
      title: "Verificación y acción correctiva - Seguimiento y medición",
      questions: [
        {
          id: 1401,
          question:
            "¿La organización ha establecido y mantenido procedimientos documentados para monitorear y medir, de forma regular, las características clave de sus operaciones y actividades que pueden tener un impacto significativo en el medio ambiente?",
        },
        {
          id: 1402,
          question:
            "¿El seguimiento y la medición incluyen el registro de información para realizar un seguimiento del desempeño, los controles operativos pertinentes y la conformidad con los objetivos y metas ambientales de la organización?",
        },
        {
          id: 1403,
          question:
            "¿La organización calibra el equipo y mantiene registros de acuerdo con los procedimientos de la organización?",
        },
        {
          id: 1404,
          question:
            "¿Ha establecido y mantenido la organización un procedimiento documentado para evaluar periódicamente el cumplimiento de la legislación y los reglamentos ambientales pertinentes?",
        },
      ],
    },
    {
      id: 15,
      title: "No conformidad y acciones correctivas y preventivas",
      questions: [
        {
          id: 1501,
          question:
            "¿La organización ha establecido y mantenido procedimientos para definir la responsabilidad y la autoridad para manejar e investigar la no conformidad, tomar medidas para mitigar los impactos causados y para iniciar y completar acciones correctivas y preventivas?",
        },
        {
          id: 1502,
          question:
            "Cuando se toman acciones correctivas y preventivas para eliminar las causas de las no conformidades reales y potenciales, ¿son adecuadas a la magnitud de los problemas y proporcionales al impacto ambiental encontrado?",
        },
        {
          id: 1503,
          question:
            "¿La organización ha implementado y registrado cambios en los procedimientos documentados como resultado de acciones correctivas y preventivas?",
        },
      ],
    },
    {
      id: 16,
      title: "Registros",
      questions: [
        {
          id: 1601,
          question:
            "¿La organización ha establecido y mantenido procedimientos para la identificación, mantenimiento y eliminación de registros ambientales, incluidos: Registros de capacitación? ¿Los resultados de las auditorías (auditorías EMS)? ¿Los resultados de las revisiones (Revisiones Gerenciales)?",
        },
        {
          id: 1602,
          question:
            "¿Son los registros de la organización legibles, identificables y trazables a la actividad, producto o servicio involucrado?",
        },
        {
          id: 1603,
          question:
            "¿Se almacenan y mantienen los registros ambientales de tal manera que sean fácilmente recuperables y estén protegidos contra daños, deterioro o pérdida?",
        },
        {
          id: 1604,
          question:
            "¿Se establecen y registran los tiempos de retención de los registros?",
        },
        {
          id: 1605,
          question:
            "¿Se mantienen registros, según corresponda al sistema y a la organización, para demostrar la conformidad con los requisitos de esta Norma Internacional?",
        },
      ],
    },
    {
      id: 17,
      title: "Auditoría del sistema de gestión ambiental",
      questions: [
        {
          id: 1701,
          question:
            "¿Ha establecido y mantenido la organización programa(s) y procedimiento(s) para realizar auditorías periódicas del sistema de gestión ambiental a fin de: Determinar si el sistema de gestión ambiental se ajusta o no a los arreglos planificados para la gestión ambiental, incluidos los requisitos de esta Norma Internacional. ¿Estándar y se ha implementado y mantenido adecuadamente? ¿Proporciona información sobre los resultados de las auditorías a la dirección?",
        },
        {
          id: 1702,
          question:
            "¿El programa de auditoría de la organización, incluido cualquier cronograma, se basa en la importancia ambiental de la actividad en cuestión y los resultados de auditorías anteriores?",
        },
        {
          id: 1703,
          question:
            "¿El procedimiento de auditoría cubre el alcance, la frecuencia y las metodologías de la auditoría, así como las responsabilidades y los requisitos para realizar auditorías y reportar los resultados?",
        },
      ],
    },
    {
      id: 18,
      title: "Revisión por la dirección",
      questions: [
        {
          id: 1801,
          question:
            "¿La alta dirección de la organización, en los intervalos que determina, revisa el sistema de gestión ambiental para garantizar su idoneidad y eficacia continuas?",
        },
        {
          id: 1802,
          question:
            "¿El proceso de revisión por la dirección garantiza que se recopila la información necesaria para permitir que la dirección lleve a cabo esta evaluación?",
        },
        {
          id: 1803,
          question: "¿Están documentadas las revisiones de la dirección?",
        },
        {
          id: 1804,
          question:
            "¿Cada revisión de la dirección aborda la posible necesidad de cambios en la política, los objetivos y otros elementos del sistema de gestión ambiental, a la luz de: los resultados de la auditoría del sistema de gestión ambiental? ¿Circunstancias cambiantes? ¿El compromiso con la mejora continua?",
        },
      ],
    },
  ],
};
