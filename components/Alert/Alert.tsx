import Container from 'components/Container';

type AlertProps = {
  preview?: boolean;
};

export default function Alert({ preview }: AlertProps) {
  if (!preview) {
    return null;
  }

  return (
    <div className="border-b bg-accent-7 border-accent-7 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          This page is a preview.&nbsp;
          <a href="/api/exit-preview" className="underline hover:text-cyan duration-200 transition-colors">
            Click here
          </a>
          &nbsp; to exit preview mode.
        </div>
      </Container>
    </div>
  );
}
