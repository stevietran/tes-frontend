export const CASE_STATUS = ['SUBMITTED', 'FINISHED'];

export interface AccuracyLevel{
    id: string;
    name: string;
    cost: number;
  }

export interface ParamsApp1{
    flowrate: Array<ProfileItem>;
    pressure: number;
    uppper_temperature: number;
    lower_temperature: number;
    accuracy_level: AccuracyLevel;
}


export interface Params {
    case_id?: number;
    app?: string;
    accuracy_level?: string;
    pressure?: number;
    upper_temperature?: number;
    lower_temperature?: number;
}

export interface Params_Design2 {
    app: string;
    accuracy_level: string;
    country_selection: string;
    safety_factor: number;
}


// Flow Rate
export interface ProfileItem{
    parent_id?: any;
    time?: number;
    value?: number;
}


export interface ProfileItemArray{
    with_tes?: any;
    parent_id?: any;
    time: any;
    value: Array<number>;
}

export interface FlowrateItem extends ProfileItem {
    params_id: number;
}

// Submit
export interface CaseSubmit {
    params: Params;
    flowrate: Array<ProfileItem>;
}

// Load data
export interface LoadData{
    load_type: string;
    load_selection?: string;
    load_value?: number;
    load_profiles?: Array<ProfileItem>;
}

export interface CaseSubmit_2 {
    params: Params_Design2;
    type: string;
    load_data: LoadData;
}

export interface SubmitResponse {
    submitter_id: number;
    id: number;
    status: string;
    submit_time: string;
}

// Case status
export interface DashboardResponse{
    result: Array<DashboardItem>
}

export interface DashboardItem{
    id: number;
    submit_time: string;
    status: string;
}