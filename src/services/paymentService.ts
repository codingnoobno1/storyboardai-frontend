interface PaymentResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

export const paymentService = {
    async createOrder(packId: string) {
        return { orderId: "order_992", amount: 399 };
    },
    async verifyPayment(response: PaymentResponse) {
        return { status: "captured" };
    },
    async getInvoices() {
        return [];
    }
};
