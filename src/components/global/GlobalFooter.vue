<script setup>
import { RouterLink } from 'vue-router';
import LogoMain from '@/assets/LogoMain.vue';
</script>

<template>
    <footer>
        <div class="is-wrap">
            <div class="is-content">
                <h1>Productions Traquen'art</h1>
                <div class="is-item">
                    <span>5445, Av. de Gaspé</span>
                    <span>Bureau 640</span>
                    <span>Montréal, Québec H2T 3B2</span>
                    <span>Canada</span>
                </div>
                <div class="is-item">
                    <div>T.<a href="tel:5143962288">514 396-3388</a></div>
                    <div>F.<a href="tel:5146661250">514 666-1250</a></div>
                </div>
                <div class="is-item">
                    <div>E.<a href="mailto:info@traquenart.ca">info@traquenart.ca</a></div>
                </div>
            </div>
            <div class="is-content">
                <div class="is-item">
                    <div><a href="https://www.facebook.com/traquenart" target="_blank">Facebook</a></div>
                    <div><a href="https://www.instagram.com/traquenart.concerts" target="_blank">Instagram</a></div>
                </div>
                <div class="is-item">
                   <div><a>Infolettre</a></div>
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
    position: relative;
    z-index: 3;
    background-color: var(--is-orange);
  > .is-wrap {
    display: flex;
    flex-direction: row;
    gap: var(--space-base);
    padding: var(--space-small) var(--space-width);
    > .is-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-base);
    justify-content: space-between;
    flex: 2;
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
        > div {
            display: flex;
            flex-direction: row;
            gap: var(--space-xs);
        }
        & a {
            &:hover {
                text-decoration: underline;
                }
            }
        }
    }
    > .is-logo {
        position: absolute;
        bottom: var(--space-small);
        right: var(--space-width);
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex: 0.25;
      & svg {
        width: auto;
        height: 8.5em;
      }
    }
  }
}

@media (max-width: 768px) {
    footer {
    > .is-wrap {
            flex-direction: column;
            > .is-logo {
                position: relative;
                bottom: unset;
                right: unset;
                & a {
                    flex: 1;
                }
                & svg {
                    height: auto;
                    width: 100%;
                }
            }
        }
    }
}
</style>