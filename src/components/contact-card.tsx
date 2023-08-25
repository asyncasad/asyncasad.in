import { Contact } from '@/types';
import Link from 'next/link';
import { type FC } from 'react';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: FC<ContactCardProps> = ({ contact }) => {
  const { link, title } = contact;
  return (
    <Link
      href={link}
      target="_blank"
      className="flex transform cursor-pointer flex-row items-center gap-4 rounded-sm border border-foreground px-8 py-4 duration-200 ease-in-out hover:scale-105"
    >
      {<contact.icon />}
      <p>{title}</p>
    </Link>
  );
};

export default ContactCard;
