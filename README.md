# mobsf-zap-2excel-action

This action returns the excel report from [zap](https://github.com/zaproxy/action-baseline) and [mobsf](https://github.com/fundacaocerti/mobsf-action) actions json results.

## Inputs

## `zap`

**Required** Path to Zap Json report.
## `mobsf`

**Required** Path to Mobsf Json report.

## Outputs

## `report.xlsx`

The excel report
## Example usage
```
uses: actions/iib0011/mobsf-zap-2excel-action
with:
  zap: path/to/zap
  mobsf: path/to/mobsf
