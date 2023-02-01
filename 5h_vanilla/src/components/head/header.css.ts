import { style } from '@vanilla-extract/css';

export const header = style({
  background: "#fff",
  width: '100%',
});

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 1rem',
});

export const title = style({
  fontSize: '2rem',
});

export const link = style({
  color: '#2ea4de',
  textDecoration: 'none',
  transition: 'color .3s',
  ':hover': {
    color: '#fbcb62'
  }
});