package com.rana.service;

import com.rana.domain.PaymentMethod;
import com.rana.model.PaymentOrder;
import com.rana.model.User;
import com.rana.response.PaymentResponse;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

public interface PaymentService {
    PaymentOrder createOrder(User user , Long amount , PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean ProceedPaymentOrder (PaymentOrder paymentOrder , String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLink(User user , Long amount) throws RazorpayException;

    PaymentResponse createStripePaymentLink(User user , Long amount , Long orderId) throws StripeException;
}
