package com.rana.controller;

import com.rana.model.Coin;
import com.rana.service.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.List;

@RestController
@RequestMapping("/coins")
public class CoinController {

    @Autowired
    private CoinService coinService;

    @Autowired
    private ObjectMapper objectMapper;

    ResponseEntity<List<Coin>> getCoinList(@RequestParam("page")) {
        return null;
    }

        @GetMapping
        public ResponseEntity<List<Coin>> getCoinList(
                @RequestParam("page") int page) throws Exception {

            List<Coin> coins = coinService.getCoinList(page);
            return new ResponseEntity<>(coins, HttpStatus.ACCEPTED);
        }

        @GetMapping("/{coinId}/chart")
        public ResponseEntity<JsonNode> getMarketChart(
                @PathVariable String coinId,
                @RequestParam("days") int days) throws Exception {

            String res = coinService.getMarketChart(coinId, days);
            JsonNode jsonNode = objectMapper.readTree(res);

            return new ResponseEntity<>(jsonNode, HttpStatus.ACCEPTED);
        }

        @GetMapping("/search")
        public ResponseEntity<JsonNode> searchCoin(
                @RequestParam("q") String keyword) throws JsonProcessingException, Exception {

            String coin = coinService.searchCoin(keyword);
            JsonNode jsonNode = objectMapper.readTree(coin);

            return ResponseEntity.ok(jsonNode);
        }

        @GetMapping("/top50")
        public ResponseEntity<JsonNode> getTop50CoinByMarketCapRank()
                throws Exception {

            String coin = coinService.getTop50CoinsByMarketCapRank();
            JsonNode jsonNode = objectMapper.readTree(coin);

            return ResponseEntity.ok(jsonNode);
        }

        @GetMapping("/treading")
        public ResponseEntity<JsonNode> getTreadingCoin()
                throws Exception {

            String coin = coinService.getTrendingCoins();
            JsonNode jsonNode = objectMapper.readTree(coin);

            return ResponseEntity.ok(jsonNode);
        }

        @GetMapping("details/{coinId}")
        ResponseEntity<JsonNode> getCoinDetails(@PathVariable String coinId) throws Exception{
        String coin = coinService.getCoinDetails(coinId);
        JsonNode jsonNode = objectMapper.readTree(coin);
        }
    }

