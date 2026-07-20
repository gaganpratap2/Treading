package com.rana.service;

import com.rana.domain.OrderType;
import com.rana.model.Coin;
import com.rana.model.Order;
import com.rana.model.OrderItem;
import com.rana.model.User;

import java.util.List;

public interface OrderService {

    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId);

    List<Order> getAllOrdersOfUser(Long userId, OrderType orderType, String assetSymbol);

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;
}
