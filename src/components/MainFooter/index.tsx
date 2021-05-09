import * as React from 'react';
import { Box, Text } from 'grommet';
import { Title } from '../Base/components/Title';
import * as styles from './styles.styl';
import cn from 'classnames';
import { Icon } from 'components/Base/components/Icons';

export const MainFooter: typeof Box = props => (
  <Box
    flex={{ shrink: 0 }}
    style={{
      borderTop: '1px solid rgb(231, 236, 247)',
      backgroundColor: '#1c2a5e',
      overflow: 'visible',
      width: '100%',
      zIndex: 100,
      minWidth: '550px',
      paddingTop: '64px',
      paddingBottom: '64px',
    }}
    direction="row"
    justify="end"
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    {...props}
  >
    <Box
      direction="row"
      align="center"
      gap="89px"
      style={{
        minWidth: '550px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0px 30px',
        //height: 100,
        //minHeight: 100,
        width: '100%',
        alignItems: 'start',
      }}
    >
      <Box direction="row" align="baseline">
        <a href="https://rainbowbridge.herokuapp.com/" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
          <img style={{ width: 140 }} src="https://cdn.iconscout.com/icon/free/png-256/rainbow-2363171-1972043.png" />
        </a>
      </Box>
      <Box direction="row" align="baseline" gap="89px">
        <Box>
          <Title size="small" style={{ color: '#1AC7FF' }}>
            Team members
          </Title>
          <div
            style={{ textDecoration: 'none', marginTop: '16px', color: '#fff' }}
          >
            <Text>Brahma</Text>
          </div>
          <div
            style={{ textDecoration: 'none', marginTop: '16px', color: '#fff' }}
          >
            <Text>Guy</Text>
          </div>
          <div
            style={{ textDecoration: 'none', marginTop: '16px', color: '#fff' }}
          >
            <Text>Larry</Text>
          </div>
          <div
            style={{ textDecoration: 'none', marginTop: '16px', color: '#fff' }}
          >
            <Text>Mark</Text>
          </div>
          
        </Box>
      </Box>
    </Box>
  </Box>
);
