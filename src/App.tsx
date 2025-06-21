import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

// Define an interface for the data structure to ensure type safety
interface StateData {
  state: string;
  date: string;
  code: string;
  bureauId: string;
}

const data: StateData[] = [
  { state: 'AL', date: '07/01/2025', code: '*******1100', bureauId: '917495866' },
  { state: 'CA', date: '07/01/2025', code: '*******2190', bureauId: '102102101' },
  { state: 'FL', date: '07/01/2025', code: '*******4567', bureauId: '202202200' },
  { state: 'MA', date: '07/01/2025', code: '*******1689', bureauId: '301300302' },
  { state: 'PA', date: '07/01/2025', code: '*******4578', bureauId: '403400403' },
  { state: 'RI', date: '07/01/2025', code: '*******3498', bureauId: '500502501' },
];

export default function App() {
  // Define common styles for individual table cells
  const cellStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0rem',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    padding: '0.75rem 0.5rem', // Default padding for cells
    borderRight: '1px solid #CCC',
    borderBottom: '1px solid #CCC',
    borderLeft: '1px solid #CCC', // Ensure left border is applied
  };

  // Styles for the "ADD STATES IN BATCH" button
  const addStatesBatchButton = {
    display: 'flex',
    height: '2.5rem', // Note: height is set here but Material-UI Button might override some of it
    padding: '0.5rem 0.75rem',
    alignItems: 'center',
    gap: '0.25rem',
    alignSelf: 'stretch',
    borderRadius: '0.25rem',
    background: '#F3F9FD', // Primary background
    backgroundColor: '#F3F9FD', // Redundant but kept as per input
    borderColor: '#005695', // Border color
    color: '#005695', // Text color
    '&:hover': {
      backgroundColor: '#005695', // Hover background
      color: '#F3F9FD', // Hover text color
    },
  };

  // Styles for the page section title box
  const pageSectionTitle = {
    display: 'flex',
    height: '2.5em',
    padding: '0.5rem 0.75rem',
    alignItems: 'center',
    gap: '0.25rem',
    alignSelf: 'stretch',
    borderRadius: '0.25rem',
    background: '#F3F9FD',
    margin:'0 0 0.5rem 0'
  };


  return (

    // Main container box with responsive styling, shadow, and overall table border
    <Box sx={{
      // width: '100%',
      // height: '100%',
      // maxWidth: '900px', // Limit maximum width for better readability on large screens
       mx: 'auto', // Center horizontally
      // p: 2, // Padding around the content inside the main box
      // boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Subtle shadow for better visual separation
      // borderRadius: '8px', // Overall rounded corners for the entire table card
      // backgroundColor: '#FFFFFF', // White background for the card
      // border: '1px solid #CCC', // Overall border for the entire table structure
      // overflow: 'hidden' // Ensures rounded corners are respected for content inside
    }}>
      {/* Page section title and button */}
      <Box
        sx={{
          ...pageSectionTitle, // Apply the new pageSectionTitle styles
          //mb: 2, // Margin bottom
          justifyContent: 'space-between',
          //flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger
          //textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
          py: { xs: 1.5, sm: 0.5 } // Vertical padding for small screens (override if needed by Figma)
        }}
      >
        {/* Title Typography */}
        <Typography variant="h6" sx={{ mb: { xs: 1, sm: 0 } }}>States</Typography>
        {/* Add States in Batch Button */}
        <Button variant="outlined" size="small" sx={addStatesBatchButton}>
          ADD STATES IN BATCH
        </Button>
      </Box>

      {/* Table Header */}
      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          //gap: '0.25rem',
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 0,
          backgroundColor: '#5BC0BE', // Header background color
          fontWeight: 600, // Bold font for header
          color: '#000', // Changed text color to black
          flexWrap: 'nowrap', // Prevent header items from wrapping
          minHeight: '1.5rem', // Reduced header height by half
        }}
      >
        {/* Header Columns - apply common cell styles and override padding for header specific padding */}
        <Grid item xs={2} sm={2.5} sx={{ ...cellStyles, padding: '0.5rem' }}>State</Grid>
        <Grid item xs={3} sm={3} sx={{ ...cellStyles, padding: '0.5rem' }}>State Effective Date</Grid>
        <Grid item xs={3} sm={3} sx={{ ...cellStyles, padding: '0.5rem' }}>State Employer Code</Grid>
        <Grid item xs={4} sm={3.5} sx={{ ...cellStyles, padding: '0.5rem' }}>Bureau ID</Grid>
      </Grid>

      {/* Table Body - Container for scrollable content */}
      <Box
        sx={{
          maxHeight: '400px', // Set a maximum height for the scrollable area
          overflowY: 'auto', // Enable vertical scrolling when content exceeds maxHeight
        }}
      >
        {/* Table Body - Mapping over data for rows */}
        {data.map((row, index) => (
          <Grid
            container
            key={index} // Unique key for each row
            sx={{
              display: 'flex',
              height: 'auto', // Allow height to adjust based on content
              alignItems: 'center',
              gap: '0rem',
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              backgroundColor: index % 2 === 0 ? '#FFF' : '#FAFAFA', // Alternating row colors
              flexWrap: 'wrap', // Allow items to wrap on smaller screens for responsiveness
            }}
          >
            {/* Data Cells - apply common cell styles and add specific font weight */}
            <Grid item xs={12} sm={2.5} sx={{ ...cellStyles, fontWeight: { xs: 'bold', sm: 'normal' } }}>
              {/* Show label on small screens */}
              <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>State: </Box>{row.state}
            </Grid>
            <Grid item xs={12} sm={3} sx={cellStyles}>
              <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Effective Date: </Box>{row.date}
            </Grid>
            <Grid item xs={12} sm={3} sx={cellStyles}>
              <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Employer Code: </Box>{row.code}
            </Grid>
            <Grid item xs={12} sm={3.5} sx={cellStyles}>
              <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Bureau ID: </Box>{row.bureauId}
            </Grid>
          </Grid>
        ))}
      </Box>

      {/* Bottom section with the Edit button (circular and with text) */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end', // Align button to the right
          mt: 2, // Margin top for spacing from the table
          p: '1rem 0', // Vertical padding for the button container
          px: 2, // Horizontal padding for the button container
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1976D2', // A darker, distinct blue
            color: '#FFF', // White text color
            borderRadius: '50%', // Makes the button circular
            width: '3rem', // Fixed width for circular shape
            height: '3rem', // Fixed height for circular shape
            minWidth: 'unset', // Override Material-UI's min-width
            p: 0, // Remove padding
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.6rem', // Adjust font size for 'Edit' to fit in smaller button
            fontWeight: 'bold', // Bold text
            textTransform: 'uppercase', // Uppercase text
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Add subtle shadow for depth
            '&:hover': {
              backgroundColor: '#1565C0', // Slightly darker blue on hover
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)', // Enhanced shadow on hover
            }
          }}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
}
