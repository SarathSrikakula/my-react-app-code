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

export default function App1() {
  return (
    // Main container box with responsive styling and shadow
    <Box sx={{
      width: '100%',
      maxWidth: '900px', // Limit maximum width for better readability on large screens
      mx: 'auto', // Center horizontally
      p: 2, // Padding
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Subtle shadow for better visual separation
      borderRadius: '8px', // Rounded corners for the main container
      backgroundColor: '#FFFFFF' // White background for the card
    }}>
      {/* Page section title and button */}
      <Box
        sx={{
          display: 'flex',
          height: { xs: 'auto', sm: '3.5rem' }, // Adjust height for small screens, auto for content
          padding: '0.5rem 0.75rem',
          alignItems: 'center',
          gap: '0.25rem',
          borderRadius: '0.25rem',
          backgroundColor: '#F3F9FD',
          mb: 2, // Margin bottom
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger
          textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
          py: { xs: 1.5, sm: 0.5 } // Vertical padding for small screens
        }}
      >
        {/* Title Typography */}
        <Typography variant="h6" sx={{ mb: { xs: 1, sm: 0 } }}>States</Typography>
        {/* Add States in Batch Button */}
        <Button variant="outlined" size="small" sx={{
          borderColor: '#5BC0BE', // Border color
          color: '#5BC0BE', // Text color
          '&:hover': {
            backgroundColor: '#5BC0BE', // Hover background
            color: '#FFF' // Hover text color
          }
        }}>ADD STATES IN BATCH</Button>
      </Box>

      {/* Table Header */}
      <Grid
        container
        sx={{
          display: 'flex',
          padding: '0.5rem',
          alignItems: 'center',
          gap: '0.25rem',
          borderRadius: '0.25rem',
          backgroundColor: '#5BC0BE', // Header background color
          fontWeight: 600, // Bold font for header
          color: '#fff', // White text for header
          flexWrap: 'nowrap', // Prevent header items from wrapping
          minHeight: '3rem' // Ensure consistent header height
        }}
      >
        {/* Header Columns */}
        <Grid item size={{ xs: 2, sm: 2.5 }}>State</Grid>
        <Grid item size={{ xs: 3, sm: 3 }}>State Effective Date</Grid>
        <Grid item size={{ xs: 3, sm: 3 }}>State Employer Code</Grid>
        <Grid item size={{ xs: 4, sm: 3.5 }}>Bureau ID</Grid>
      </Grid>

      {/* Table Body - Mapping over data for rows */}
      {data.map((row, index) => (
        <Grid
          container
          key={index} // Unique key for each row
          sx={{
            display: 'flex',
            height: 'auto', // Allow height to adjust based on content
            padding: '0.75rem 0.5rem',
            alignItems: 'center',
            gap: '0rem',
            flex: 1,
            backgroundColor: index % 2 === 0 ? '#FFF' : '#F9F9F9', // Alternating row colors
            borderRight: '1px solid #CCC',
            borderLeft: '1px solid #CCC',
            borderBottom: '1px solid #CCC',
            flexWrap: 'wrap', // Allow items to wrap on smaller screens for responsiveness
            // Apply padding to direct children of Grid item to make text readable, especially on small screens
            '& > div': {
              py: { xs: 0.5, sm: 0 } // Vertical padding for each cell on small screens
            }
          }}
        >
          {/* Data Cells */}
          <Grid item size={{ xs: 12, sm: 2.5 }} sx={{ fontWeight: { xs: 'bold', sm: 'normal' } }}>
            {/* Show label on small screens */}
            <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>State: </Box>{row.state}
          </Grid>
          <Grid item size={{ xs: 12, sm: 3 }}>
            <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Effective Date: </Box>{row.date}
          </Grid>
          <Grid item size={{ xs: 12, sm: 3 }}>
            <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Employer Code: </Box>{row.code}
          </Grid>
          <Grid item size={{ xs: 12, sm: 3.5 }}>
            <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Bureau ID: </Box>{row.bureauId}
          </Grid>
        </Grid>
      ))}

      {/* Bottom section with the Edit button (circular and with text) */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end', // Align button to the right
          mt: 20, // Margin top for spacing from the table
          p: '1rem 0', // Padding for the button container
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1976D2', // A darker, distinct blue
            color: '#FFF', // White text color
            borderRadius: '50%', // Makes the button circular
            width: '40px', // Fixed width for circular shape
            height: '40px', // Fixed height for circular shape
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
