package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Transaction;
import com.khacchung.babyshop.model.dto.TransactionUpdateStatusDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface TransactionService {
    Transaction createTransaction(Transaction transaction, int userId);

    Page<Transaction> getTransactions(Pageable pageable, int userId);

    Transaction updateTransaction(Transaction transaction);

    Transaction deleteTransaction(int transactionId);

    Transaction updateStatus(TransactionUpdateStatusDTO updateStatusDTO);
}
