package com.rana.service;

import com.rana.domain.VerificationType;
import com.rana.model.User;

public interface UserService {

    public User findUserByJwt(String jwt) throws Exception;
    public User findUserByEmail(String email);

    public User findUserProfileByJwt(String jwt) throws Exception;
    public User findUserById(Long userId);

    public User enableTwoFactorAuthentication(VerificationType verificationType, String sendTo ,  User user);

    User updatePassword(User user , String newPassword);

}
