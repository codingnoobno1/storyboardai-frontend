export const paymentService = {
    async createOrder(packId: string) {
        return { orderId: "order_992", amount: 399 };
    },
    async verifyPayment(response: any) {
        return { status: "captured" };
    },
    async getInvoices() {
        return [];
    }
};
