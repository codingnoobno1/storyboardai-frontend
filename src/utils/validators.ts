export const validators = {
    email: (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    password: (pass: string) => {
        return pass.length >= 8;
    },
    required: (val: any) => {
        if (val === null || val === undefined) return false;
        if (typeof val === "string") return val.trim().length > 0;
        return true;
    },
    slug: (val: string) => {
        return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(val);
    }
};
