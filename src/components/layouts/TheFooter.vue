<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__content__contacts-block">
        <img src="@/assets/icons/layouts/logo.svg" alt="B&B logo." />
        <p class="footer__content__contacts-block__number">8 777 901 23 45</p>
        <p
          class="footer__content__contacts-block__small"
          style="margin-top: -1.6rem"
        >
          info@invogue.kz
        </p>
        <p class="footer__content__contacts-block__adress">
          г. Алматы, ул. Аль-Фараби, 12
        </p>
        <ul class="home-page__contacts__info-block__contacts-list__media-nav">
          <li><img src="@/assets/icons/home/inst.svg" alt="instagram." /></li>
          <li>
            <img src="@/assets/icons/home/whatsapp.svg" alt="whatsapp." />
          </li>
          <li>
            <img src="@/assets/icons/home/telegram.svg" alt="telegram." />
          </li>
          <li>
            <img src="@/assets/icons/home/paintrest.svg" alt="paintrest." />
          </li>
        </ul>
      </div>
      <div class="footer__content__contacts-block footer__content__nav">
        <router-link to="/">наш шоурум</router-link>
        <router-link to="/catalog">Каталог</router-link>
        <router-link to="/inspiration">вдохновитесь</router-link>
        <router-link router-link to="/">контакты</router-link>
      </div>
      <div class="footer__content__contacts-block footer__content__nav">
        <router-link to="/return-rules">возврат и обмен</router-link>
        <router-link to="/delivery-pay">доставка и оплата</router-link>
        <router-link to="/how-to-order">как сделать заказ?</router-link>
      </div>
      <div class="footer__content__contacts-block footer__content__form">
        <h4 class="footer__content__form__title">Подпишитесь на рассылку</h4>
        <p class="footer__content__form__text">
          Чтобы получать самую актуальную информацию о продукции B&B Italia, а
          также фото- и видеоматериалы
        </p>
        <VInput
          :autocomplete="'off'"
          id="footer_email"
          placeholder="Ваш e-mail"
          type="email"
        />
        <base-button styles="btn-red" title="подписаться"></base-button>
      </div>
    </div>
    <hr class="footer__break-line" />
    <div class="footer__info">
      <p class="footer__info__text">2024 B&B Italia by invogue</p>
      <a class="footer__info__rules" href="#">Политика конфиденциальности</a>
    </div>
  </footer>
</template>
