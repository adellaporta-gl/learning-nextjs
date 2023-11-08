import { useRouter } from 'next/router';
import contacts from '../api/contacts';

const DynamicContact = () => {
    const router = useRouter();
    const contactId = router.query.contactId;
    const selectedContact = contacts.find(contact => contact.id == contactId);
    console.log("router", router)
    console.log("contactId", contactId)
    console.log("contacts", contacts);
    console.log("selectedContact", selectedContact);
    if (!selectedContact) return <h3>Not found!</h3>
    return (
        <div>
            <h3>ID: {selectedContact.id}</h3>
            <h4>Name: {selectedContact.name}</h4>
            <h4>Country: {selectedContact.country}</h4>
        </div>
    );
}

export default DynamicContact;