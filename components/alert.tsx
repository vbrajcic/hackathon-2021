import Container from './container';

export default function Alert({ preview }) {
  if (!preview) return null;
  return (
    <div className="border-b bg-accent-7 border-accent-7 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          This page is a preview.
          {' '}
          <a href="/api/exit-preview" className="underline hover:text-cyan duration-200 transition-colors">
            Click here
          </a>
          {' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  );
}
