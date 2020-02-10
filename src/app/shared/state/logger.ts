export class Logger {

    constructor() {
        console.log('init Logger class');
    }

    log(title: string, color: string, payload: any) {
        const greyStyle = 'color: #9E9E9E; font-weight: bold';
        const greenStyle = 'color: #4CAF50; font-weight: bold';
        const redishStyle = 'color: #FD8182; font-weight: bold';
        let prefix;

        switch (color) {
            case greenStyle:
                prefix = '[Logger - complete] ';
                break;

            case redishStyle:
                prefix = '[Logger - error] ';
                break;

            default:
                prefix = '[Logger] ';
                break;
        }

        if (payload) {
            title = title.substr(3);
            console.log(prefix + title, '\n' + JSON.stringify(payload, null, '\u00AD\u00AD\u00AD'));
        } else {
            console.log(prefix + title);
        }

    }
}
