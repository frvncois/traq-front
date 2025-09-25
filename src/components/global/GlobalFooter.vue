<script setup>
import { RouterLink } from 'vue-router';
import LogoMain from '@/assets/LogoMain.vue';
</script>

<template>
    <footer>
        <div class="is-wrap">
            <div class="is-content">
                <h1>Production Traquen'art</h1>
                <div class="is-item">
                    <span>5445, Av. de Gaspé</span>
                    <span>Bureau 640</span>
                    <span>Montréal, Québec H2T 3B2</span>
                    <span>Canada</span>
                </div>
                <div class="is-item">
                    <a href="tel:5143962288">T.514 396-3388</a>
                    <a href="tel:5146661250">F.514 666-1250</a>
                </div>
                <div class="is-item">
                    <a href="mailto:info@traquenart.ca">E.info@traquenart.ca</a>
                </div>
            </div>
            <div class="is-content">
                <div class="is-item">
                    <a href="https://www.facebook.com/traquenart" target="_blank">Facebook</a>
                    <a href="https://www.instagram.com/traquenart.concerts" target="_blank">Instagram</a>
                </div>
                <div class="is-item">
                    <a>Infolettre</a>   
                </div>
                <div class="is-item">
                    <RouterLink to="/programmation">Programmation</RouterLink>
                    <RouterLink to="/apropos">À Propos</RouterLink>
                    <RouterLink to="/Appuyez-nous">Appuyez-nous</RouterLink>
                    <RouterLink to="/Contact">Contact</RouterLink>
                </div>
            </div>
            <div class="is-logo">
                <RouterLink to="/">
                    <LogoMain />
                </RouterLink>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
  background-color: var(--is-orange);
  > .is-wrap {
    display: flex;
    flex-direction: row;
    padding: var(--space-small) var(--space-width);
    > .is-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-base);
    justify-content: space-between;
    flex: 1;
        > h1 {
        font-size: var(--font-rg);
        }
        &:not(:first-child) {
        text-transform: uppercase;
        }
        > .is-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: 'Accent';
            > a {
                border-bottom: 3px solid var(--is-orange);
                &:hover {
                    border-color: var(--is-black);
                    }
                }
            }
        }
    > .is-logo {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex: 1;
    }
  }
}
</style>