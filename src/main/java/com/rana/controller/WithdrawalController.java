package com.rana.controller;

import com.rana.model.User;
import com.rana.model.Wallet;
import com.rana.model.WithDrawl;
import com.rana.service.UserService;
import com.rana.service.WalletService;
import com.rana.service.WithdrawalService;
import lombok.With;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.autoconfigure.WebMvcProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/api/withdrawal")
public class WithdrawalController {

    @Autowired
    private WithdrawalService withdrawalService;

    @Autowired
    private WalletService walletService;

    @Autowired
    private UserService userService;

//    @Autowired
//    private Wa


        // ===================== USER WITHDRAWAL REQUEST =====================
        @PostMapping("/api/withdraw/{amount}")
        public ResponseEntity<?> withdrawalRequest(
                @PathVariable Long amount,
                @RequestHeader("Authorization") String jwt) throws Exception {

            User user = userService.findUserProfileByJwt(jwt);
            Wallet userWallet = walletService.getUserWallet(user);

            WithDrawl withdrawal = withdrawalService.requestWithdrawal(amount, user);
            walletService.addBalance(userWallet, -withdrawal.getAmount());

            return new ResponseEntity<>(withdrawal, HttpStatus.OK);
        }

        // ===================== ADMIN PROCEED WITHDRAWAL =====================
        @PatchMapping("/api/admin/withdrawal/{id}/proceed/{accept}")
        public ResponseEntity<?> proceedWithdrawal(
                @PathVariable Long id,
                @PathVariable boolean accept,
                @RequestHeader("Authorization") String jwt) throws Exception {

            User user = userService.findUserProfileByJwt(jwt);
            WithDrawl withdrawal = withdrawalService.proceedWithWithdrawal(id, accept);
            Wallet userWallet = walletService.getUserWallet(user);

            if (!accept) {
                walletService.addBalance(userWallet, withdrawal.getAmount());
            }

            return new ResponseEntity<>(withdrawal, HttpStatus.OK);
        }

        // ===================== USER WITHDRAWAL HISTORY =====================
        @GetMapping("/api/withdrawal")
        public ResponseEntity<List<WithDrawl>> getWithdrawalHistory(
                @RequestHeader("Authorization") String jwt) throws Exception {

            User user = userService.findUserProfileByJwt(jwt);
            List<WithDrawl> withdrawal = withdrawalService.getUserWithdrawalHistory(user);

            return new ResponseEntity<>(withdrawal, HttpStatus.OK);
        }

        // ===================== ADMIN VIEW ALL WITHDRAWAL REQUESTS =====================
        @GetMapping("/api/admin/withdrawal")
        public ResponseEntity<List<WithDrawl>> getAllWithdrawalRequest(
                @RequestHeader("Authorization") String jwt) throws Exception {

            User user = userService.findUserProfileByJwt(jwt);
            List<WithDrawl> withdrawal = withdrawalService.getAllWithdrawalRequests();

            return new ResponseEntity<>(withdrawal, HttpStatus.OK);
        }
    }


}
