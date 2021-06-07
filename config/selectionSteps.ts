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
    title: 'Prijave',
    subtitle: 'do 12.06.2021',
  },
  {
    id: 'talk',
    step: '02',
    title: 'Razgovori s kandidatima',
    subtitle: 'real time problem solving',
  },
  {
    id: 'internship',
    step: '03',
    title: 'Internship',
    subtitle: 'odabrani kandidati će dobiti obavijest e-mailom',
  },
];

export default selectionSteps;
