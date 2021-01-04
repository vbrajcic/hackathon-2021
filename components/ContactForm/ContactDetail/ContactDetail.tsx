import React, { ElementType, FC } from 'react';

import Typography from '@material-ui/core/Typography';
import style from './ContactDetail.module.scss';

type ContactDetailProps = {
  title?: string;
  icon?: ElementType;
};

const ContactDetail: FC<ContactDetailProps> = ({ title, icon: Icon, children }) => (
  <div className={style.contactDetail}>
    {Icon && <Icon className={style.icon} />}
    {title && (
      <Typography variant="body2">
        <b>{title}</b>
      </Typography>
    )}
    <Typography variant="body2" className={style.text}>
      {children}
    </Typography>
  </div>
);
export default ContactDetail;
