<template>
  <div style="display: inline-block" v-for="(week, index) in weeks" :key="index">
    <div>week: {{ index }}</div>
    <div>money: {{ week.money }}</div>
    <div>
      cards:
      <div v-for="card in week.cards" :key="card.no">
        <div>card no: {{ card.no }}</div>
        <div>available service count: {{ card.serviceCount }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  font-size: 40px;
}
</style>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

const cost_per_service = 20;
let money = 0;

const card_price = 2400;
const card_per_week = 2;

let card_no = 0;
let cards = [];
const card_service_per_week = 2;

const weeks = reactive([]);

let interval = setInterval(() => {
  if (weeks.length > 100) {
    clearInterval(interval);
  }
  // new card of every week
  money += card_per_week * card_price;
  cards.push(
    Array(card_per_week).map((el) => {
      card_no++;
      return { no: card_no, serviceCount: 30 };
    })
  );
  // paid service of every card of every week
  cards.forEach((el) => {
    let i = card_service_per_week;
    while (i > 0) {
      if (el.serviceCount > 0) {
        el.serviceCount--;
        money -= cost_per_service;
      } else {
        break;
      }
    }
  });
  cards = cards.filter((el) => el.serviceCount > 0);
  weeks.push({ money, cards: JSON.parse(JSON.stringify(cards)) });
}, 100);
</script>
