package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.auth.CustomUserDetail;
import com.khacchung.babyshop.model.dao.Transaction;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.model.dto.TransactionDTO;
import com.khacchung.babyshop.model.dto.TransactionUpdateStatusDTO;
import com.khacchung.babyshop.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @RequestMapping(value = "/user/add-transaction", method = RequestMethod.POST)
    public ResponeDataDTO<Transaction> createTransaction(@RequestBody TransactionDTO transactionDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            try {
                CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
                Transaction transaction = new Transaction();
                transaction.setCreatedDate(new Date());
                transaction.setUserId(userDetails.getUser().getId());
                transaction.setStatus(0);
                Transaction tmp = transactionService.createTransaction(transaction, transactionDTO.getListCartId());
                return new ResponeDataDTO.Builder<Transaction>()
                        .withData(tmp)
                        .withCode(Constants.SUCCESS_CODE)
                        .withMessage(Constants.SUCCESS_MSG)
                        .build();
            } catch (Exception e) {
                return new ResponeDataDTO<>(Result.BAD_REQUEST);
            }
        } else {
            return new ResponeDataDTO<>(Result.FORBIDDEN);
        }
    }

    @RequestMapping(value = "/admin/update-transaction", method = RequestMethod.POST)
    public ResponeDataDTO<Transaction> updateStatus(@RequestBody TransactionUpdateStatusDTO updateStatusDTO) {
        try {
            Transaction tmp = transactionService.updateStatus(updateStatusDTO);
            return new ResponeDataDTO.Builder<Transaction>()
                    .withData(tmp)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }
}
