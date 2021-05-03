interface Category {
  name: string;
  description: string;
  icon: string;
}

const expertiseCategories: Category[] = [
  {
    name: 'Product Strategy',
    description: 'Complete understanding of what the user expects, wants and hates about digital products.',
    icon: 'ProductStrategy',
  },
  {
    name: 'UI/UX Design',
    description:
      'Driven by research, we translate an abstract idea into a product context, highlighting the importance of the user experience alongside carefully crafted UI.',
    icon: 'Design',
  },
  {
    name: 'Web Development',
    description: 'Our development team excels at building high performance products across all platforms and devices.',
    icon: 'Web',
  },
  {
    name: 'Mobile Development',
    description:
      'Keep your customers close and engaged by getting on their phones. We can help you uncover new growth opportunities by building custom mobile products.',
    icon: 'Mobile',
  },
];

export default expertiseCategories;
