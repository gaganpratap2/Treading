package com.rana.service;

import com.rana.domain.VerificationType;
import com.rana.model.ForgotPasswordToken;
import com.rana.model.User;

public interface ForgotPasswordService
{

    ForgotPasswordToken createToken (User user , String id ,
                                     String otp ,
                                     VerificationType verificationType , String sendTo);


    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);
}
