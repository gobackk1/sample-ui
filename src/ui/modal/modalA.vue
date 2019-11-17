<template>
  <div>
    <button type="button" class="modalA-btn" id="modalA-open">詳細を見る</button>
    <div class="modalA-mask js-hidden"></div>
    <section class="modalA js-hidden">
      <h2>モーダルウィンドウ</h2>
      <p>こんにちは</p>
      <button type="button" class="modalA-btn" id="modalA-close">閉じる</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "modalA",
  mounted: () => {
    const openBtn = document.getElementById("modalA-open");
    const closeBtn = document.getElementById("modalA-close");
    const mask = document.querySelector(".modalA-mask");
    const modal = document.querySelector(".modalA");

    openBtn.addEventListener("click", () => {
      modal.classList.remove("js-hidden");
      mask.classList.remove("js-hidden");
    });
    closeBtn.addEventListener("click", () => {
      modal.classList.add("js-hidden");
      mask.classList.add("js-hidden");
    });
    mask.addEventListener("click", () => {
      closeBtn.click();
    });
  }
};
</script>

<style lang="scss">
.modalA-btn {
  border: 1px solid #ccc;
  padding: 0.5em 0.9em;
  border-radius: 5px;
}
.modalA-mask {
  background: rgba(#000, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  opacity: 1;
  visibility: visible;
}
.modalA {
  background: #fff;
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 4px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: 0.3s;
  opacity: 1;
  visibility: visible;
  p {
    margin-bottom: 20px;
  }
}

.modalA-mask.js-hidden {
  opacity: 0;
  visibility: hidden;
}

.modalA.js-hidden {
  opacity: 0;
  visibility: hidden;
}
</style>
