import React from "react";

interface Track {
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface Props {
  tracks: Track[]
}

export const Tracks: React.FC<Props> = ({ tracks }) => {
  return (
    <ul>
      { tracks.map(t => {
        return (
          <li>
            <strong>{t.artist}</strong> - {t.title}
          </li>
        )
      })}
    </ul>
  )
}
