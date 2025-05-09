export interface Company {
  id: number;
  name: string;
  nit: string;
  address: string;
  phone: string;
  contact_name: string;
  contact_email: string;
}

export const COMPANIES_MOCK = [
  {
    id: 1,
    name: "Kode Studio",
    nit: "900.123.456-7",
    address: "Cl. 18 #Oficina 21 #118-241, Barrio Pance, Cali, Valle del Cauca",
    phone: "+57 323 2982698",
    contact_name: "Santiago Cortes Galvis",
    contact_email: "santiago.cortes@uao.edu.co",
  },
  {
    id: 2,
    name: "Empresa ABC",
    nit: "900.123.456-8",
    address: "Calle 123, Ciudad XYZ",
    phone: "21312312312312",
    contact_name: "Bergoglio",
    contact_email: "bergoglio.mail.com",
  },
];
