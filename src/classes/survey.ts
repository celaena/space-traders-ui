import SurveyDeposit from './survey-deposit'

export default class Survey {
    signature?: string;
    symbol?: string;
    deposits: SurveyDeposit[] = [];
    expiration?: Date;
    size?: string;
}