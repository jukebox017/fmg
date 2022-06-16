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

export const useTrack = (trackId: string | undefined) => {
  return useQuery(['track', trackId], async () => {
    const { track } = await graphQLClient.request(gql`
    {
      track(id: ${trackId}) {
        title
        artist
        genre
        duration
      }
    }
    `);

    return track;
  });
};
