package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.auth.CustomUserDetail;
import com.khacchung.babyshop.model.dao.Transaction;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.model.dto.TransactionAddressDTO;
import com.khacchung.babyshop.model.dto.TransactionUpdateStatusDTO;
import com.khacchung.babyshop.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Date;

@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @RequestMapping(value = "/user/add-transaction", method = RequestMethod.POST)
    public ResponeDataDTO<Transaction> createTransaction(@Valid @RequestBody TransactionAddressDTO addressDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            try {
                CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
                Transaction transaction = new Transaction();
                transaction.setCreatedDate(new Date());
                transaction.setUserId(userDetails.getUser().getId());

                transaction.setName(addressDTO.getName());
                transaction.setEmail(addressDTO.getEmail());
                transaction.setPhone(addressDTO.getPhone());
                transaction.setAddress(addressDTO.getAddress());

                transaction.setStatus(0);
                Transaction tmp = transactionService.createTransaction(transaction,
                        ((CustomUserDetail) auth.getPrincipal()).getUser().getId());
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

    @RequestMapping(value = "/user/get-transactions", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Transaction>> getTransaction(@Param("page") int page, @Param("size") int size) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            CustomUserDetail userDetails = (CustomUserDetail) auth.getPrincipal();
            Page<Transaction> tmp = transactionService.getTransactions(PageRequest.of(page, size, Sort.by("id").descending()), userDetails.getUser().getId());
            return new ResponeDataDTO.Builder<Page<Transaction>>()
                    .withData(tmp)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        }
        return new ResponeDataDTO<>(Result.FORBIDDEN);
    }

    @RequestMapping(value = "/user/get-detail-transaction", method = RequestMethod.GET)
    public ResponeDataDTO<Transaction> getDetailTransaction(@Param("id") int id) {
        try {
            Transaction tmp = transactionService.getDetail(id);
            return new ResponeDataDTO.Builder<Transaction>()
                    .withData(tmp)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/admin/get-transactions-status", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Transaction>> getTransactionStatus(@Param("page") int page, @Param("size") int size, @Param("type") int type) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            Page<Transaction> tmp = transactionService.getTransactionByStatus(PageRequest.of(page, size, Sort.by("id").descending()), type);
            return new ResponeDataDTO.Builder<Page<Transaction>>()
                    .withData(tmp)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        }
        return new ResponeDataDTO<>(Result.FORBIDDEN);
    }

    @RequestMapping(value = "/admin/get-new-transactions", method = RequestMethod.GET)
    public ResponeDataDTO<Page<Transaction>> getTransactionNews(@Param("page") int page, @Param("size") int size) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            Page<Transaction> tmp = transactionService.getNewTransaction(PageRequest.of(page, size, Sort.by("id").descending()));
            return new ResponeDataDTO.Builder<Page<Transaction>>()
                    .withData(tmp)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        }
        return new ResponeDataDTO<>(Result.FORBIDDEN);
    }
}
