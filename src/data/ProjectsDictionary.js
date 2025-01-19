import { CryptoImages } from '../asset/project/crypto-wave'
import { CVJuryImages } from '../asset/project/cv-jury'
import { DefinePediaImages } from '../asset/project/define-pedia'
import { GrantMatchImages } from '../asset/project/grant-match'
import { TripeSaverImages } from '../asset/project/my-trip-saver'
import { SigneoImages } from '../asset/project/signeo'

export const ProjectsDictionary = {
  'crypto-wave': {
    title: 'Crypto Wave',
    link: '',
    images: CryptoImages,
    technologies: ['Reactjs', 'BootStrap', 'Python', 'FAST-API', 'MongoDB'],
    description: `Crypto Wave is a cryptocurrency tracking tool that displays live data for well-known
                    cryptocurrencies and enables real-time price comparisons through interactive graphs. It
                    also includes a forecasting feature, predicting future price trends. The frontend is built
                    with React and Bootstrap, while the backend is powered by Python FastAPI with MongoDB for
                    data storage. Using machine learning models developed by fellow developer, I integrated
                    APIs to support the live data feed and forecasting functionality.`,
  },
  signeo: {
    title: 'Signeo',
    link: '',
    images: SigneoImages,
    technologies: ['Reactjs', 'Material-UI', 'Python', 'FAST-API'],
    description: `Signeo is a data-driven sales forecasting platform designed for the paint industry.
                  Built using React for the frontend and FastAPI for the backend, it provides real-time
                  visualizations and predictions of sales data. The system features interactive graphs 
                  that help users track sales trends and make informed decisions. Its models were developed
                  by fellow Ai team member which i utilize in the fast api.`,
  },
  'my-trip-saver': {
    title: 'My Trip Saver',
    link: '',
    images: TripeSaverImages,
    technologies: ['Reactjs', 'Redux', 'Ant-Design', 'Java', 'Sql'],
    description: `My Trip Saver is a flight booking application for Indian airlines. 
                  It provides the realtime flight data of more than 10 flight providers. 
                  Users can easily search through and book flights.Its frontend was built in Reactjs and backend in java. 
                  I only worked on the frontend whereas its backend was developed by a fellow developer`,
  },
  'grant-match': {
    title: 'Grant Match',
    link: 'https://grantmatch.ai/',
    images: GrantMatchImages,
    technologies: [
      'React',
      'Redux toolkit',
      'Material-UI',
      'Node',
      'Express',
      'Swagger',
      'Jest',
      'Typesrcipt',
      'Python',
      'Fast-API',
      'stripe',
      'MongoDB',
      'Pinecone',
      'Docker',
    ],
    description: `GrantMatch is a platform which birngs the most relevant grant opportunities to you,
                    so you can stop your tedious & time consuming search processes for the grants with a free 15 day trial
                    without the need of a credit/debit card.I worked along side a team of developers under the supervision of an expereinced Team Lead.Wokring on both the frontend and backends.
                    `,
  },
  'cv-jury': {
    title: 'CV Jury',
    link: 'https://coverletterai.uk/',
    images: CVJuryImages,
    technologies: [
      'React',
      'Redux toolkit',
      'Material-UI',
      'Python',
      'Fast-API',
      'Docker',
      'Digital Ocean',
      'openai-api',
    ],
    description: `CVJury AI Cover Letter Writer A powerful tool helping you create compelling
                  cover letters by suggesting content and language based on industry-specific
                  best practices. I developed the frontend in react and backend apis in the python fast api.
                  I containerized the application using Docker and deployed it on Digital Ocean. 
                  `,
  },
  'time-pay-jao': {
    title: 'Time Pay Jao',
    link: '',
    images: TripeSaverImages,
    technologies: ['React', 'TailwindCSS'],
    description: `Time Pay Jao is a ride booking platform. This is the Manager side of the Time Pay Jao application.I created the frontend in reactjs and material ui.`,
  },
  'define-pedia': {
    title: 'DefinePedia',
    link: '',
    images: DefinePediaImages,
    technologies: [
      'Nextjs',
      'React',
      'Material-UI',
      'stripe',
      'Express',
      'Typescript',
      'MongoDB',
      'Docker',
    ],
    description: `DefinePedia is a project focusing on Education problems of students and providing them with a clear and best understanding
                  of their study material.I worked with a team of web developers and worked on both frotend and backend.This is the user side module. It consists of two dashboard modules too.`,
  },
  emercient: {
    title: 'Emercient',
    link: '',
    images: TripeSaverImages,
    technologies: [
      'Reactjs',
      'Material-UI',
      'Python',
      'FAST-API',
      'Azure Active Directory',
      'Azure Blob Storage',
      'CosmosDB',
      'Docker',
    ],
    description: `Emercient is a project that enables users to easily search through their data using prompts. Users can create Knowledge Bases
                    and upload data files in Knowlegde Basis and later search through the data using prompts.`,
  },
}
