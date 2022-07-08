import { ProfileItem } from "./case";

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
    cost: number,
    run_time: number,
    id?: number,
    case_id?: 1,
    load_split_profile: ProfileItem[],
    electric_split_profile: ProfileItem[],
    cost_profile: ProfileItem[];
}