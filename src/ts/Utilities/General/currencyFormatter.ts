const currencyFormatter = (number: number) => {
    const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });
    const formattedNumber = formatter.format(number);
    return formattedNumber;
}

export default currencyFormatter;
