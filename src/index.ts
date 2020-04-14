import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('original.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Fulham');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
