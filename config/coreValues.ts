export type CoreValueIcon = 'REACT' | 'TEST_TUBE' | 'ALIEN' | 'ROCKET';
export interface CoreValue {
  icon: CoreValueIcon;
  title: string;
  subtitle: string;
}

const coreValues: CoreValue[] = [
  {
    icon: 'REACT',
    title: 'Goal oriented',
    subtitle:
      'Achieving goals is the single most important objective behind everything we do. Measure success. Learn. Improve.',
  },
  {
    icon: 'TEST_TUBE',
    title: 'Customer-centric',
    subtitle:
      'Customers are the center of Profico’s universe. On our mission to solve your problems, we always take that extra mile!',
  },
  {
    icon: 'ALIEN',
    title: 'User empathy',
    subtitle: 'We always put ourselves in the perspective of the end user to understand what makes his life easier!',
  },
  {
    icon: 'ROCKET',
    title: 'Always deliver a little more!',
    subtitle: 'We go beyond delivering what just works. We always take that extra mile!',
  },
];

export default coreValues;
