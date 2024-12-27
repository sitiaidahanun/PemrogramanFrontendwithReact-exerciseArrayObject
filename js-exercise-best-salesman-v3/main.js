function rekapSalesByName(data, name) {
    return data
        .filter(record => record.salesName === name)
        .reduce((total, record) => total + record.totalSales, 0);
}

function salesReport(data, correction) {
    const salesNames = ['Adi', 'Budi', 'Poltak', 'Sri', 'Udin'];
    const totalSalesByName = {};
    let monthlySales = 0;


    for (const name of salesNames) {
        totalSalesByName[name] = 0;
    }

    for (const record of data) {
        const { salesName, totalSales } = record;
        if (salesNames.includes(salesName)) {
            totalSalesByName[salesName] += totalSales;
            monthlySales += totalSales;
        }
    }

    for (const correctionRecord of correction) {
        const { type, salesName, totalSales, salesDate } = correctionRecord;
        if (salesNames.includes(salesName)) {
            if (type === 'tambah') {
                totalSalesByName[salesName] += totalSales;
                monthlySales += totalSales;
            } else if (type === 'koreksi') {
                // Find the corresponding original sales record to adjust the monthly sales
                for (const record of data) {
                    if (record.salesName === salesName && record.salesDate === salesDate) {
                        monthlySales += (totalSales - record.totalSales); // Update the monthly sales
                        totalSalesByName[salesName] += (totalSales - record.totalSales); // Update the total sales for the name
                        record.totalSales = totalSales; // Update the original record
                        break;
                    }
                }
            }
        }
    }

    let bestSalesman = '';
    let maxSales = 0;

    for (const name of salesNames) {
        if (totalSalesByName[name] > maxSales) {
            maxSales = totalSalesByName[name];
            bestSalesman = name;
        }
    }

    return {
        monthlySales,
        totalSalesByName: {
            Adi: totalSalesByName['Adi'],
            Budi: totalSalesByName['Budi'],
            Poltak: totalSalesByName['Poltak'],
            Sri: totalSalesByName['Sri'],
            Udin: totalSalesByName['Udin']
        },
        bestSalesman: `Penjualan terbanyak dilakukan oleh ${bestSalesman} dengan total penjualan dalam 1 bulan sebesar ${maxSales}`
    };
}

module.exports = {
    salesReport,
    rekapSalesByName,
};

const data = [
    { salesName: 'Udin', totalSales: 100, salesDate: 1 },
    { salesName: 'Poltak', totalSales: 100, salesDate: 1 },
    { salesName: 'Poltak', totalSales: 50, salesDate: 2 },
];

const correction = [
    { type: 'tambah', salesName: 'Udin', totalSales: 100, salesDate: 2 },
];

console.log(salesReport(data, correction));
console.log(rekapSalesByName(data, 'Poltak')); 