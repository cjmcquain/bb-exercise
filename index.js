const fs = require('fs');

const combineFiles = async (file1, file2) => {
    try {
        const file1data = (await fs.promises.readFile(file1, 'utf-8')).split(" ");
        const file2data = (await fs.promises.readFile(file2, 'utf-8')).split(" ");
        const combinedData = [];

        for (let i = 0; i < file1data.length || i < file2data.length; i++) {
            if (i < file1data.length) {
                combinedData.push(file1data[i]);
            }
            if (i < file2data.length) {
                combinedData.push(file2data[i]);
            }
        };
        return combinedData.join(" ");
    } catch (e) {
        console.log('Error: ' + e.message);
    }
    
};

combineFiles('file_a.txt', 'file_b.txt').then((res) => {
    console.log(res);
});
