import Author from 'types/posts/author';

export const getAuthorImage = (author: Author) => author.profilePictureUrl || author.avatar.url;

export const getAuthorName = (author?: Author) => {
  if (author) {
    if (author.firstName && author.lastName) {
      return `${author.firstName} ${author.lastName}`;
    }

    return author.name;
  }

  return '';
};

export const getAuthorInitials = (author: Author) => {
  if (author.firstName && author.lastName) {
    return author.firstName.charAt(0).toUpperCase() + author.lastName.charAt(0).toUpperCase();
  }

  return author.name.charAt(0).toUpperCase();
};
