package com.rana.service;

import com.rana.model.User;
import com.rana.model.WithDrawl;

import java.util.List;

public interface WithdrawalService {

    WithDrawl requestWithdrawal(Long amount, User user);

    WithDrawl proceedWithWithdrawal(Long withdrawalId, boolean accept) throws Exception;

//    WithDrawl proceedWithdrawal(Long withdrawalId, boolean accept) throws Exception;

    List<WithDrawl> getUserWithdrawalHistory(User user);

    List<WithDrawl> getAllWithdrawalRequests();
}

