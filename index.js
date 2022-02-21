import {
    zap
} from "./mocks.js";
import xlsx from 'node-xlsx';
import * as fs from "fs"
const alerts = zap.site[0].alerts
const valuable = alerts.map((alert) => {
    return {
        risk: alert.riskdesc.split(" ")[0],
        desc: alert.desc.slice(3, -4),
        name: alert.name
    }
})
const occurrences = valuable.map(alert => alert.risk).reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});
const alertsSummaryConfig = [
    ["Risk level", "Number of alerts"], ...Object.entries(occurrences)
]
var buffer = xlsx.build([{
    name: 'mySheetName',
    data: alertsSummaryConfig
}]);
const path = "zap.xlsx";
fs.createWriteStream(path).write(buffer);