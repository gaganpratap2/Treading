package com.rana.service;

import com.rana.domain.OrderStatus;
import com.rana.domain.OrderType;
import com.rana.model.*;
import com.rana.repository.OrderItemRepository;
import com.rana.repository.OrderRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.PrimitiveIterator;

@Service
public class orderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private WalletService walletService;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private AssetService assetService;

    @Override
    public Order createOrder(User user, OrderItem orderItem, OrderType orderType) {

        return null;
    }

    @Override
    public Order getOrderById(Long orderId) {
        return null;
    }

    @Override
    public List<Order> getAllOrdersOfUser(Long userId, OrderType orderType, String assetSymbol) {
        return orderRepository.findAllById(Collections.singleton(userId));

    }

    private OrderItem createOrderItem(Coin coin , double quantity , double buyPrice , double sellPrice){
        OrderItem orderItem
    }

    @Transactional
    public Order buyAsset(Coin coin, double quantity, User user) throws Exception {

        if (quantity <= 0) {
            throw new Exception("quantity should be >0");
        }

        double buyPrice = coin.getCurrentPrice();

        OrderItem orderItem = createOrderItem(coin, quantity, buyPrice, 0);

        Order order = createOrder(user, orderItem, OrderType.BUY);
        orderItem.setOrder(order);

        walletService.payOrderPayment(order, user);

        order.setStatus(OrderStatus.SUCCESS);
        order.setOrderType(OrderType.BUY);

        Order savedOrder = orderRepository.save(order);

//        create asset
        Asset oldAssest = assetService.findAssetByUserIdAndCoinId(order.getUser().getId(),
                order.getOrderItem().getCoin().getId());

        if(oldAssest == null){
            assetService.createAsset(user , orderItem.getCoin() , orderItem.getQuantity());
        }else{
            assetService.updateAsset(oldAssest.getId() , quantity);
        }

        return savedOrder;
    }

    @Transactional
    public Order sellAsset(Coin coin, double quantity, User user) throws Exception {

        if (quantity <= 0) {
            throw new Exception("quantity should be >0");
        }

        double sellPrice = coin.getCurrentPrice();

        Asset assetToSell = assetService.findAssetByUserIdAndCoinId(user.getId() , coin.getId());

        double buyPrice = assetToSell.getBuyPrice();

        if(assetToSell != null) {
            OrderItem orderItem = createOrderItem(coin, quantity, 0, sellPrice);


            Order order = createOrder(user, orderItem, OrderType.SELL);
            orderItem.setOrder(order);

            if (assetToSell.getQuantity() >= quantity) {

                order.setStatus(OrderStatus.SUCCESS);
                order.setOrderType(OrderType.SELL);
                Order savedOrder = orderRepository.save(order);

                walletService.payOrderPayment(order, user);

                Asset updateAsset = assetService.updateAsset(
                        assetToSell.getId() , quantity
                );



                if (updateAsset.getQuantity() * coin.getCurrentPrice() <= 1) {
                    assetService.deleteAsset(updateAsset.getId());
                }
                return savedOrder;
            }
            throw new Exception("Insufficient Quantity");
        }

        throw new Exception("asset not found");

    }


    @Override
    @Transactional
    public Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception {
        if(orderType.equals(OrderType.BUY)){
            return buyAsset(coin , quantity , user);
        }else if(orderType.equals(OrderType.SELL)){
            return sellAsset(coin , quantity , user);
        }
        throw new Exception("invalid order type");
    }
}
