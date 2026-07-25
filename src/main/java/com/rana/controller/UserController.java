package com.rana.controller;


import com.rana.domain.VerificationType;
import com.rana.model.ForgotPasswordToken;
import com.rana.model.User;
import com.rana.model.VerificationCode;
import com.rana.response.AuthResponse;
import com.rana.service.EmailService;
import com.rana.service.ForgotPasswordService;
import com.rana.service.UserService;
import com.rana.service.VerificationCodeService;
import com.rana.utils.OtpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private VerificationCodeService verificationCodeService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @GetMapping("/api/users/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt){
            User user = userService.findUserProfileByJwt(jwt);

            return new ResponseEntity<User>(user , HttpStatus.OK);
    }

    @PostMapping("/api/users/verification/{verificationType}/send-otp")
    public ResponseEntity<String> sendVerificationOtp(@RequestHeader("Authorization") String jwt , @PathVariable VerificationType verificationType) throws Exception{

        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId());

        if(verificationCode == null ){
            verificationCode = verificationCodeService.sendVerificationCode(user , verificationType);
        }

        if(verificationType.equals(VerificationType.EMAIL)){
            emailService.sendVerificationOtpEmail(user.getEmail() , verificationCode.getOtp());
        }

        return new ResponseEntity<>("Verification OTP send successfully" , HttpStatus.OK);
    }


    @PatchMapping("/api/users/enable-two-factor/verify-otp/{otp}")
    public ResponseEntity<User> enableTwoFactorAuthentication(
            @PathVariable String otp,
            @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId())

        String sendTo = verificationCode.getVerificationType().equals(VerificationType.EMAIL)?
                verificationCode.getEmail(): verificationCode.getMobile();

        boolean isVerified = verificationCode.getOtp().equals(otp);

        if(isVerified){
            User updateUser = userService.enableTwoFactorAuthentication(verificationCode.getVerificationType() , sendTo , user);

            verificationCodeService.deleteVerificationCodeById(verificationCode());

            return new ResponseEntity<>(updateUser , HttpStatus.OK);
        }


        throw new Exception("Wrong OTP");
    }

    @PostMapping("/auth/users/reset-password/send-otp")
    public ResponseEntity<AuthResponse> sendForgotPasswordOtp(@RequestHeader("Authorization") String jwt , @PathVariable VerificationType verificationType) throws Exception{

        User user = userService.findUserProfileByJwt(jwt);
        String otp = OtpUtils.generateOTP();



        return new ResponseEntity<>("responce", HttpStatus.OK);
    }

    @PatchMapping("/auth/users/reset-password/verify-otp")
    public ResponseEntity<User> resetPassword(
            @RequestHeader("Authorization") String jwt) throws Exception {


        ForgotPasswordToken forgotPasswordToken = forgotPasswordService.findById(id);


    }


}
