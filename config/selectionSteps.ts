export interface SelectionStep {
  id: 'apply' | 'talk' | 'internship';
  step: string;
  title: string;
  subtitle: string;
}

const selectionSteps: SelectionStep[] = [
  {
    id: 'apply',
    step: '01',
    title: 'Apply',
    subtitle: 'Via form on this page. Applications close on June 26.',
  },
  {
    id: 'talk',
    step: '02',
    title: 'Interview',
    subtitle: 'Live chat with top candidates (real time problem solving).',
  },
  {
    id: 'internship',
    step: '03',
    title: 'Internship',
    subtitle:
      'The list of selected candidates will be announced by July 7 (selected candidates will be contacted by email).',
  },
];

export default selectionSteps;
