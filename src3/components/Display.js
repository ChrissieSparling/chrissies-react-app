import React from 'react';
import Card from './Card';

const canine = [{
  name: 'Spot',
  description: 'The best boy',
  id: 1,
},
{
  name: 'Jabba-the-PUG',
  description: 'An asshole whom I love',
  id: 2,
},
{
  name: 'Chew-Barka',
  description: 'Friend for life',
  id: 3,
},
{
  name: 'Rickster',
  description: 'Big Boy',
  id: 4,
},
];


export default function Display() {
  return (
    <div>
    {canine.map((canine)=> (
     <Card name={canine.name} description={canine.description} id={canine.id} />
    ))}
      </div>
  );
}
