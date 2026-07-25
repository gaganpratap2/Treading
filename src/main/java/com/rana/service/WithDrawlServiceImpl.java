package com.rana.service;

import com.rana.domain.WithDrawlStatus;
import com.rana.model.User;
import com.rana.model.WithDrawl;
import com.rana.repository.WithDrawlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class WithDrawlServiceImpl implements WithdrawalService{

    @Autowired
    private WithDrawlRepository withDrawlRepository;

    @Override
    public WithDrawl requestWithdrawal(Long amount, User user) {
        WithDrawl withDrawl = new WithDrawl();
        withDrawl.setAmount(amount);
        withDrawl.setUser(user);
        withDrawl.setStatus(WithDrawlStatus.PENDING);
        return withDrawlRepository.save(withDrawl);
    }

    @Override
    public WithDrawl proceedWithWithdrawal(Long withdrawalId, boolean accept) throws Exception {
        Optional<WithDrawl> withdrawal = withDrawlRepository.findById(withdrawalId);
        if (withdrawal.isEmpty()) {
            throw new Exception("withdrawal not found");
        }

        WithDrawl withdrawal1 = withdrawal.get();
        withdrawal1.setDate(LocalDateTime.now());

        if (accept) {
            withdrawal1.setStatus(WithDrawlStatus.SUCCESS);
        } else {
            withdrawal1.setStatus(WithDrawlStatus.PENDING);
        }

        return withDrawlRepository.save(withdrawal1);
    }

    @Override
    public List<WithDrawl> getUserWithdrawalHistory(User user) {
        return withDrawlRepository.findByUserId(user.getId());
    }

    @Override
    public List<WithDrawl> getAllWithdrawalRequests() {
        return withDrawlRepository.findAll();
    }
    }



