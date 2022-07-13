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

export const M_REPORT_2: ReportApp2 = {
    "tes_type": "SPB",
    "tes_attr": {
        "mass": 10,
        "length": 200,
        "height": 20
    },
    "tes_op_attr": {
        "power": 10,
        "pressure": 100,
        "flowrate": 4
    },
    "chiller": "3",
    "chiller_no_tes": "4",
    "capex": 1000,
    "capex_no_tes": 1200,
    "lcos": 10,
    "lcos_no_tes": 22,
    "htf": "CO2",
    "htf_attr": {
        "density": 10,
        "c_p": 1005
    },
    "material": "RM-10",
    "material_attr": {
        "density": 10,
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
            "time": 8,
            "value": 10,
            "parent_id": null
        },
        {
            "time": 16,
            "value": 10,
            "parent_id": null
        },
        {
            "time": 24,
            "value": 0,
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
            "time": 8,
            "value": 10,
            "parent_id": null
        },
        {
            "time": 16,
            "value": 10,
            "parent_id": null
        },
        {
            "time": 24,
            "value": 0,
            "parent_id": null
        }
    ],
    "cost_profile": [
        {
            "time": 0,
            "value": 0,
            "parent_id": null
        },
        {
            "time": 8,
            "value": 10,
            "parent_id": null
        },
        {
            "time": 16,
            "value": 10,
            "parent_id": null
        },
        {
            "time": 24,
            "value": 0,
            "parent_id": null
        }
    ]
}