import type { UseCase } from '../../types'

import { v4 as uuid } from 'uuid'

import { StepType } from '../../types'

const URL = '/public/corporation/useCases/taxCompliance'

export const TaxCompliance: UseCase = {
  slug: 'profitable',
  card: {
    title: 'Get your Tax Compliance Certificate',
    image: `${URL}/Discussion-amico(1).svg`,
    //Removing the description for more leaner look and feel.
    description: ``
  },

  stepper: [
    {
      id: uuid(),
      name: `Connect with the CRA`,
      description: `Setup a secure connection with the CRA.`,
      steps: 1,
      section: 1,
    },
    {
      id: uuid(),
      name: 'Submit your application',
      description: 'Use the connection to submit your credentials.',
      steps: 4,
      section: 1,
    },
    {
      id: uuid(),
      name: 'Receive your Tax Compliance Certificate',
      description: 'Accept your new noa credential that is issued by the CRA.',
      steps: 7,
      section: 1,
    },
  ],

  sections: [
    {
      id: uuid(),
      entity: {
        name: 'CRA',
        icon: `/public/cra-logo4.png`,
        imageUrl: 'https://lespromenades.com/wp-content/uploads/2021/09/0822cab22c9104aa8468e7985463d1fa9ab2f1eb-1.png',
      },
      colors: {
        primary: '#4686C6',
        secondary: '#c4dbf3',
      },
      requestedCredentials: [
        {
          id: uuid(),
          name: 'CRA ID Card',
          icon: `/public/businesswoman/reshot-icon-id-card-X5AFGW4HQ6.svg`,
          properties: ['Name', 'Date of birth'],
        },
        {
            id: uuid(),
            name: 'Business Card',
            icon: `/public/businesswoman/icon-creditcard.png`,
            properties: ['Company Name', 'Business Number'],
          },
      ],
      issueCredentials: [
        {
          id: uuid(),
          name: 'Tax Compliance Certificate',
          properties: [{ name: 'Name' }, { name: 'Date of birth' }, {name: 'Company Name' }, { name: 'Business Number' }],
          attributes: [
            { name: 'Tax Compliant', value: 'Yes' },
            { name: 'Total Profit', value: '300000' },
          ],
          icon: `${URL}/tax-cert.svg`,
        },
      ],
      steps: [
        {
          id: uuid(),
          type: StepType.START,
          image: `${URL}/Discussion-amico(1).svg`,
          title: 'Get your Tax Compliance Certificate',
          description: `Few clicks away to verify your Tax Compliance status `,
        },
        {
          id: uuid(),
          type: StepType.CONNECTION,
          title: 'Scan the QR-code to connect with the agency.',
          description: `You're ready to submit your credentials on their website. Scan the QR-Code to set up a secure connection with the agency. The agency connection will appear in your wallet!`,
        },
        {
          id: uuid(),
          type: StepType.INFO,
          title: 'You now have a secure connection.',
          description: `Using this connection, you are going to share some company information that is needed to complete the application.`,
          image: `${URL}/student-fill-out.svg`,
        },
        {
          id: uuid(),
          type: StepType.PROOF,
          title: 'The agency wants some information.',
          description: `Grab your wallet, you've received a request for some information! To finish the application process, share the information by accepting the request. `,
          requestOptions: {
            name: 'Tax Compliance Request',
            comment: 'The CRA would like some of your bussiness information.',
          },
        },
        {
          id: uuid(),
          type: StepType.INFO,
          title: `You've submitted your application.`,
          description: `Your application  is being processed by the agency. This shouldn't take too long, because all the data you've shared can be verified in seconds`,
          image: `${URL}/student-secure.svg`,
        },
        {
          id: uuid(),
          type: StepType.INFO,
          title: 'You got in!',
          description: `Congrats! The agency has verified your credentials. Now the agency will issue you a Compliance Certificate which can be used to prove your Grant Eligibilty `,
          image: `${URL}/student-accepted.svg`,
        },
        {
          id: uuid(),
          type: StepType.CREDENTIAL,
          title: `The agency issues you your Tax Compliance Certificate`,
          description: `Open your wallet, and accept your new credential.`,
          requestOptions: {
            name: 'Tax Compliance Certificate',
            comment: 'Here is your TCP credential.',
          },
          useProof: true,
        },
        {
          id: uuid(),
          type: StepType.END,
          title: 'Congratulations, you did it!',
          description: 'Great job on finishing this use case. These are the steps you took.',
          endStepper: [
            {
              id: uuid(),
              title: `You connected with the agency`,
              description: 'This secure channel can be used for all of your communication with the agency.',
              image: `${URL}/student-on-laptop.svg`,
            },
            {
              id: uuid(),
              title: 'You safely presented your data',
              description: `Without showing all of your data, you successfully applied by accepting the agency's request.`,
              image: `${URL}/student-secure.svg`,
            },
            {
              id: uuid(),
              title: 'You got in!',
              description: `Your application was accepted and the agency issued you your Tax Compliance Certificate. This credential is now safely stored in your digital wallet.`,
              image: `${URL}/student-accepted.svg`,
            },
          ],
        },
      ],
    },
  ],
}
