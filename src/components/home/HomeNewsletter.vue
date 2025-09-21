<template>
    <section class="is-white">
        <div class="newsletter is-wrap">
            <div class="newsletter is-intro">
                <h1>Diffuseur des arts de la scène</h1>
            </div>
            <div class="newsletter is-content">
                <div class="newsletter is-elements">
                    <img src="@/assets/FooterN.svg"/>
                    <img src="@/assets/FooterA.svg"/>
                </div>
                <div class="newsletter is-cta">
                    <h2>Abonnez-vous à notre infolettre</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.newsletter {
    &.is-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    & h1 {
      font-size: 9vw;
      line-height: 1;
      }
    }
  &.is-intro {
    padding: var(--space-width);
  }
  &.is-content {
    display: flex;
    flex-direction: row;
    gap: var(--space-width);
    background-color: var(--is-orange);
    padding: var(--space-height) var(--space-width);
  }
  &.is-elements {
    flex: 1;
    > img {
      width: 100%;
      position: sticky;
      top: var(--space-base);
    }
  }
  &.is-cta {
    flex: 1;
      position: sticky;
      top: var(--space-base);
    & h2 {
      font-size: var(--font-lg);
    }
  }
}
</style>