package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Transaction;
import com.khacchung.babyshop.repository.TransactionRepository;
import com.khacchung.babyshop.service.TransactionService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TransactionServiceImpl implements TransactionService {
    private static Logger logger = Logger.getLogger(TransactionServiceImpl.class);

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public Transaction createTransaction(Transaction transaction) {
        try {
            Transaction tmp = transactionRepository.save(transaction);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Transaction> getTransactions(Pageable pageable, int userId) {
        try {
            Page<Transaction> tmp = transactionRepository.findTransaction(pageable, userId);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Transaction updateTransaction(Transaction transaction) {
        try {
            Transaction tmp = transactionRepository.save(transaction);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Transaction deleteTransaction(int transactionId) {
        try {
            Transaction tmp = transactionRepository.findById(transactionId).get();
            transactionRepository.delete(tmp);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
