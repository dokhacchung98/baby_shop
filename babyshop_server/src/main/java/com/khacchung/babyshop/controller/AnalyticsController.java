package com.khacchung.babyshop.controller;

import com.khacchung.babyshop.common.utils.Constants;
import com.khacchung.babyshop.common.utils.EnumStatus;
import com.khacchung.babyshop.common.utils.Result;
import com.khacchung.babyshop.model.dao.Transaction;
import com.khacchung.babyshop.model.dto.AnalyticDTO;
import com.khacchung.babyshop.model.dto.ResponeDataDTO;
import com.khacchung.babyshop.repository.TransactionRepository;
import com.khacchung.babyshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AnalyticsController {

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/admin/analytic", method = RequestMethod.GET)
    public ResponeDataDTO<AnalyticDTO> createTransaction() {
        try {
            int numberUser = userRepository.findAll().size();
            long money = 0;
            List<Transaction> transactions = (List<Transaction>) transactionRepository.findAll();
            for (Transaction item : transactions) {
                money += item.getOrders().stream().mapToLong(t -> t.getPriceNumber()).sum();
            }
            int numberTransaction = transactions.size();
            long numberSS = transactions.stream().filter(t -> t.getStatus() == EnumStatus.TYPE_SUCCESS).count();
            AnalyticDTO analyticDTO = new AnalyticDTO();
            analyticDTO.setNumberOrder(numberTransaction);
            analyticDTO.setNumberOrderSuccess(numberSS);
            analyticDTO.setNumberUser(numberUser);
            analyticDTO.setPriceMonth(money);
            return new ResponeDataDTO.Builder<AnalyticDTO>()
                    .withData(analyticDTO)
                    .withCode(Constants.SUCCESS_CODE)
                    .withMessage(Constants.SUCCESS_MSG)
                    .build();
        } catch (Exception e) {
            return new ResponeDataDTO<>(Result.BAD_REQUEST);
        }
    }
}
