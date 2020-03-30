package com.khacchung.babyshop.model.dto;

public class AnalyticDTO {
    private int numberUser;
    private long priceMonth;
    private int numberOrder;
    private long numberOrderSuccess;

    public AnalyticDTO() {
    }

    public int getNumberUser() {
        return numberUser;
    }

    public void setNumberUser(int numberUser) {
        this.numberUser = numberUser;
    }

    public long getPriceMonth() {
        return priceMonth;
    }

    public void setPriceMonth(long priceMonth) {
        this.priceMonth = priceMonth;
    }

    public int getNumberOrder() {
        return numberOrder;
    }

    public void setNumberOrder(int numberOrder) {
        this.numberOrder = numberOrder;
    }

    public long getNumberOrderSuccess() {
        return numberOrderSuccess;
    }

    public void setNumberOrderSuccess(long numberOrderSuccess) {
        this.numberOrderSuccess = numberOrderSuccess;
    }
}
