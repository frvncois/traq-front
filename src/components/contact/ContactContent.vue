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
                <div class="about is-mask"></div>
                <div class="contact is-cover"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    z-index: 4;
}

.contact {
  &.is-wrap {
    height: 100dvh;
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: var(--space-small) var(--space-large);
    box-sizing: border-box;
    gap: var(--space-base);
    background: var(--is-fushia);
    font-family: 'Accent';
    will-change: transform;
    > .is-content {
        display: flex;
        gap: var(--space-width);
        > .is-items {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            & a {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        > .is-cover {
            background-color: var(--is-orange);
            flex: 1;
            height: 100%;
        }
        > .is-mask {
            background-color: var(--is-fushia);
            width: 100%;
            position: absolute;
            z-index: 2;
            bottom: 0;
            aspect-ratio: 1;
            clip-path: var(--cover);
        }
        &:first-child {
            flex: 1;
        }
        &:last-child {
            flex: 0.75;
            position: relative;
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

@media (max-width: 1400px) {
    .contact {
        &.is-wrap {
            .is-content {
            .is-cover {
                    display: none;
                    }
                }
            }
        }
}

@media (max-width: 768px) {
    .contact {
        &.is-wrap {
            padding: 0.35em var(--space-width);
            flex-direction: column-reverse;
            > .is-content {
                flex-direction: column;
                font-size: var(--font-rg);
                gap: var(--space-md);
                &:last-child {
                    flex: 1;
                }
                            .is-cover {
                    display: inline;
                    }
            }
            > .is-logo {
                bottom: var(--space-small);
                top: auto;
                left: auto;
                right: var(--space-width);
                & svg {
                    height: 3.85em;
                    width: auto;
                }
            }
        }
    }
}
</style>