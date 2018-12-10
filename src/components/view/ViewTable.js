import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import  LinkedButton   from '../layout/LinkedButton';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
  );
  
  let counter = 0;
  function createData(record, owner, irisscore, datauri, sigcount) {
    counter += 1;
    return { id: counter, record, owner, irisscore, datauri, sigcount };
  } 
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });
  
  class ViewTable extends React.Component {
    state = {
      rows: [
        createData('Record: 0xebf0a304f0e5a6445a7fd5850d00fd851837e8694184072e0f1b79037e447485', 
        'Owner: 0xa82ae2ac8d0c0f5399a68c44492cbc03f49a903d', 
        'IrisScore: 1',
        'DataUri: QmdmFMpWkjtTJXorkddhqf8ng9s5D81qSKZNuKnHN72RWn',
        0),
        createData('Record: 0x0a7111cf0fa4d79878bc9bcfbb80cfb1b145b8fef5667663fab01feea09d3016', 
        'Owner: 0x24bfb481bb252d82c009d9531741ef2dd71e9492', 
        'IrisScore: 1',
        'DataUri: QmcoAeiu8UprQLvGtLVAV2r98VjvMUvDArh8BSE67WeWTY',
        1),
        createData('Record: 0xdc83443cf1fc4379e2fe8304f3d3a0547547496949d15595e174e6866e565f91', 
        'Owner: 0x6ba3180487ba85a9e4d29ab306360dc19ebc5e59', 
        'IrisScore: 1',
        'DataUri: Qmakaa696rCXKg4beduiAiF7T3ENeKY97WjYuXqCA8P4oC',
        1),
        createData('Record: 0xfa92a08dc6462f81f86a8d9459a5b2dd1c37bfaad50aaf4942236c584fa95a54', 
        'Owner: 0x62aea47bcf377f3103f16f3fdc3f399ac05ca611', 
        'IrisScore: 1',
        'DataUri: Qma5CHMNZgBDNB7KJapjxSg9iFZbrphvhEvDmiYZTJsywF',
        0), 
        createData('Record: 0xa494f6e7067ac3d72e7989f6ccf2e09804b656be993c37af3d0f005cbfa98b19', 
        'Owner: 0xd2a2e8da5b44bfabe6216486a364ba28a13dc08b', 
        'IrisScore: 1',
        'DataUri: QmYEdHcDEgqJUVrykVNjCf1jqDchYWTKxT8AJT9qBpcjkm',
        1),

        createData('Record: 0x11e551a6f346ad8b882355007e8198738e3ac9bbbb25e78d4be3d255631c076b', 
        'Owner: 0xace8f80a68284e2ab733b8b1c06ea48ab4166a37', 
        'IrisScore: 1',
        'DataUri: QmTsSpVc5UtgPViVFdLnZamuMGghTrR68dXoppLnRoDdKV',
        1),

      ].sort((a, b) => (a.record < b.record ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
    };
  
    handleChangePage = (event, page) => {
      this.setState({ page });
    };
  
    handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
    };
  
    render() {
      const { classes } = this.props;
      const { rows, rowsPerPage, page } = this.state;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
      return (
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell><b>Details</b></TableCell>
                  <TableCell><b>Signatories Count</b></TableCell>
                  <TableCell><b>Metadata</b></TableCell> 
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.record}<br/>
                        {row.owner}<br/>
                        {row.irisscore}<br/>
                        {row.datauri}
                      </TableCell> 
                      <TableCell >
                        <LinkedButton 
                          label={row.sigcount} 
                          to='attestationList'/>
                      </TableCell>
                      <TableCell >
                        <LinkedButton 
                          label='click to view metadata' 
                          to='viewmetadata'/>
                      </TableCell>  
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      native: true,
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActionsWrapped}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Paper>
      );
    }
  }
  
  ViewTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ViewTable);