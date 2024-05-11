import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ContactForm>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList>
          <Filter />
        </ContactList>
      </ContactForm>
    </div>
  );
};
