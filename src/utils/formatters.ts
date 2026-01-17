export const formatters = {
    currency: (amount: number, currency: string = "INR") => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
        }).format(amount);
    },
    number: (num: number) => {
        return new Intl.NumberFormat("en-IN").format(num);
    },
    percentage: (val: number) => {
        return `${val.toFixed(1)}%`;
    },
    date: (date: string | Date) => {
        return new Intl.DateTimeFormat("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }).format(new Date(date));
    },
    compactNumber: (num: number) => {
        return new Intl.NumberFormat("en-IN", { notation: "compact" }).format(num);
    }
};
