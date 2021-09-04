import { useState } from "react";
import { Title } from "../../../components/Title";
import { api } from "../../../services/api";

const Event = ({ eventData }) => {

  const [event, setEvent] = useState(eventData);

  return (
    <>
      <Title title="Informações da Palestra" />
      <h2>Evento: {event.title}</h2>
    </>
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