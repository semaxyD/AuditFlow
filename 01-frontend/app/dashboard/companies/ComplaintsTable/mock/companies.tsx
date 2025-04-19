export type Company = {
  id: string;
  name: string;
  nit: string;
  address: string;
  phone: string;
  contactName: string;
  contactEmail: string;
  evaluations: {
    evaluation_id: number;
    evaluation_created_at: string;
    creator_name: string;
    norm: {
      norm_id: number;
      norm_name: string;
      norm_code: string;
    };
    versions: {
      version_id: number;
      create_by: string;
      created_at: string;
      is_latest: boolean;
      version_number: number;
      score: number;
    }[];
  }[];
};

export const COMPANIES_MOCK: Company[] = [
  {
    id: "1",
    name: "Empresa Alpha",
    nit: "900123456-7",
    address: "Calle 123 #45-67",
    phone: "1234567890",
    contactName: "Ana López",
    contactEmail: "ana@empresa.com",
    evaluations: [
      {
        evaluation_id: 1,
        evaluation_created_at: "2025-04-17T17:32:54.279Z",
        creator_name: "Carlos",
        norm: {
          norm_id: 1,
          norm_name: "Norma Calidad 1",
          norm_code: "N001",
        },
        versions: [
          {
            version_id: 1,
            create_by: "Ana",
            created_at: "2025-04-15T10:00:00.000Z",
            is_latest: false,
            version_number: 1,
            score: 60,
          },
          {
            version_id: 2,
            create_by: "Ana",
            created_at: "2025-04-16T12:00:00.000Z",
            is_latest: false,
            version_number: 2,
            score: 75,
          },
          {
            version_id: 3,
            create_by: "Carlos",
            created_at: "2025-04-17T14:30:00.000Z",
            is_latest: true,
            version_number: 3,
            score: 85,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Empresa Beta",
    nit: "800987654-3",
    address: "Avenida 50 #10-20",
    phone: "3216549870",
    contactName: "Luis Gómez",
    contactEmail: "luis@empresa.com",
    evaluations: [
      {
        evaluation_id: 3,
        evaluation_created_at: "2025-03-01T08:45:10.000Z",
        creator_name: "Juan",
        norm: {
          norm_id: 4,
          norm_name: "Norma de Calidad Ambiental",
          norm_code: "N004",
        },
        versions: [
          {
            version_id: 5,
            create_by: "Juan",
            created_at: "2025-03-01T08:45:10.000Z",
            is_latest: false,
            version_number: 1,
            score: 70,
          },
          {
            version_id: 6,
            create_by: "Lucía",
            created_at: "2025-03-05T10:20:00.000Z",
            is_latest: true,
            version_number: 2,
            score: 90,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Empresa Gamma",
    nit: "901234567-1",
    address: "Transversal 90 #12-34",
    phone: "5551234567",
    contactName: "María Fernández",
    contactEmail: "maria@empresa.com",
    evaluations: [
      {
        evaluation_id: 4,
        evaluation_created_at: "2025-01-15T15:00:00.000Z",
        creator_name: "Carlos",
        norm: {
          norm_id: 1,
          norm_name: "Norma Calidad 1",
          norm_code: "N001",
        },
        versions: [
          {
            version_id: 7,
            create_by: "Carlos",
            created_at: "2025-01-15T15:00:00.000Z",
            is_latest: false,
            version_number: 1,
            score: 50,
          },
          {
            version_id: 8,
            create_by: "María",
            created_at: "2025-01-20T09:00:00.000Z",
            is_latest: false,
            version_number: 2,
            score: 65,
          },
          {
            version_id: 9,
            create_by: "María",
            created_at: "2025-01-25T12:45:00.000Z",
            is_latest: true,
            version_number: 3,
            score: 80,
          },
        ],
      },
    ],
  },
];
