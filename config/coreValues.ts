export type CoreValueIcon = 'REACT' | 'TEST_TUBE' | 'ALIEN' | 'ROCKET';
export interface CoreValue {
  icon: CoreValueIcon;
  title: string;
  subtitle: string;
}

const coreValues: CoreValue[] = [
  {
    icon: 'REACT',
    title: 'Stakeholders over\nplaceholders',
    subtitle: 'A nonprofit organization giving support to women in Alabama who need access to abortion clinics.',
  },
  {
    icon: 'TEST_TUBE',
    title: 'Small Teams,\nBig Ideas.',
    subtitle:
      'ActBlue Civics supports several groups and charities working to protect kids and families separated by ICE.',
  },
  {
    icon: 'ALIEN',
    title: 'Rise by lifting\nothers',
    subtitle: 'Women Talk Design is on a mission to see more diverse speakers on stage, with training and promotion.',
  },
  {
    icon: 'ROCKET',
    title: 'Start small,\nDream big',
    subtitle:
      'A Memphis based initiative connecting teams of volunteer creatives with nonprofits that need their help.',
  },
];

export default coreValues;
