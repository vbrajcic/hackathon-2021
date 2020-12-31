import React from 'react';
import Container from 'components/Container';

interface AlertProps {
  preview?: boolean;
}

const Alert: React.FC<AlertProps> = ({ preview }) => {
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
};

export default Alert;
