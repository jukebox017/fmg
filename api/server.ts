import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import tracks from './data/tracks.json';

const schema = buildSchema(`
  type Query {
    track(id: Int): Track
    tracks: [Track]
  },
  type Track {
    title: String
    artist: String
    genre: String
    duration: Int
  }
`);

const getTrack = ({ id }: { id: number}) => {
  return tracks[id];
}

const getTracks = () => {
  return tracks;
}

const root = {
  track: getTrack,
  tracks: getTracks,
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
