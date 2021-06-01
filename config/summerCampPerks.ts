import { ElementType } from 'react';
import Rocket from 'components/SvgIcons/Rocket';

export interface SummerCampPerk {
  title: string;
  subtitle: string;
  icon: ElementType;
}

const summerCampPerks: SummerCampPerk[] = [
  {
    title: 'Practical work',
    subtitle: 'Povezivanje stečenih teorijskih znanja s profesionalnim iskustvima',
    icon: Rocket,
  },
  {
    title: 'Easier career start',
    subtitle: `Stjecanje vještina iz područja računarstva i drugih djelokruga poslovanja IT i ostalih organizacija u kojima se praksa obavlja.`,
    icon: Rocket,
  },
  {
    title: 'New set of skills',
    subtitle: 'Nalaženje teme za diplomski rad',
    icon: Rocket,
  },
  {
    title: 'Menthor guidance',
    subtitle: 'Stjecanje mogućih preporuka u cilju budućeg zapošljavanja',
    icon: Rocket,
  },
  {
    title: 'Networking opportunities',
    subtitle: 'Ostvarivanje kontakata i poznanstava u sektoru računarstva',
    icon: Rocket,
  },
  {
    title: 'Creating habbits',
    subtitle: `Stvaranje dobrih radnih navika i priprema studenta za poslovni svijet`,
    icon: Rocket,
  },
];

export default summerCampPerks;
