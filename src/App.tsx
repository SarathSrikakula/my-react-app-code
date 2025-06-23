import React, { useState } from 'react';
import { Box, Grid, Typography, Button,ListItemIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';


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
  const [isEditing, setIsEditing] = useState(false);

  // Define a consistent icon size
  const iconSize = '1.25rem';


  return (
    <>
      {/* Styles moved to a style tag, simulating a separate SCSS/CSS file */}
      <style>
        {`
        .main-container {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        .page-section-title {
          display: flex;
          /* Removed fixed height to allow content to dictate height */
          padding: 0.5rem 0.75rem;
          align-items: center;
          gap: 0.25rem;
          align-self: stretch;
          border-radius: 0.25rem;
          background: #F3F9FD;
          margin: 0 0 0.5rem 0;
          justify-content: space-between;
        }

        @media (max-width: 600px) {
          .page-section-title {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            flex-direction: column; /* Stack items vertically on small screens */
            align-items: flex-start; /* Align stacked items to the start */
          }
          .title-typography {
            margin-bottom: 1rem;
          }
          .state-data-cell {
            font-weight: bold;
          }
          .label-on-small {
            display: inline;
          }
        }

        @media (min-width: 600px) {
          .page-section-title {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            flex-direction: row; /* Keep items in a row on larger screens */
            align-items: center; /* Center items vertically in a row */
          }
          .title-typography {
            margin-bottom: 0;
          }
          .state-data-cell {
            font-weight: normal;
          }
          .label-on-small {
            display: none;
          }
        }

        .add-states-batch-button {
          display: flex;
          /* Removed fixed height */
          padding: 0.5rem 0.75rem;
          align-items: center;
          gap: 0.25rem;
          /* align-self: stretch; Removed stretch as button should not stretch vertically */
          border-radius: 0.25rem;
          background: #F3F9FD;
          background-color: #F3F9FD;
          border: 1px solid #005695;
          color: #005695;
        }
        .add-states-batch-button:hover {
          background-color: #005695;
          color: #F3F9FD;
        }

        .list-item-icon {
            min-width: 1rem;
            margin-right: 0.5rem;
        }

        .table-header {
          display: flex;
          align-items: center;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 0;
          background-color: #5BC0BE;
          font-weight: 600;
          color: #000;
          flex-wrap: nowrap;
          min-height: 1.5rem;
        }

        .cell-style {
          display: flex;
          align-items: center;
          gap: 0;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 0;
          align-self: stretch;
          padding: 0.75rem 0.5rem;
          border-right: 1px solid #CCC;
          border-bottom: 1px solid #CCC;
          border-left: 1px solid #CCC;
        }

        .header-cell-padding {
            padding: 0.5rem;
        }

        .table-body-scrollable {
          max-height: 400px; /* For non-editing mode */
          overflow-y: auto;
        }

        .table-body-scrollable-editing {
          max-height: 700px; /* For editing mode */
          overflow-y: auto;
        }

        .table-row {
          display: flex;
          height: auto;
          align-items: center;
          gap: 0;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 0;
          flex-wrap: wrap;
        }

        .striped-row-even {
          background-color: #FFF;
        }

        .striped-row-odd {
          background-color: #FAFAFA;
        }

        .action-button-group {
            display: flex;
            gap: 0.5rem;
        }

        .action-button-add {
          display: flex;
          width: 2.5rem;
          height: 2.5rem;
          min-width: unset;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          border-radius: 0.25rem;
          border: 1px solid #005695;
          background-color: #FFFFFF;
          color: #005695;
        }
        .action-button-add:hover {
          background-color: #005695;
          color: #FFFFFF;
          border-color: #005695;
        }

        .action-button-delete {
          display: flex;
          width: 2.5rem;
          height: 2.5rem;
          min-width: unset;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          border-radius: 0.25rem;
          background: #F5F5F5;
          background-color: #F5F5F5;
          color: #000000;
          border: none;
        }
        .action-button-delete:hover {
          background-color: #C0CFD8;
          color: #000000;
        }

        .edit-save-button-container {
          display: flex;
          justify-content: flex-end;
          margin-top: 2rem;
          padding: 1rem 0;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        .circular-button {
          background-color: #1976D2;
          color: #FFF;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          min-width: unset;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: bold;
          text-transform: uppercase;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .circular-button:hover {
          background-color: #1565C0;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        `}
      </style>

      <Box className="main-container">
        <Box className="page-section-title">
          <Typography variant="h6" className="title-typography">
            <ListItemIcon className="list-item-icon">
              {<ListAltIcon/>}
            </ListItemIcon>
            States
          </Typography>

          {isEditing && (
            <Button variant="outlined" size="small" className="add-states-batch-button">
              ADD STATES IN BATCH
            </Button>
          )}
        </Box>

        {!isEditing && (
          <>
            <Grid container className="table-header">
              <Grid item xs={2} sm={2.5} className="cell-style header-cell-padding">State</Grid>
              <Grid item xs={3} sm={3} className="cell-style header-cell-padding">State Effective Date</Grid>
              <Grid item xs={3} sm={3} className="cell-style header-cell-padding">State Employer Code</Grid>
              <Grid item xs={4} sm={3.5} className="cell-style header-cell-padding">Bureau ID</Grid>
            </Grid>

            <Box className="table-body-scrollable">
              {data.map((row, index) => (
                <Grid
                  container
                  key={index}
                  className={`table-row ${index % 2 === 0 ? 'striped-row-even' : 'striped-row-odd'}`}
                >
                  <Grid item xs={12} sm={2.5} className="cell-style state-data-cell">
                    <Box className="label-on-small">State: </Box>{row.state}
                  </Grid>
                  <Grid item xs={12} sm={3} className="cell-style">
                    <Box className="label-on-small">Effective Date: </Box>{row.stateEffectiveDate}
                  </Grid>
                  <Grid item xs={12} sm={3} className="cell-style">
                    <Box className="label-on-small">Employer Code: </Box>{row.stateEmployerCode}
                  </Grid>
                  <Grid item xs={12} sm={3.5} className="cell-style">
                    <Box className="label-on-small">Bureau ID: </Box>{row.bureauId}
                  </Grid>
                </Grid>
              ))}
            </Box>
          </>
        )}

        {isEditing && (
          <Box >
            <Grid container className="table-header">
              <Grid item xs={2.5} sm={2.5} className="cell-style header-cell-padding">State</Grid>
              <Grid item xs={2.5} sm={2.5} className="cell-style header-cell-padding">State Effective Date</Grid>
              <Grid item xs={2.5} sm={2.5} className="cell-style header-cell-padding">State Employer Code</Grid>
              <Grid item xs={2.5} sm={2.5} className="cell-style header-cell-padding">Bureau ID</Grid>
              <Grid item xs={2} sm={2} className="cell-style header-cell-padding">Actions</Grid>
            </Grid>

            <Box className="table-body-scrollable-editing">
              {data.map((row, index) => (
                <Grid
                  container
                  key={index}
                  className={`table-row ${index % 2 === 0 ? 'striped-row-even' : 'striped-row-odd'}`}
                >
                  <Grid item xs={2.5} sm={2.5} className="cell-style state-data-cell">
                    <Box className="label-on-small">State: </Box>{row.state}
                  </Grid>
                  <Grid item xs={2.5} sm={2.5} className="cell-style">
                    <Box className="label-on-small">Effective Date: </Box>{row.stateEffectiveDate}
                  </Grid>
                  <Grid item xs={2.5} sm={2.5} className="cell-style">
                    <Box className="label-on-small">Employer Code: </Box>{row.stateEmployerCode}
                  </Grid>
                  <Grid item xs={2.5} sm={2.5} className="cell-style">
                    <Box className="label-on-small">Bureau ID: </Box>{row.bureauId}
                  </Grid>
                  <Grid item xs={2} sm={2} className="cell-style">
                    <Box className="action-button-group">
                      <Button
                        className="action-button-add"
                        variant="outlined"
                        onClick={() => console.log("Plus Button clicked for row:", row.state)}
                      >
                        <AddIcon sx={{ fontSize: iconSize }} />
                      </Button>

                      <Button
                        className="action-button-delete"
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

        <Box className="edit-save-button-container">
          {!isEditing && (
            <Button
              variant="contained"
              onClick={() => setIsEditing(true)}
              className="circular-button"
            >
              Edit
            </Button>
          )}

          {isEditing && (
            <Button
              variant="contained"
              onClick={() => setIsEditing(false)}
              className="circular-button"
            >
              Save
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
