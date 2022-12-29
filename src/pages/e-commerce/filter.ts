import { products } from "@fruity/store/reducers/product";
import { Products } from "@fruity/types/e-commerce";
import { KeyedObject } from "@fruity/types/root";
import { cloneDeep } from "lodash";

export const filterProductsService = (products: Products[], filter: any): Products[] => {
  try {
    const clonedProducts: Products[] = cloneDeep(products);

    if (filter.sort === 'high') {
      clonedProducts.sort((a: Products, b: Products) => Number(b.offerPrice) - Number(a.offerPrice));
    }

    if (filter.sort === 'low') {
      clonedProducts.sort((a, b) => Number(a.offerPrice) - Number(b.offerPrice));
    }

    if (filter.sort === 'popularity') {
      clonedProducts.sort((a, b) => Number(b.popularity) - Number(a.popularity));
    }

    if (filter.sort === 'discount') {
      clonedProducts.sort((a, b) => Number(b.discount) - Number(a.discount));
    }

    if (filter.sort === 'new') {
      clonedProducts.sort((a, b) => Number(b.new) - Number(a.new));
    }

    const results = clonedProducts.filter((product: KeyedObject) => {
      let searchMatches = true;

      if (filter.search) {
        const properties = ['name', 'description', 'rating', 'salePrice', 'offerPrice', 'grade'];
        let containsQuery = false;

        properties.forEach((property) => {
          if (product[property] && product[property].toString().toLowerCase().includes(filter.search.toString().toLowerCase())) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          searchMatches = false;
        }
      }

      const gradeMatches = filter.grade.length > 0 ? filter.grade.some((item: string) => item === product.grade) : true;
      const categoriesMatches =
        filter.categories.length > 0 && filter.categories.some((category: string) => category !== 'all')
          ? filter.categories.some((category: string) => product.categories.some((item: string) => item === category))
          : true;
      const colorsMatches =
        filter.colors.length > 0 ? filter.colors.some((color: string) => product.colors.some((item: string) => item === color)) : true;

      const minMax = filter.price ? filter.price.split('-') : '';
      const priceMatches = filter.price ? product.offerPrice >= minMax[0] && product.offerPrice <= minMax[1] : true;
      const ratingMatches = filter.rating > 0 ? product.rating >= filter.rating : true;

      return searchMatches && gradeMatches && categoriesMatches && colorsMatches && priceMatches && ratingMatches;
    });

    return results;
  } catch (err) {
    console.error(err);
    throw new Error();
  }
};