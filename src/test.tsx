// MinimalStatesTable.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// IMPORTANT: Adjust this path to your actual States component
import States from './App'; // Assuming App.jsx is now your States component, if not, adjust: './../../../src/pages/States/States';

// --- Mocking Setup ---
// Mock the action creator (adjust path to your actual action file's path)
const mockFetchPolicyAssignedStates = vi.fn((policyCode) => ({
  type: 'states/fetchpolicyAssignedStates', // A mock action type
  payload: policyCode,
}));

// Mock the module where fetchpolicyAssignedStates is defined
// Replace './your-action-file' with the actual path, e.g., './src/redux/actions/statesActions'
vi.mock('./your-action-file', () => ({
  fetchpolicyAssignedStates: mockFetchPolicyAssignedStates,
}));

// Initial state for the Redux store, structured to match the component's useSelector calls
const initialTestState = {
  general: {
    policyCode: 'DEWC529875',
  },
  states: {
    policyAssignedStates: [
      { state: 'AL', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******1100', bureauId: '917495866' },
      { state: 'CA', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******2190', bureauId: '102102101' },
      { state: 'FL', stateEffectiveDate: '07/01/2025', stateEmployerCode: '*******4567', bureauId: '202202200' },
      // Add more data if needed to fully test scrolling or more rows
    ],
  },
};

// A simple mock root reducer for testing purposes
const rootReducer = combineReducers({
  general: (state = initialTestState.general, action) => state,
  states: (state = initialTestState.states, action) => state,
  // Add other reducers if your RootState includes them and they are relevant for component rendering
});

describe('States Component - 100% Coverage', () => {
  let store;

  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test

    // Create a new store for each test to ensure isolation
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialTestState,
    });

    // Spy on console.log to confirm button interactions
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restore console.log after each test
  });

  // Test case 1: Covers initial render, data display, and dispatch on mount (non-editing mode)
  it('renders in non-editing mode, displays data, and dispatches fetch action on mount', async () => {
    // Render the component wrapped in the Redux Provider
    render(
      <Provider store={store}>
        <States />
      </Provider>
    );

    // --- Initial State (Non-Editing Mode) Checks ---
    // Assert main title is present
    expect(screen.getByText('States')).toBeInTheDocument();
    // Assert 'Edit' button is present
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    // Assert 'ADD STATES IN BATCH' button is NOT present initially
    expect(screen.queryByRole('button', { name: /add states in batch/i })).not.toBeInTheDocument();

    // Assert table headers for non-editing mode are visible
    expect(screen.getByText('State Effective Date')).toBeInTheDocument();
    expect(screen.getByText('State Employer Code')).toBeInTheDocument();

    // Assert that sample data from the store is rendered
    expect(screen.getByText('AL')).toBeInTheDocument();
    expect(screen.getByText('07/01/2025')).toBeInTheDocument();
    expect(screen.getByText('*******1100')).toBeInTheDocument();
    expect(screen.getByText('917495866')).toBeInTheDocument();

    // For smaller screens, check if 'State:' label is present
    expect(screen.getByText('State:')).toBeInTheDocument();

    // Assert action buttons are not visible initially
    expect(screen.queryAllByRole('button', { name: /add/i }).length).toBe(0);
    expect(screen.queryAllByRole('button', { name: /delete/i }).length).toBe(0);

    // --- useEffect Dispatch Check ---
    // Assert that fetchpolicyAssignedStates was called on mount with the correct policy code
    await waitFor(() => {
      expect(mockFetchPolicyAssignedStates).toHaveBeenCalledTimes(1);
      expect(mockFetchPolicyAssignedStates).toHaveBeenCalledWith(initialTestState.general.policyCode);
      // Also verify that the mock dispatch was called
      expect(console.log).toHaveBeenCalledWith('Dispatching action:', expect.any(Function)); // Dispatch is an async thunk, so it's a function
      expect(console.log).toHaveBeenCalledWith(`Fetching policy assigned states for policy code: ${initialTestState.general.policyCode}`);
    });
  });

  // Test case 2: Covers editing mode, all action buttons, and switching back
  it('switches to editing mode, handles button clicks, and switches back to non-editing mode', async () => {
    render(
      <Provider store={store}>
        <States />
      </Provider>
    );

    // --- Switch to Editing Mode ---
    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    // Assert 'Save' button is present (confirms successful switch to editing mode)
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
    // Assert 'Edit' button is no longer present
    expect(screen.queryByRole('button', { name: /edit/i })).not.toBeInTheDocument();

    // Assert 'ADD STATES IN BATCH' button is now present in editing mode
    const addBatchButton = screen.getByRole('button', { name: /add states in batch/i });
    expect(addBatchButton).toBeInTheDocument();

    // Assert action buttons (Add and Delete) are now visible for each row in editing mode
    const addButtons = screen.getAllByRole('button', { name: /add/i });
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    expect(addButtons.length).toBe(initialTestState.states.policyAssignedStates.length);
    expect(deleteButtons.length).toBe(initialTestState.states.policyAssignedStates.length);

    // --- Trigger all button click handlers in editing mode and verify console.log calls ---
    fireEvent.click(addBatchButton);
    expect(console.log).toHaveBeenCalledWith('ADD STATES IN BATCH button clicked');

    fireEvent.click(addButtons[0]); // Click the first 'Add' button
    expect(console.log).toHaveBeenCalledWith("Plus Button clicked for row:", initialTestState.states.policyAssignedStates[0].state);

    fireEvent.click(deleteButtons[0]); // Click the first 'Delete' button (or any specific one)
    expect(console.log).toHaveBeenCalledWith("Delete Button clicked for row:", initialTestState.states.policyAssignedStates[0].state);

    // --- Switch back to Non-Editing Mode ---
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    // Assert 'Edit' button is back
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    // Assert 'Save' button is no longer present
    expect(screen.queryByRole('button', { name: /save/i })).not.toBeInTheDocument();
    // Assert 'ADD STATES IN BATCH' button is no longer present
    expect(screen.queryByRole('button', { name: /add states in batch/i })).not.toBeInTheDocument();
  });
});
