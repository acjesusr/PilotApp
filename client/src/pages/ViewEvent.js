import React from 'react';
import EventCard from '../components/EventCard';

const attendance = [
    {
      name: "John",
      lastName:"Doe",
      email:"aregularpersonemail1@gmail.com"
    },
    {
      name: "John",
      lastName:"Doe",
      email:"aregularpersonemail2@gmail.com"
    },
    {
      name:"Jane",
      lastName:"Doe",
      email:"aregularpersonemail3@gmail.com"
    },
    {
      name:"Jane",
      lastName:"Doe",
      email:"aregularpersonemail4@gmail.com"
    }]

export default function ViewEvent() {
    return(
        <div>
            <EventCard event="Event Name" date="September 14, 2016" description="desc." attendance={attendance}/>
            {/*<EventCard/>
            <EventCard/>*/}
        </div>
    );
}
//View material-ui documentation for ideas about viewing the events