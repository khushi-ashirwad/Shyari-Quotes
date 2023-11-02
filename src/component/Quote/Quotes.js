import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import { quotesdata } from '../../data/Quotes';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
const QuotesTable = ({ data }) => {
  const tableCellStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '500',
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
      <TableHead sx={{
        display: "flex",
        padding: "1rem 3rem",
        backgroundColor: "#F3F3F3"
      }}>
        <CalendarMonthTwoToneIcon sx={{ fontSize: "2rem" }} />
        <Typography sx={{ fontSize: "1.3rem", paddingLeft: "1rem" }}>All Quotes</Typography>
      </TableHead>
      <Table>
        <TableHead sx={{ backgroundColor: "#F8F2FF" }}>
          <TableRow>
            <TableCell style={tableCellStyle}>Quote</TableCell>
            <TableCell style={tableCellStyle}>Category</TableCell>
            <TableCell style={tableCellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((quoteData, index) => (
            <TableRow
              key={index}
              sx={{ backgroundColor: index % 2 === 1 ? '#F8F2FF' : 'transparent' }}
            >
              <TableCell style={tableCellStyle}>{quoteData.quote}</TableCell>
              <TableCell style={tableCellStyle}>{quoteData.category}</TableCell>
              <TableCell style={tableCellStyle}>
                <IconButton aria-label="edit" color="primary">
                  <FiEdit />
                </IconButton>
                <IconButton aria-label="delete" color="error">
                  <RiDeleteBin6Line />
                </IconButton>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Quotes = ({ data }) => {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        margin: '2rem 3rem',
        width: '140rem',
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: '500',
          marginBottom: '2rem',
        }}
      >
        Manage Quotes
      </Typography>
      <QuotesTable data={quotesdata} />
    </Box>
  );
};

export default Quotes;
