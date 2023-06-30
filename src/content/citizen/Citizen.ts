import type { Character } from '../types'

import { v4 as uuid } from 'uuid'

export const Citizen: Character = {
  id: '1',
  image: '/public/citizen/citizen.svg',
  name: 'Jan',
  type: 'Citizen',
  backstory:
    "Jan is an ordinary individual leading a typical life as a regular taxpayer in the Canada Revenue Agency (CRA). Take a look at a typical day in Jan's life.",
    starterCredentials: [
    {
      id: uuid(),
      name: 'CRA ID Card',
      icon: '/public/citizen/citizen.svg',
      attributes: [
        { name: 'Name', value: 'Jan van Dalen' },
        { name: 'Date of birth', value: '19950210' },
        { name: 'Street', value: '875 Heron Road' },
        { name: 'City', value: 'Ottawa' },
        { name: 'Nationality', value: 'Canada' },
      ],
    },
  ],
}
