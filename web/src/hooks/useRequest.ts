import { gql, GraphQLClient } from 'graphql-request';
import { useQuery } from 'react-query';

const graphQLClient = new GraphQLClient('http://localhost:4000/graphql');

export const useTracks = () => {
  return useQuery('tracks', async () => {
    const { tracks } = await graphQLClient.request(gql`
    {
      tracks {
        title
        artist
        genre
        duration
      }
    }
    `);

    return tracks;
  });
};
