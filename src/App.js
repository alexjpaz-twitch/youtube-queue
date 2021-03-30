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

import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'

import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function App() {
  const classes = useStyles();

  const [ rewardQueue, setRewardQueue ] = React.useState(JSON.parse(localStorage.getItem("alexjpaz-twitch/linkify-queue")) || []);

  useEffect(() => {
    const channel = new URLSearchParams(window.location.hash.slice(1)).get("channel");
    const token = new URLSearchParams(window.location.hash.slice(1)).get("token");
    //const reward = new URLSearchParams(window.location.hash.slice(1)).get("reward");
    //
    console.log(channel, token);

    ComfyJS.onReward = ( user, reward, cost, message, extra ) => {
      const item = {
        key: JSON.stringify([ user, reward, message, new Date().getTime() ]),
        date: new Date(),
        user,
        reward,
        message
      };

      setRewardQueue(q => {
        const newq = [ item, ...q ].slice(0, 25);
        localStorage.setItem("alexjpaz-twitch/linkify-queue", JSON.stringify(newq));
        return newq;
      });
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
              <TableCell>Time</TableCell>
              <TableCell align="left">message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rewardQueue.map((row) => (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.user}
                </TableCell>
                <TableCell component="th" scope="row">
                  { row.date &&
                  <ReactTimeAgo date={row.date} locale="en-US"/>
                  }
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
