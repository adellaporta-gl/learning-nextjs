import Link from 'next/link';
import contacts from './api/contacts';

const ContactList = () => {
    console.log("contacts", contacts)
    let contactIndex = 0;
    return (
        <ul>
            {contacts.map(contact => <Link href={`/contacts/${contact.id}`} key={++contactIndex}><li>{contact.name}</li></Link>)}
        </ul>
    );
}
export default ContactList;