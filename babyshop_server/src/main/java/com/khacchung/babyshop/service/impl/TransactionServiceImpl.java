package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Cart;
import com.khacchung.babyshop.model.dao.Transaction;
import com.khacchung.babyshop.model.dto.TransactionUpdateStatusDTO;
import com.khacchung.babyshop.repository.CartRepository;
import com.khacchung.babyshop.repository.TransactionRepository;
import com.khacchung.babyshop.service.TransactionService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {
    private static Logger logger = Logger.getLogger(TransactionServiceImpl.class);

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Transaction createTransaction(Transaction transaction, List<Integer> idCarts) {
        try {
            List<Cart> cartList = new ArrayList<>();
            for (int id : idCarts) {
                Cart c = cartRepository.findById(id).get();
                if (c != null) {
                    cartList.add(c);
                }
            }
            transaction.setCarts(cartList);
            Transaction tmp = transactionRepository.save(transaction);
            for (Cart t : cartList) {
                t.setTransactionId(tmp.getId());
                t.setUserId(0);
                cartRepository.save(t);
            }
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

    @Override
    public Transaction updateStatus(TransactionUpdateStatusDTO updateStatusDTO) {
        try {
            Transaction transaction = transactionRepository.findById(updateStatusDTO.getId()).get();
            if (transaction != null && transaction.getStatus() != updateStatusDTO.getStatus()) {
                transaction.setStatus(updateStatusDTO.getStatus());
                transactionRepository.save(transaction);
                return transaction;
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
