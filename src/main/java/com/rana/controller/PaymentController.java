package com.rana.controller;

import com.rana.domain.PaymentMethod;
import com.rana.model.PaymentOrder;
import com.rana.model.User;
import com.rana.response.PaymentResponse;
import com.rana.service.PaymentService;
import com.rana.service.UserService;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;
    @PostMapping("/{paymentMethod}/amount/{amount}")
    public ResponseEntity<PaymentResponse> paymentHandler(
            @PathVariable PaymentMethod paymentMethod,
            @PathVariable Long amount,
            @RequestHeader("Authorization") String jwt
    ) throws Exception, RazorpayException, StripeException {

        User user = userService.findUserProfileByJwt(jwt);

        PaymentResponse paymentResponse;
        PaymentOrder order = paymentService.createOrder(user, amount, paymentMethod);

        if (paymentMethod.equals(PaymentMethod.RAZORPAY)) {
            paymentResponse = paymentService.createRazorpayPaymentLink(user, amount);
        } else {
            paymentResponse = paymentService.createStripePaymentLink(user, amount, order);
        }

        return new ResponseEntity<>(paymentResponse, HttpStatus.CREATED);
    }
}