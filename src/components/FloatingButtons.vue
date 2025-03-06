<template>
    <button class="floating-button">
    <a href="https://reyespatria.controlacademico.com/login.php">
      <img
        src="/assets/media/ca.png"
        alt="ca"
        width="30"
        height="20"
        class="m-1"
      />
    </a>
  </button>

  <button class="floating-button-2">
    <a href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment">
      <img
        src="/assets/media/logo-pse.webp"
        alt="pse"
        width="65"
        height="65"
        class="m-1"
      />
    </a>
  </button>
</template>

<style scoped>
.floating-button {
  position: fixed;
  right: 20px;
  bottom: 20px; /* Botón inferior */
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, background-color 0.3s;
  z-index: 1001;
}

.floating-button-2 {
  position: fixed;
  right: 20px;
  bottom: 20px; /* Botón inferior */
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, background-color 0.3s;
  bottom: 80px; 
  z-index: 1001;
}

.floating-button-2:hover{
  background-color: var(--rp-blue);
  transform: scale(1.1);
}
.floating-button:hover {
  background-color: var(--rp-green);
  transform: scale(1.1);
}

</style>