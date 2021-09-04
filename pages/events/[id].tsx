import { useState } from "react";
import { api } from "../../services/api";

const Event = ({ eventData }) => {

  const [event, setEvent] = useState(eventData);

  return (
    <h1>Evento: { event.title }</h1>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const { data } = await api.get('events');

  const eventData = data.find(event => event.id === id);

  return {
    props: {
      eventData
    }
  }
}

export default Event;