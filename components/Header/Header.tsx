import Hyperlink from 'components/Hyperlink';

const Header = () => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Hyperlink href="/" AnchorProps={{ className: 'hover:underline' }}>
      Profico
    </Hyperlink>
    .
  </h2>
);

export default Header;
