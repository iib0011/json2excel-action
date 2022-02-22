const core = require('@actions/core');
const github = require('@actions/github');
const xlsx = require('node-xlsx');
const fs=require("fs");
const { getZapSheetConfig } = require('./zap');
const { getMobsfSheetConfig } = require('./mobsf');


try {
   const zapRawData = fs.readFileSync(core.getInput("zap"));
    const mobsfRawData = fs.readFileSync(core.getInput("mobsf"));

    const zap = JSON.parse(zapRawData);
    const mobsf = JSON.parse(mobsfRawData);

     var buffer = xlsx.build([
         {
        name: 'OWASP Zap',
        data: getZapSheetConfig(zap)
    },
    {
        name: 'Mobsf',
        data: getMobsfSheetConfig(mobsf)
    }]);
    const path = "report.xlsx";
    fs.createWriteStream(path).write(buffer);
} catch (error) {
    core.setFailed(error.message);
}
