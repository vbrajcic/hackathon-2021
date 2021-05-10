export interface OurRule {
  number: string;
  heading: string;
  description: string;
}

const ourRules: OurRule[] = [
  {
    number: '01',
    heading: 'Don’t be an\nasshole',
    description: 'No one likes it. Be a kind person instead.',
  },
  {
    number: '02',
    heading: 'Dream big,\nwork harder',
    description: `Shoot for the stars, but take every step necessary to get there! It's ok if you fail, land on the moon and jump again.`,
  },
  {
    number: '03',
    heading: 'Rise by lifting\nothers.',
    description:
      'Do more than you take credit for, by demonstrating a strong commitment to inspire, motivate and empower others around you.',
  },
  {
    number: '04',
    heading: 'Play for\neach other',
    description: 'We are the team. This is a teamplay.',
  },
  {
    number: '05',
    heading: 'Take\nownership!',
    description:
      'Own it! Stand out, take action with full responsibility and accountability. Influence with strong personal example and integrity.',
  },
  {
    number: '06',
    heading: 'Punch above your\nweight class',
    description: `The only way to get smarter is by playing a smarter opponent. Don't be afraid of challenging big guys!`,
  },
];

export default ourRules;
