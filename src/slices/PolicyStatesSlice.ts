import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// 1. Models

export interface PolicyAssignedState {
  id: number;
  stateCode: string;
  effectiveDate: string;
}

export interface PolicyAvailableStates {
  states: string[]; // or more detailed structure if needed
}

// 2. Slice State

interface PolicyStateSlice {
  policyAssignedStates: PolicyAssignedState[];
  policyAvailableStates: PolicyAvailableStates | null;
  availableStatesLoaded: boolean;
  error: string | null;
}

// 3. Initial State

const initialState: PolicyStateSlice = {
  policyAssignedStates: [],
  policyAvailableStates: null,
  availableStatesLoaded: false,
  error: null
};

// 4. Thunks

// Fetch assigned states (display mode)
export const fetchPolicyAssignedStates = createAsyncThunk<
  PolicyAssignedState[],
  void,
  { rejectValue: string }
>("policy/fetchPolicyAssignedStates", async (_, thunkAPI) => {
  try {
    const res = await fetch("/api/policy/assigned-states");
    const data = await res.json();
    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue("Failed to fetch assigned states");
  }
});

// Fetch available states (edit mode)
export const fetchPolicyAvailableStates = createAsyncThunk<
  PolicyAvailableStates,
  void,
  { rejectValue: string }
>("policy/fetchPolicyAvailableStates", async (_, thunkAPI) => {
  try {
    const res = await fetch("/api/policy/available-states");
    const data = await res.json();
    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue("Failed to fetch available states");
  }
});


// 5. Slice

const policySlice = createSlice({
  name: "policyState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Assigned States
      .addCase(fetchPolicyAssignedStates.fulfilled, (state, action: PayloadAction<PolicyAssignedState[]>) => {
        state.policyAssignedStates = action.payload;
      })
      .addCase(fetchPolicyAssignedStates.rejected, (state, action) => {
        state.error = action.payload || "Error fetching assigned states";
      })

      // Available States (dropdown)
      .addCase(fetchPolicyAvailableStates.fulfilled, (state, action: PayloadAction<PolicyAvailableStates>) => {
        state.policyAvailableStates = action.payload;
        state.availableStatesLoaded = true;
      })
      .addCase(fetchPolicyAvailableStates.rejected, (state, action) => {
        state.error = action.payload || "Error fetching available states";
      });
  }
});

export default policySlice.reducer;
