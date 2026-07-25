package com.rana.service;

import com.rana.model.PaymentDetails;
import com.rana.model.User;

public interface PaymentDetailsService {

    public PaymentDetails addPaymentDetails(String accountNumber ,
                                            String accountHolderName ,
                                            String ifsc ,
                                            String bankName ,
                                            User user);


    public PaymentDetails getUserPaymentDetails(User user);

}
