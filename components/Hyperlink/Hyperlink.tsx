import React from 'react';
import Link, { LinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

interface HyperlinkProps extends LinkProps {
  AnchorProps?: MuiLinkProps;
}

const Hyperlink: React.FC<HyperlinkProps> = ({ href, children, AnchorProps, ...props }) => (
  <Link href={href} passHref {...props}>
    <MuiLink {...AnchorProps}>{children || AnchorProps?.children}</MuiLink>
  </Link>
);

export default Hyperlink;
