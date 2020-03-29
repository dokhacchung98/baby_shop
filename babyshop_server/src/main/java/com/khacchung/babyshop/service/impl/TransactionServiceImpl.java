package com.khacchung.babyshop.service.impl;

import com.khacchung.babyshop.model.dao.Cart;
import com.khacchung.babyshop.model.dao.Order;
import com.khacchung.babyshop.model.dao.Transaction;
import com.khacchung.babyshop.model.dto.TransactionUpdateStatusDTO;
import com.khacchung.babyshop.repository.CartRepository;
import com.khacchung.babyshop.repository.OrderRepository;
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

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Transaction createTransaction(Transaction transaction, int userId) {
        try {
            List<Order> orderList = new ArrayList<>();
            List<Cart> cartList = cartRepository.findAllCartByUserId(userId);
            Transaction tmp = new Transaction();
            if (cartList != null && cartList.size() > 0) {
                tmp = transactionRepository.save(transaction);
                for (Cart t : cartList) {
                    Order order = new Order();
                    order.setColor(t.isColor());
                    order.setColorValue(t.getColorValue());
                    order.setSize(t.isSize());
                    order.setSizeValue(t.getSizeValue());
                    order.setPrice(t.getProduct().getPrice());
                    order.setDiscount(t.getProduct().getDiscount());
                    order.setNumber(t.getNumber());
                    order.setTransaction(tmp);
                    order.setTransactionId(tmp.getId());
                    order.setProductId(t.getProductId());
                    order = orderRepository.save(order);
                    orderList.add(order);
                }
            }
            tmp.setOrders(orderList);
            cartRepository.deleteAll(cartList);

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
    public Transaction getDetail(int transactionId) {
        try {
            Transaction tmp = transactionRepository.findById(transactionId).get();
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

    @Override
    public Page<Transaction> getTransactionByStatus(Pageable pageable, int type) {
        try {
            Page<Transaction> tmp = transactionRepository.findTransactionByStatus(pageable, type);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    @Override
    public Page<Transaction> getNewTransaction(Pageable pageable) {
        try {
            Page<Transaction> tmp = transactionRepository.findNewTransaction(pageable);
            return tmp;
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }
}
