import React from 'react';
import Link, { LinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

interface HyperlinkProps extends LinkProps {
  AnchorProps?: MuiLinkProps;
  component?: React.ReactNode;
}

const Hyperlink: React.FC<HyperlinkProps> = ({ href, children, component: Component, AnchorProps, ...props }) => (
  <Link href={href} passHref {...props}>
    {Component || <MuiLink {...AnchorProps}>{children || AnchorProps?.children}</MuiLink>}
  </Link>
);

export default Hyperlink;
