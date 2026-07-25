package com.rana.utils;

import java.util.Random;

public class OtpUtils {

    public static String generateOTP(){
        int len = 6;
        Random ran = new Random();


        StringBuilder otp = new StringBuilder();

        for(int i =0 ; i < len ; i++){
            otp.append(ran.nextInt(10));
        }
        return otp.toString();
    }
}
