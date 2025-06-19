const policyStatesAgent = {
  PolicyStatesInfo: async (policyCode: string): Promise<PolicyAssignedState[]> => {
    // const params = { policyCode };
    // return (await apiService.get(`/GetPolicyStatesInfo?policyCode=${encodeURIComponent(policyCode)}`)).data;

    return [
      {
        state: "CA",
        stateEffectiveDate: "2025-07-01",
        stateEmployerCode: 1100,
        bureauId: 917495866,
        stateName: "California"
      },
      {
        state: "TX",
        stateEffectiveDate: "2025-08-15",
        stateEmployerCode: 2200,
        bureauId: 123456789,
        stateName: "Texas"
      },
      {
        state: "NY",
        stateEffectiveDate: "2025-06-10",
        stateEmployerCode: 3300,
        bureauId: 112233445,
        stateName: "New York"
      },
      {
        state: "FL",
        stateEffectiveDate: "2025-05-05",
        stateEmployerCode: 4400,
        bureauId: 556677889,
        stateName: "Florida"
      },
      {
        state: "IL",
        stateEffectiveDate: "2025-09-01",
        stateEmployerCode: 5500,
        bureauId: 998877665,
        stateName: "Illinois"
      },
      {
        state: "WA",
        stateEffectiveDate: "2025-10-01",
        stateEmployerCode: 6600,
        bureauId: 123123123,
        stateName: "Washington"
      },
      {
        state: "GA",
        stateEffectiveDate: "2025-03-20",
        stateEmployerCode: 7700,
        bureauId: 321321321,
        stateName: "Georgia"
      },
      {
        state: "PA",
        stateEffectiveDate: "2025-11-15",
        stateEmployerCode: 8800,
        bureauId: 147258369,
        stateName: "Pennsylvania"
      },
      {
        state: "NC",
        stateEffectiveDate: "2025-12-01",
        stateEmployerCode: 9900,
        bureauId: 963852741,
        stateName: "North Carolina"
      },
      {
        state: "OH",
        stateEffectiveDate: "2025-04-30",
        stateEmployerCode: 1010,
        bureauId: 741852963,
        stateName: "Ohio"
      }
    ];
  },

  AvailableStatesInfo: async (policyCode: string): Promise<PolicyAvailableState[]> => {
    // const params = { policyCode };
    // return (await apiService.get(`/GetAvailableStatesInfo?policyCode=${encodeURIComponent(policyCode)}`)).data;

    return [
      { state: "CA", stateName: "California" },
      { state: "TX", stateName: "Texas" },
      { state: "NY", stateName: "New York" },
      { state: "FL", stateName: "Florida" },
      { state: "IL", stateName: "Illinois" },
      { state: "WA", stateName: "Washington" },
      { state: "GA", stateName: "Georgia" },
      { state: "PA", stateName: "Pennsylvania" },
      { state: "NC", stateName: "North Carolina" },
      { state: "OH", stateName: "Ohio" }
    ];
  }
};

export default policyStatesAgent;

// Types
export type PolicyAvailableState = {
  stateName: string;
  state: string;
};

export type PolicyAssignedState = {
  state: string;
  stateEffectiveDate: string;
  stateEmployerCode: number;
  bureauId: number;
  stateName: string;
};
