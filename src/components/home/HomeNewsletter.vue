<template>
<section class="is-white is-stack">
  <div class="newsletter is-wrap">
    <div class="newsletter is-intro">
      <h1>Diffuseur des arts de la scène</h1>
    </div>
  </div>
</section>

<section class="is-orange">
  <div class="newsletter is-content">
    <div class="newsletter is-elements">
      <img src="@/assets/FooterElement.svg"/>
      <img src="@/assets/FooterN.svg"/>
      <img src="@/assets/FooterA.svg" />
      <img src="@/assets/FooterR.svg" />
      <img src="@/assets/FooterT.svg" />
    </div>
    <div class="newsletter is-cta">
      <h2>Abonnez-vous à notre infolettre</h2>
    </div>
  </div>
</section>
</template>

<style scoped>
.is-stack {
  position: sticky;
  top:0;
}

.newsletter {
    &.is-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    & h1 {
      font-size: 9.75vw;
      line-height: 1;
      }
    }
  &.is-intro {
    padding: var(--space-width); 
  }
  &.is-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--space-base);
    background-color: var(--is-orange);
    padding: 0 var(--space-width) calc(var(--space-base) * 2.5) var(--space-width);
  }
  &.is-elements {
    flex: 1;
    position: relative;
    display: flex;
    gap: var(--space-base);
    flex-direction: column;
    padding-top: var(--space-base);
    > img {
      aspect-ratio: 1;
      z-index: 2;
      position: relative;
      &:first-child {
        position: sticky;
        top: var(--space-base);
        z-index: 3;
      }
      &:nth-child(2) {
        position: sticky;
        top: var(--space-base);
        margin-top: calc(-100% - var(--space-base));
      }
    }
  }
  &.is-cta {
    flex: 1;
      position: sticky;
      top: var(--space-base);
      margin-top: var(--space-base);
    
    & h2 {
      font-size: var(--font-lg);
      margin-top: -0.125em;
    }
  }
}

@media (max-width: 768px) {
.newsletter {
  &.is-wrap {
    h1 {
      font-size: 13vw;
      line-height: 0.95;
    }
  }
  &.is-intro {
    padding: var(--space-width);
  }
  &.is-content {
    flex-direction: column;
  }
  &.is-elements {
    > img {
      max-width: 100%;
      height: 100%;
    }
  }
}
}
</style>