package com.rana.repository;

import com.rana.model.PaymentDetails;
import com.rana.service.PaymentDetailsService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails , Long> {

    PaymentDetails findByUserId(Long userId);




}
