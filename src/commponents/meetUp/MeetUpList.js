import MeetUpItem from "./MeetUpItem";
import classes from "./MeetUpList.module.css";

function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetUps.map((item) => (
        <MeetUpItem
          id={item.id}
          key={item.id}
          address={item.address}
          description={item.description}
          title={item.title}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
