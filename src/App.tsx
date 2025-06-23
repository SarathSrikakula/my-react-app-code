import React, { useState } from 'react';
import { Box, Grid, Typography, Button,ListItemIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Import AddIcon
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; // Import DeleteOutlineIcon
import ListAltIcon from '@mui/icons-material/ListAlt'; // Import ListAltIcon from Material-UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

// Define an interface for the data structure to ensure type safety
interface StateData {
  state: string;
  stateEffectiveDate: string;
  stateEmployerCode: string;
  bureauId: string;
}

const data: StateData[] = [
  { state: 'AL', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******1100', bureauId: '917495866' },
  { state: 'CA', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******2190', bureauId: '102102101' },
  { state: 'FL', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******4567', bureauId: '202202200' },
  { state: 'MA', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******1689', bureauId: '301300302' },
  { state: 'PA', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******4578', bureauId: '403400403' },
  { state: 'RI', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******3498', bureauId: '500502501' },
];

export default function App() {
  // State to manage the editing mode.
  // When isEditing is false: "Edit" button is visible, "Save" button is hidden, "ADD STATES IN BATCH" is hidden.
  // When isEditing is true: "Edit" button is hidden, "Save" button is visible, "ADD STATES IN BATCH" is visible, and the second grid appears.
  const [isEditing, setIsEditing] = useState(false);

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
    height: '2.5rem',
    padding: '0.5rem 0.75rem',
    alignItems: 'center',
    gap: '0.25rem',
    alignSelf: 'stretch',
    borderRadius: '0.25rem',
    background: '#F3F9FD',
    backgroundColor: '#F3F9FD',
    borderColor: '#005695',
    color: '#005695',
    '&:hover': {
      backgroundColor: '#005695',
      color: '#F3F9FD',
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

  // Define a consistent icon size
  const iconSize = '1.25rem'; // Example size, adjust as needed


  return (

    // Main container box with responsive styling, shadow, and overall table border
    <Box sx={{
        mx: '0.5rem', // Center horizontally
    }}>
      {/* Page section title and button */}
      <Box
        sx={{
          ...pageSectionTitle, // Apply the new pageSectionTitle styles
          justifyContent: 'space-between',
          py: { xs: 1.5, sm: 0.5 } // Vertical padding for small screens
        }}
      >
        {/* Title Typography */}
        <Typography variant="h6" sx={{ mb: { xs: 1, sm: 0 } }}>
          <ListItemIcon sx={{ minWidth: '1rem', marginRight: '0.5rem' }}>
            {<FontAwesomeIcon icon={faListUl}/>}
          </ListItemIcon>
          States
        </Typography>

        {/* Add States in Batch Button - Conditionally rendered based on isEditing state */}
        {isEditing && (
          <Button variant="outlined" size="small" sx={addStatesBatchButton}>
            ADD STATES IN BATCH
          </Button>
        )}
      </Box>

      {/* First Grid - Visible only when NOT in editing mode */}
      {!isEditing && (
        <>
          {/* Table Header */}
          <Grid
            container
            sx={{
              display: 'flex',
              alignItems: 'center',
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
                  <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Effective Date: </Box>{row.stateEffectiveDate}
                </Grid>
                <Grid item xs={12} sm={3} sx={cellStyles}>
                  <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Employer Code: </Box>{row.stateEmployerCode}
                </Grid>
                <Grid item xs={12} sm={3.5} sx={cellStyles}>
                  <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Bureau ID: </Box>{row.bureauId}
                </Grid>
              </Grid>
            ))}
          </Box>
        </>
      )}


      {/* Second Grid - Visible only when in editing mode */}
      {isEditing && (
        <Box > {/* Removed margin top as the first grid is now hidden */}
          {/* Table Header for Second Grid */}
          <Grid
            container
            sx={{
              display: 'flex',
              alignItems: 'center',
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
            {/* Header Columns - adjusted widths for 5 columns */}
            {/* Adjusted widths: State=2, Effective Date=2.5, Employer Code=2.5, Bureau ID=3, Actions=2 */}
            <Grid item xs={2.5} sm={2.5} sx={{ ...cellStyles, padding: '0.5rem' }}>State</Grid>
            <Grid item xs={2.5} sm={2.5} sx={{ ...cellStyles, padding: '0.5rem' }}>State Effective Date</Grid>
            <Grid item xs={2.5} sm={2.5} sx={{ ...cellStyles, padding: '0.5rem' }}>State Employer Code</Grid>
            <Grid item xs={2.5} sm={2.5} sx={{ ...cellStyles, padding: '0.5rem' }}>Bureau ID</Grid>
            <Grid item xs={2} sm={2} sx={{ ...cellStyles, padding: '0.5rem' }}>Actions</Grid> {/* New Actions header */}
          </Grid>

          {/* Table Body for Second Grid - Container for scrollable content */}
          <Box
            sx={{
              maxHeight: '700px', // Set a maximum height for the scrollable area
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
                {/* Data Cells - adjusted widths for 5 columns */}
                {/* Adjusted widths: State=2, Effective Date=2.5, Employer Code=2.5, Bureau ID=3, Actions=2 */}
                <Grid item xs={2.5} sm={2.5} sx={{ ...cellStyles, fontWeight: { xs: 'bold', sm: 'normal' } }}>
                  {/* Show label on small screens */}
                  <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>State: </Box>{row.state}
                </Grid>
                <Grid item xs={2.5} sm={2.5} sx={cellStyles}>
                  <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Effective Date: </Box>{row.stateEffectiveDate}
                </Grid>
                <Grid item xs={2.5} sm={2.5} sx={cellStyles}>
                  <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Employer Code: </Box>{row.stateEmployerCode}
                </Grid>
                <Grid item xs={2.5} sm={2.5} sx={cellStyles}>
                  <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Bureau ID: </Box>{row.bureauId}
                </Grid>
                <Grid item xs={2} sm={2} sx={cellStyles}> {/* New Actions cell */}
                  <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    {/* Add Button */}
                    <Button
                      sx={{
                        display: 'flex',
                        width: '2.5rem', // Set a fixed width to make it square
                        height: '2.5rem', // Set a fixed height to match the width
                        minWidth: 'unset', // Override MUI's default min-width for buttons
                        justifyContent: 'center', // Center content horizontally
                        alignItems: 'center',  // Center content vertically
                        gap: '0.25rem',
                        borderRadius: '0.25rem',
                        border: '1px solid #005695',
                        backgroundColor: '#FFFFFF',
                        color: '#005695',
                        '&:hover': {
                          backgroundColor: '#005695',
                          color: '#FFFFFF',
                          borderColor: '#005695', // Ensures border color matches background on hover
                        },
                      }}
                      variant="outlined" // 'outlined' variant because it has a border
                      onClick={() => console.log("Plus Button clicked for row:", row.state)}
                    >
                      <AddIcon sx={{ fontSize: iconSize }} />
                    </Button>

                    {/* Delete Button with inline styles */}
                    <Button
                      sx={{
                        display: 'flex',
                        width: '2.5rem', // Set a fixed width to make it square, matching the plus button
                        height: '2.5rem', // Set a fixed height to match the width
                        minWidth: 'unset', // Override MUI's default min-width for buttons
                        justifyContent: 'center', // Center content horizontally
                        alignItems: 'center',  // Center content vertically
                        gap: '0.25rem',
                        borderRadius: '0.25rem',
                        background: '#F5F5F5', // Use 'background' for gradient/image, 'backgroundColor' for solid color
                        backgroundColor: '#F5F5F5', // Explicitly set background color
                        color: '#000000', // Default icon/text color for the delete button (e.g., black)
                        '&:hover': {
                          backgroundColor: '#C0CFD8',
                          color: '#000000', // Ensure color stays consistent on hover, or change if desired
                        },
                        border: 'none', // Delete button in your spec doesn't have a border, explicitly set to none
                      }}
                      variant="text"
                      onClick={() => console.log("Delete Button clicked for row:", row.state)}
                    >
                      <DeleteOutlineIcon sx={{ fontSize: iconSize }} />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      )}


      {/* Bottom section with the Edit/Save button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end', // Align button to the right
          mt: 2, // Margin top for spacing from the table
          p: '1rem 0', // Vertical padding for the button container
          px: 2, // Horizontal padding for the button container
        }}
      >
        {!isEditing && ( // Only show "Edit" button if not in editing mode
          <Button
            variant="contained"
            onClick={() => setIsEditing(true)} // Set isEditing to true on "Edit" click
            sx={{
              backgroundColor: '#1976D2',
              color: '#FFF',
              borderRadius: '50%',
              width: '3rem',
              height: '3rem',
              minWidth: 'unset',
              p: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#1565C0',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }
            }}
          >
            Edit
          </Button>
        )}

        {isEditing && ( // Only show "Save" button if in editing mode
          <Button
            variant="contained"
            onClick={() => setIsEditing(false)} // Set isEditing to false on "Save" click
            sx={{
              backgroundColor: '#1976D2',
              color: '#FFF',
              borderRadius: '50%',
              width: '3rem',
              height: '3rem',
              minWidth: 'unset',
              p: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#1565C0',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }
            }}
          >
            Save
          </Button>
        )}
      </Box>
    </Box>
  );
}
