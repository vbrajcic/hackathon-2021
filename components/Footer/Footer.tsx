import Container from 'components/Container';
import Hyperlink from 'components/Hyperlink';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h4 className="tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            &copy; 2020 Profico. All rights reserved.
          </h4>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Hyperlink href="/privacy-policy" AnchorProps={{ className: 'mx-6 font-bold hover:underline' }}>
              Privacy policy
            </Hyperlink>
            <a href="https://profi.co/" target="_blank" rel="noreferrer" className="mx-3 font-bold hover:underline">
              View old site
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
