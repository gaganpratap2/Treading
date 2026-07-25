package com.rana.repository;

import com.rana.domain.VerificationType;
import com.rana.model.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode , Long> {

    public VerificationCode findByUserId(Long userId);




}
