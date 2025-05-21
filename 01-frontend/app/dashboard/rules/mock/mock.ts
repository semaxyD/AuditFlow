export interface Rule {
  id: number;
  code: string;
  name: string;
}

export const MOCK_RULES = [
  {
    id: 1,
    code: "ISO 14001",
    name: "Sistema de gestión ambiental",
  },
  {
    id: 2,
    code: "ISO 9001",
    name: "Sistema de gestión de calidad",
  },
  {
    id: 3,
    code: "ISO 45001",
    name: "Sistema de gestión de seguridad y salud en el trabajo",
  },
];
