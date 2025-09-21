<script setup>
import LogoMain from '@/assets/LogoMain.vue';
</script>

<template>
    <section class="is-fushia">
        <div class="contact is-wrap">
            <div class="contact is-logo">
            <RouterLink to="/">
                <LogoMain />
            </RouterLink>
            </div>
            <div class="contact is-content">
                <div class="is-items">
                    <span>5445, Av. de Gaspé</span>
                    <span>Bureau 640</span>
                    <span>Montréal, Québec H2T 3B2</span>
                    <span>Canada</span>
                </div>
                <div class="is-items">
                    <a href="tel:5143962288">T.514 396-3388</a>
                    <a href="tel:5146661250">F.514 666-1250</a>
                    <a href="mailto:info@traquenart.ca">E.info@traquenart.ca</a>
                </div>
                <div class="is-items">
                    <a class="uppercase" href="https://www.facebook.com/traquenart" target="_blank">Facebook</a>
                    <a class="uppercase" href="https://www.instagram.com/traquenart.concerts" target="_blank">Instagram</a>
                </div>
            </div>
            <div class="contact is-content">
                <div class="contact is-cover"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
  &.is-wrap {
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: var(--space-base) var(--space-large);
    box-sizing: border-box;
    gap: var(--space-base);
    background: var(--is-fushia);
    > .is-content {
        display: flex;
        gap: var(--space-width);
        > .is-items {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        > .is-cover {
            background-color: var(--is-orange);
            flex: 1;
            clip-path: var(--mask);
            height: 100%;
        }
        &:first-child {
            flex: 1;
        }
        &:last-child {
            flex: 0.5;
        }
    }
    > .is-logo {
        color: var(--is-black);
        position: absolute;
        top: var(--space-small);
        left: var(--space-width);
     }
  }
}
</style>