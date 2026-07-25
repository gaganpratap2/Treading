package com.rana.service;


import com.rana.domain.VerificationType;
import com.rana.model.ForgotPasswordToken;
import com.rana.model.User;
import com.rana.repository.ForgotPasswordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService{

    @Autowired
    private ForgotPasswordRepository forgotPasswordRepository;

    @Override
    public ForgotPasswordToken createToken(User user, String id, String otp, VerificationType verificationType, String sendTo) {

        ForgotPasswordToken token = new ForgotPasswordToken();
        token.setUser(user);
        token.setSendTo(sendTo);
        token.setOtp(otp);
        token.setId(id);
        token.setVerificationType(verificationType);
        return forgotPasswordRepository.save(token);
    }

    @Override
    public ForgotPasswordToken findById(String id) {
        return null;
    }

    @Override
    public ForgotPasswordToken findByUser(Long userId) {
        return null;
    }

    @Override
    public void deleteToken(ForgotPasswordToken token) {

    }
}
