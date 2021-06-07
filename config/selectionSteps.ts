export interface SelectionStep {
  id: number;
  step: string;
  title: string;
  subtitle: string;
}

const selectionSteps: SelectionStep[] = [
  {
    id: 0,
    step: '01',
    title: 'Prijave',
    subtitle: 'do 12.06.2021',
  },
  {
    id: 1,
    step: '02',
    title: 'Razgovori s kandidatima',
    subtitle: 'real time problem solving',
  },
  {
    id: 2,
    step: '03',
    title: 'Internship',
    subtitle: 'odabrani kandidati će dobiti obavijest e-mailom',
  },
];

export default selectionSteps;
