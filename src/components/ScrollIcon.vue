<script setup></script>
<template>
  <div class="scroll-container">
    <div class="field"><div class="mouse"></div></div>
  </div>
</template>
<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.field {
  position: fixed;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
}

.mouse {
  width: 40px;
  height: 60px;
  border: 2px solid #333;
  border-radius: 60px;
  position: relative;
}
.mouse::before {
  content: "";
  width: 12px;
  height: 12px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  border-radius: 50%;
  opacity: 1;
  animation: wheel 2s infinite;
  -webkit-animation: wheel 2s infinite;
}

@keyframes wheel {
  to {
    opacity: 0;
    top: 50px;
  }
}
@-webkit-keyframes wheel {
  to {
    opacity: 0;
    top: 50px;
  }
}
.scroll {
  width: 60px;
  height: 60px;
  border: 1px solid #333;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
}
.scroll::before {
  content: "";
  position: absolute;
  top: 15px;
  left: 18px;
  width: 18px;
  height: 18px;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: rotate(-45deg);
}

@keyframes scroll {
  0% {
    height: 20px;
  }
  30% {
    height: 60px;
  }
  60% {
    height: 20px;
  }
}
@-webkit-keyframes scroll {
  0% {
    height: 40px;
  }
  30% {
    height: 70px;
  }
  60% {
    height: 40px;
  }
}
</style>
