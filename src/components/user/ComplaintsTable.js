import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    textAlign:"right",
  },
  container:{
      textAlign:"center",
      margin: "4rem auto",
  },
});

function createData(Locality, Remarks) {
  return { Locality, Remarks };
}

const rows = [
  createData('John Doe', 'Frozen yoghurt'),
  createData('Ice cream sandwich','Frozen yoghurt'),
  createData('Eclair','Frozen yoghurt'),
  
];

export default function ComplaintsTable() {
  const classes = useStyles();

  return (
      <Container maxWidth="lg"  >
    <TableContainer className="container" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <h4>Name</h4> </TableCell>
            <TableCell align="right"> <h4>Issue</h4> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Locality}>
              <TableCell component="th" scope="row">
                {row.Locality}
              </TableCell>
              <TableCell align="right">{row.Remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
