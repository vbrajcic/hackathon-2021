export interface SummerCampPerk {
  heading: string;
  description: string;
}

const summerCampPerks: SummerCampPerk[] = [
  {
    heading: 'Practical work',
    description: 'Povezivanje stečenih teorijskih znanja s profesionalnim iskustvima',
  },
  {
    heading: 'New set of skills',
    description: `Stjecanje vještina iz područja računarstva i drugih djelokruga poslovanja IT i ostalih organizacija u kojima se praksa obavlja.`,
  },
  {
    heading: 'Menthor guidence',
    description: 'Nalaženje teme za diplomski rad',
  },
  {
    heading: 'Easier career start',
    description: 'Stjecanje mogućih preporuka u cilju budućeg zapošljavanja',
  },
  {
    heading: 'Networking',
    description: 'Ostvarivanje kontakata i poznanstava u sektoru računarstva',
  },
  {
    heading: 'Creating habbits ',
    description: `Stvaranje dobrih radnih navika i priprema studenta za poslovni svijet`,
  },
];

export default summerCampPerks;
