import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import tracks from './data/tracks.json';
import path from 'path';

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

const getTrack = ({ id }: { id: number }) => {
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

app.get('/best-song', async (req, res) => {
  const enc = new TextDecoder('utf-8');
  const arr = new Uint8Array(
    [104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 121, 111, 117, 116, 117, 98, 101, 46, 99, 111, 109, 47, 119, 97, 116, 99, 104, 63, 118, 61, 81, 116, 66, 68, 76, 56, 69, 105, 78, 90, 111]
  );

  res.send(enc.decode(arr));
});

app.use(express.static(path.join(__dirname, '..', '..', 'web', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'web', 'build', 'index.html'))
});

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
