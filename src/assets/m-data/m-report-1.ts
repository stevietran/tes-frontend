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