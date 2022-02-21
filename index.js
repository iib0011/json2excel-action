import {
    zap
} from "./mocks.js";
const core = require('@actions/core');
const github = require('@actions/github');
import xlsx from 'node-xlsx';
import * as fs from "fs"
try {
    const zapRawData = fs.readFileSync(core.getInput("zap"));
    const zap = JSON.parse(zapRawData);
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
        ["Summary of alerts", ""],
        ["Risk level", "Number of alerts"], ...Object.entries(occurrences)
    ]
    const valuableTable = valuable.map((valuable) => {
        return [
            [valuable.risk, valuable.name],
            ["Description", valuable.desc]
        ]
    })
    const alertDetailsConfig = [
        ["Alert details", ""], ...valuableTable.reduce((previous, current) => {
            return [...previous, ...current]
        })
    ]
    const zapSheetConfig = [...alertsSummaryConfig, ["", ""], ...alertDetailsConfig];
    console.log(zapSheetConfig)
    var buffer = xlsx.build([{
        name: 'OWASP Zap',
        data: zapSheetConfig
    }]);
    const path = "zap.xlsx";
    fs.createWriteStream(path).write(buffer);
} catch (error) {
    core.setFailed(error.message);
}