import Avatar from './avatar';

type Author = {
  name: string;
  firstName: string | null;
  lastName: string | null;
  avatar: Avatar;
  description: string | null;
};

export default Author;
