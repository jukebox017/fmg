import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTrack } from '../../hooks/useRequest';
import './index.css';

export const TrackDetail: React.FC<any> = () => {
  const { trackId } = useParams();
  const { data, error, isLoading, isSuccess } = useTrack(trackId);

  // Credit to https://stackoverflow.com/a/64021404
  const formatDuration = (duration: number) => {
    const minutes = duration / 60 | 0;

    let seconds: any = duration % 60;
    seconds = seconds.toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  return data ? (
    <div className="track-detail">
      <h2>{data.title}</h2>
      <h4>{data.artist}</h4>
      <p>Genre: <strong>{data.genre}</strong></p>
      <p>Duration: <strong>{formatDuration(data.duration)}</strong></p>

      <Link to={'/'}>
        <p>Back to track listing</p>
      </Link>
    </div>
  ) : (
    <div className="track-detail">
      <span>Sorry, this track does not exist.</span>
      <Link to={'/'}>
        <p>Back to track listing</p>
      </Link>
    </div>
  );
};
