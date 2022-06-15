import { MusicNote } from '@mui/icons-material';
import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';
import React from 'react';

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
    <List>
      {tracks.map((t, i) => (
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar>
              <MusicNote></MusicNote>
            </Avatar>
          </ListItemAvatar>
          {t.artist} - {t.title}
        </ListItem>
      ))}
    </List>
  );
};
