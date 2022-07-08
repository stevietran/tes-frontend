import { ReportApp1 } from "src/app/models/report";
import { ReportApp2 } from "src/app/models/report";

export const M_REPORT_1_DES:any =
{
    id: "Case ID",
    type: "TES Type",
    htf: "HTF Material",
    material: "TES Material",
    cost: "Combined Cost",
    run_time: "Running Time"
}

export const M_REPORT_1: ReportApp1[] = [
    {
        id: "1",
        type: "Sensible Packed Bed",
        htf: "Air",
        material: "Granite",
        cost: 100,
        run_time: 10452
    },
    {
        id: "2",
        type: "PCM Packed Bed",
        htf: "Nitrogen",
        material: "Paraffin",
        cost: 100,
        run_time: 10452
    },
    {
        id: "3",
        type: "Sensible Packed Bed",
        htf: "CO2",
        material: "Granite",
        cost: 100,
        run_time: 10452
    }
]
export const M_REPORT_2: ReportApp2 = {
    "tes_type": "SPB",
    "tes_attr": {
        "value": 10,
        "len": 200,
        "number": 20
    },
    "tes_op_attr": {
        "value": 10,
        "pressure": 100,
        "flow": 4
    },
    "chiller": "string",
    "chiller_no_tes": "string",
    "capex": 0,
    "capex_no_tes": 0,
    "lcos": 0,
    "lcos_no_tes": 0,
    "htf": "CO2",
    "htf_attr": {
        "value": 10,
        "c_p": 1005

    },
    "material": "RM-10",
    "material_attr": {
        "value": 10,
        "phase": "Liquid"
    },
    "cost": 0,
    "run_time": 0,
    "id": 1,
    "case_id": 1,
    "load_split_profile": [
        {
            "time": 0,
            "value": 0,
            "parent_id": null
        },
        {
            "time": 12,
            "value": 10,
            "parent_id": null
        }
    ],
    "electric_split_profile": [
        {
            "time": 0,
            "value": 0,
            "parent_id": null
        },
        {
            "time": 12,
            "value": 10,
            "parent_id": null
        }
    ],
    "cost_profile": [
        {
            "parent_id": null,
            "time": 0,
            "value": 0
        },
        {
            "time": 12,
            "value": 10,
            "parent_id": null
        }
    ]
}