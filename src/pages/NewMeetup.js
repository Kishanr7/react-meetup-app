import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://playground-6205f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=> {
            history('/');
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>;
}

export default NewMeetupPage;