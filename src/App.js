import React, { useEffect } from 'react';

import * as ComfyJS from 'comfy.js';
import Linkify from 'react-linkify';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function App() {
  const classes = useStyles();

  const [ rewardQueue, setRewardQueue ] = React.useState([]);

  useEffect(() => {
    const channel = new URLSearchParams(window.location.hash.slice(1)).get("channel");
    const token = new URLSearchParams(window.location.hash.slice(1)).get("token");
    //const reward = new URLSearchParams(window.location.hash.slice(1)).get("reward");
    //
    console.log(channel, token);

    ComfyJS.onReward = ( user, reward, cost, message, extra ) => {
      const item = {
        key: JSON.stringify([ user, reward, message, new Date().getTime() ]),
        user,
        reward,
        message
      };

      console.log(item);

      setRewardQueue(q => [ ...q, item ]);
    }

    ComfyJS.Init( channel, token );
  }, [ ]);

  return (
    <Container fixed>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="left">message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rewardQueue.map((row) => (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.user}
                </TableCell>
                <TableCell align="left">
                  <Linkify properties={{target: '_blank'}}>{row.message}</Linkify>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  );
}

export default App;
