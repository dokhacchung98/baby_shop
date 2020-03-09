package com.khacchung.babyshop.service;

import com.khacchung.babyshop.model.dao.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TransactionService {
    Transaction createTransaction(Transaction transaction);

    Page<Transaction> getTransactions(Pageable pageable, int userId);

    Transaction updateTransaction(Transaction transaction);

    Transaction deleteTransaction(int transactionId);
}
