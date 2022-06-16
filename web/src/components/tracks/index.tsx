import { MusicNote } from '@mui/icons-material';
import { Avatar, Fade, List, ListItem, ListItemAvatar } from '@mui/material';
import React from 'react';

interface Track {
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface Props {
  tracks: Track[] | undefined;
}

export const Tracks: React.FC<Props> = ({ tracks }) => {
  return (
    <Fade in={true} timeout={1000}>
      <List>
        {tracks?.length && tracks?.map((t, i) => (
          <ListItem key={i} sx={{
            width: '40%',
            padding: '10px',
            '&:hover': {
              outline: '1px solid #A9A9A9',
            },
            cursor: 'pointer'
          }}>
            <ListItemAvatar>
              <Avatar>
                <MusicNote></MusicNote>
              </Avatar>
            </ListItemAvatar>
            <p>{t.artist} - {t.title}</p>
          </ListItem>
        ))}
      </List>
    </Fade>
  );
};
