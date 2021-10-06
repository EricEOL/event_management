import { useState } from "react";
import { Title } from "../../../components/Title";
import { EventInformations } from "../../../components/EventInformations";
import { api } from "../../../services/api";

const Event = ({ eventData }) => {

  return (
    <>
      <EventInformations {...eventData}>
        <Title title="Informações da Palestra" />
      </EventInformations>
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