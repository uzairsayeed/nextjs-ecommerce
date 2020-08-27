import React from 'react'
import TeamMembers from './components/TeamMembers/TeamMembers'

const teamMembers = [
  {
    name: 'Williamson',
    designation: 'Web Developer',
    image: 'images/img-1.jpg',
    about: `Williamson Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    name: 'Kristiana',
    designation: 'App Developer',
    image: 'images/img-2.jpg',
    about: `Kristiana Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    name: 'Brett',
    designation: 'Web Developer',
    image: 'images/img-3.jpg',
    about: `Brett Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    name: 'Morgan',
    designation: 'App Developer',
    image: 'images/img-1.jpg',
    about: `Morgan Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }
  
]

export default function OurTeam() {
  return (
    <div className="row my-4">
        <div className="col-12">
            <h2 className="noo-sh-title">Meet Our Team</h2>
        </div>

        {teamMembers.map((memberDetails) => (
          <div className="col-sm-6 col-lg-3">
            <TeamMembers {...memberDetails}/>
          </div>
        ))}
    </div>
  )
}
