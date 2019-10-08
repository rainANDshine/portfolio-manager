const indexes = ['spy', 'qqq', 'dia', 'iwm'];
const publishableKey = 'Tpk_180ac35b572948beb91966b3def6fafb';

class ApiAdapter {
    static host() {
        return 'https://sandbox.iexapis.com/stable/stock/market';;
    }

    static getIndexQuotes() {
        return this.getBatchQuotes(indexes);
    }

    static getIndexNews() {
        return this.getBatchNews(indexes);
    }

    static getIndexQuotesNews() {
        return this.getBatchQuotesNews(indexes);
    }

    static getBatchQuotes(symbols = []) {
        return `${this.host()}/batch?symbols=${symbols.join(',')}&types=quote&token=${publishableKey}`;
    }

    static getBatchNews(symbols = [], newCount = 5) {
        return `${this.host()}/batch?symbols=${symbols.join(',')}&types=news&last=${newCount}&token=${publishableKey}`;
    }

    static getBatchQuotesNews(symbols = [], newCount = 5) {
        return `${this.host()}/batch?symbols=${symbols.join(',')}&types=quote,news&last=${newCount}&token=${publishableKey}`;
    }

    static mostActive() {
        return `${this.host()}/list/mostactive?token=${publishableKey}`;
    }

    static gainers() {
        return `${this.host()}/list/gainers?token=${publishableKey}`;
    }

    static losers() {
        return `${this.host()}/list/losers?token=${publishableKey}`;
    }

    static backendHost() {
        return 'https://portfolio-database.herokuapp.com/api/v1';
    }
}

export default ApiAdapter;
 