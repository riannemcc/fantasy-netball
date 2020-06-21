import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



export const StatsTable = withFirebase(({ firebase }) => {
  const [playersLoaded, setPlayersLoaded] = useState(false)
  const [players, setPlayers] = useState([])
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  useEffect(() => {
    const fetchPlayers = () => {
      firebase.players()
        .then((playersSnapshot) => {
          console.log("Pla: ", playersSnapshot)
          setPlayers(playersSnapshot.docs)
          setPlayersLoaded(true)
        })
        .catch(console.log)
    }

    if (!playersLoaded) {
      fetchPlayers()
    }
  }, [firebase, playersLoaded])

  const classes = useStyles()
  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Player</StyledTableCell>
            <StyledTableCell align="right">Round One</StyledTableCell>
            <StyledTableCell align="right">Round Two</StyledTableCell>
            <StyledTableCell align="right">Round Three</StyledTableCell>
            <StyledTableCell align="right">Round Four</StyledTableCell>
            <StyledTableCell align="right">Round Five</StyledTableCell>
            <StyledTableCell align="right">Round Six</StyledTableCell>
            <StyledTableCell align="right">Round Seven</StyledTableCell>
            <StyledTableCell align="right">Round Eight</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">Tst</StyledTableCell>
            <StyledTableCell align="right">10</StyledTableCell>
            <StyledTableCell align="right">25</StyledTableCell>
            <StyledTableCell align="right">25</StyledTableCell>
            <StyledTableCell align="right">25</StyledTableCell>
            <StyledTableCell align="right">25</StyledTableCell>
            <StyledTableCell align="right">25</StyledTableCell>
            <StyledTableCell align="right">25</StyledTableCell>
            <StyledTableCell align="right">25</StyledTableCell>
          </StyledTableRow>
          {players.map((playerDoc) => {
            return (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">{playerDoc.get('name')}</StyledTableCell>
                <StyledTableCell align="right">10</StyledTableCell>
                <StyledTableCell align="right">25</StyledTableCell>
                <StyledTableCell align="right">25</StyledTableCell>
                <StyledTableCell align="right">25</StyledTableCell>
                <StyledTableCell align="right">25</StyledTableCell>
                <StyledTableCell align="right">25</StyledTableCell>
                <StyledTableCell align="right">25</StyledTableCell>
                <StyledTableCell align="right">25</StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
})
