<template>
  <div class="box">
    <ul>
      <li class="l1">
        <div class="left">
          <el-icon class="icon1"><UserFilled /></el-icon>
        </div>
        <div class="ringht">
          <span>New Vistis</span>
          <p>102,400</p>
        </div>
      </li>
      <li class="l2">
        <div class="left">
          <el-icon class="icon2"><Comment /></el-icon>
        </div>
        <div class="ringht">
          <span>Message</span>
          <p>81,212</p>
        </div>
      </li>
      <li class="l3">
        <div class="left">
          <el-icon class="icon3"><HomeFilled /></el-icon>
        </div>
        <div class="ringht">
          <span>Purchasee</span>
          <p>9,280</p>
        </div>
      </li>
      <li class="l4">
        <div class="left">
          <el-icon class="icon4"><Ticket /></el-icon>
        </div>
        <div class="ringht">
          <span>Shoppings</span>
          <p>13,600</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  UserFilled,
  Ticket,
  Comment,
  HomeFilled
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  > li {
    display: flex;
    width: 300px;
    height: 100px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    span {
      font-size: 13px;
      color: #8c8c8c;
    }
    p {
      color: #666666;
      font-weight: 800;
    }
  }
  .l1 .left :hover {
    text-align: center;
    background-color: #40c9c6;
    color: white;
		border-radius: 3px;
  }
	.l2 .left :hover {
		text-align: center;
    background-color: #36a3f7;
    color: white;
		border-radius: 3px;
	}
	.l3 .left :hover{
		text-align: center;
    background-color: #f4516c;
    color: white;
		border-radius: 3px;
	}
	.l4 .left :hover{
		text-align: center;
    background-color: #34bfa3;
    color: white;
		border-radius: 3px;
	}
  .left {
    width: 70px;
    height: 70px;
    text-align: center;
    padding-top: 10px;
		.icon1{
			color:#40c9c6;
		}
		.icon2{
			color:#36a3f7;
		}
		.icon3{
			color:#f4516c;
		}
		.icon4{
			color:#34bfa3;
		}
  }
}

.el-icon {
  font-size: 50px;
}
</style>
