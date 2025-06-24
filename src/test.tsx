import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, vi, beforeEach, expect, test } from 'vitest';
import States from './../../../src/pages/States/States';
import '@testing-library/jest-dom/vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Dummy reducer, just returns the initial state
const reducer = (state = {}) => state;

// Example initial state with data
const initialState = {
  general: {
    policyCode: 'DEWC529875',
  },
  policy: {
    data: [
      {
        state: 'AL',
        stateEffectiveDate: '07/01/2025',
        stateEmployerCode: '*******1100',
        bureauId: '917495866',
      },
      {
        state: 'CA',
        stateEffectiveDate: '07/01/2025',
        stateEmployerCode: '*******2190',
        bureauId: '102102101',
      },
      {
        state: 'FL',
        stateEffectiveDate: '07/01/2025',
        stateEmployerCode: '*******4567',
        bureauId: '202202200',
      },
      {
        state: 'MA',
        stateEffectiveDate: '07/01/2025',
        stateEmployerCode: '*******1689',
        bureauId: '301300302',
      },
      {
        state: 'PA',
        stateEffectiveDate: '07/01/2025',
        stateEmployerCode: '*******4578',
        bureauId: '403400403',
      },
      {
        state: 'RI',
        stateEffectiveDate: '07/01/2025',
        stateEmployerCode: '********3498',
        bureauId: '403400403',
      },
    ],
  },
};

// Create a mock store with initial state
const store = configureStore({ reducer, preloadedState: initialState });

test('renders data from redux store', () => {
  render(
    <Provider store={store}>
      <States />
    </Provider>
  );

  // Check if the policies are rendered
  const stateLabel = screen.getByText(/State/i);
  expect(stateLabel).toBeInTheDocument();

  const policyDate = screen.getByText(/07\/01\/2025/);
  expect(policyDate).toBeInTheDocument();

  const policyCodeLabel = screen.getByText(/Policy Code:/i);
  expect(policyCodeLabel).toBeInTheDocument();

  const policyCodeValue = screen.getByText(/DEWC529875/);
  expect(policyCodeValue).toBeInTheDocument();

  const insuredNameLabel = screen.getByText(/Insured Name/i);
  expect(insuredNameLabel).toBeInTheDocument();
});
