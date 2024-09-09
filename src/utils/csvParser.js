export const parseCSV = (csvText) => {
    const lines = csvText.trim().split(/\r?\n/);
    const headers = lines[0].split(',');

    const data = lines.slice(1).map((line) => {
        const values = line.split(',');
        const obj = {};

        headers.forEach((header, index) => {
            let value = values[index].trim();

            if (header.toLowerCase() === 'date') {
                value = new Date(value);
            }

            obj[header] = value;
        });

        return obj;
    });

    return data;
};
