import { ProfileItemArray } from "./case";
export interface ViewItem{
    key: string;
    value: any;
}

export interface ReportApp1{
    id: any,
    type: string;
    htf: string;
    material: string;
    cost: number;
    run_time: number;
}

export interface ReportApp2{
    tes_type: string,
    tes_attr: any,
    tes_op_attr: any,
    chiller: string,
    chiller_no_tes: string,
    capex: number,
    capex_no_tes: number,
    lcos: number,
    lcos_no_tes: number,
    htf: string,
    htf_attr: any,
    material: string,
    material_attr: any,
    cost?: number,
    run_time: number,
    id?: number,
    case_id?: 1,
    load_split_profile: ProfileItemArray[],
    electric_split_profile: ProfileItemArray[],
    cost_split_profile: ProfileItemArray[],
    load_split_profile_no_tes: ProfileItemArray[],
    electric_split_profile_no_tes: ProfileItemArray[],
    cost_split_profile_no_tes: ProfileItemArray[]
}