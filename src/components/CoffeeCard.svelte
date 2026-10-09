<script lang="ts">
  import Icon from "./Icon.svelte";
  import { tl, brandFor, type Product } from "$lib/coffee";
  let {
    product,
    favorite = false,
    onFavorite,
    onAdd,
    ready = true,
  } = $props<{
    product: Product;
    favorite?: boolean;
    onFavorite: (id: number) => void;
    onAdd: (product: Product) => void;
    ready?: boolean;
  }>();
</script>

<article class="coffee-card">
  <div class="product-photo">
    <a href={"/urun/" + product.id + "/"} aria-label={product.name + " seçeneklerini gör"}
      ><img
        src={product.image}
        alt={product.name + " kahve fotoğrafı"}
        width="640"
        height="480"
        loading="lazy"
      /></a
    ><span class="temperature">{product.kind}</span><button
      class="favorite-button"
      class:saved={favorite}
      aria-label={product.name + (favorite ? " favorilerden çıkar" : " favorilere ekle")}
      aria-pressed={favorite}
      disabled={!ready}
      onclick={() => onFavorite(product.id)}><Icon name="heart" size={18} /></button
    >
  </div>
  <div class="product-content">
    <div class="product-brand">
      <img src={brandFor(product.cafe).image} width="20" height="20" alt="" /><span
        >{product.cafe}</span
      >
    </div>
    <a class="product-title" href={"/urun/" + product.id + "/"}>{product.name}</a>
    <p>{product.tag}</p>
    <div class="product-bottom">
      <span><strong>{tl(product.price)}</strong><small>Standart boy</small></span><button
        class="add-button"
        disabled={!ready}
        aria-label={product.name + " standart boy sepete ekle"}
        onclick={() => onAdd(product)}><Icon name="plus" /></button
      >
    </div>
  </div>
</article>
