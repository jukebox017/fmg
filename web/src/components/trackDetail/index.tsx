import React from 'react';
import { useParams } from 'react-router-dom';
import { useTrack } from '../../hooks/useRequest';

export const TrackDetail: React.FC<any> = () => {
  const { trackId } = useParams();
  const { data, error, isLoading, isSuccess } = useTrack(trackId);

  return data && (
    <>
      <h2>{data.title}</h2>
      <p>{data.artist}</p>
    </>
  );
};
