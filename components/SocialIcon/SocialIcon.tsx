import React, { ElementType } from 'react';
import Hyperlink from 'components/Hyperlink';
import style from './SocialIcon.module.scss';

interface SocialIconProps {
  icon: ElementType;
  url: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, url }) => (
  <Hyperlink
    href={url}
    AnchorProps={{ 'aria-label': url, target: '_blank', rel: 'noopener noreferrer', className: style.container }}
  >
    <Icon />
  </Hyperlink>
);

export default SocialIcon;
