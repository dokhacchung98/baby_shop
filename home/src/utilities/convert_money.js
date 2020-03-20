export const convertMoneyDisplay = (price, discount) => {
    const t = convertMoney(price, discount);
    return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export const convertMoney = (price, discount) => {
    const t = parseInt(price * (100 - discount) / 100000) * 1000;
    return t;
}

