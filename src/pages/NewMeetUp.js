import NewMeetUpForm from "../commponents/meetUp/NewMeetUpForm";

function NewMeetUp(props) {
  function addNewMeetupHandler(meetupData) {
    fetch(
      "https://react-course-ceb87-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetupData),
      }
    )
      .then((Response) => Response.json)
      .then((data) => {
        console.log("success", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section>
      <h1>New MeetUp</h1>
      <NewMeetUpForm onAddMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetUp;
