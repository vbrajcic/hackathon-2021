interface Category {
  name: string;
  description: string;
  icon: string;
}

const expertiseCategories: Category[] = [
  {
    name: 'Product Strategy',
    description: 'Holistic understanding of what the user expects, wants and hates about digital products.',
    icon: 'ProductStrategy',
  },
  {
    name: 'UI/UX Design',
    description: 'Driven by research insights we frame an abstract idea into an overall product context.',
    icon: 'Design',
  },
  {
    name: 'Web Development',
    description: 'Our development team excels at building high performance products across all platforms and devices.',
    icon: 'Web',
  },
  {
    name: 'Mobile Development',
    description: 'Once we’re clear for take-off, what was once a user interface, now becomes a robust digital product.',
    icon: 'Mobile',
  },
];

export default expertiseCategories;
