import { useEffect, useState, ReactElement } from 'react';

// material-ui
import { styled, useTheme, Theme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

// project import
import ProductFilterDrawer from '@fruity/sections/apps/e-commerce/products/ProductFilterDrawer';
import ProductsHeader from '@fruity/sections/apps/e-commerce/products/ProductsHeader';
import FloatingCart from '@fruity/components/cards/e-commerce/FloatingCart';
import SkeletonProductPlaceholder from '@fruity/components/skeleton/ProductPlaceholder';
import ProductCard from '@fruity/components/cards/e-commerce/ProductCard';
import ProductEmpty from '@fruity/sections/apps/e-commerce/products/ProductEmpty';
import useConfig from '@fruity/hooks/useConfig';
import { useDispatch, useSelector } from '@fruity/store';
import { getProducts, filterProducts } from '@fruity/store/reducers/product';
import { openDrawer } from '@fruity/store/reducers/menu';
import { resetCart } from '@fruity/store/reducers/cart';

// types
import { Products as ProductsType, ProductsFilter } from '@fruity/types/e-commerce';
import { filterProductsService } from './filter';

const Main = styled('main', { shouldForwardProp: (prop: string) => prop !== 'open' && prop !== 'container' })(
  ({ theme, open, container }: { theme: Theme; open: boolean; container: any }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    }),
    marginLeft: -320,
    ...(container && {
      [theme.breakpoints.only('lg')]: {
        marginLeft: !open ? -240 : 0
      }
    }),
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 0,
      marginLeft: 0
    },
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter
      }),
      marginLeft: 0
    })
  })
);

const MainStore = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  // product data
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);
  const productState = useSelector((state: any) => state.product);
  const cart = useSelector((state) => state.cart);
  const { container } = useConfig();

  useEffect(() => {
    dispatch(getProducts());

    // hide left drawer when email app opens
    dispatch(openDrawer(false));

    // clear cart if complete order
    if (cart.checkout.step > 2) {
      dispatch(resetCart());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProducts(productState?.products);
    setAllProducts(productState?.allProducts);
  }, [productState]);

  const [openFilterDrawer, setOpenFilterDrawer] = useState(true);
  const handleDrawerOpen = () => {
    setOpenFilterDrawer((prevState) => !prevState);
  };

  // filter
  const initialState: ProductsFilter = {
    search: '',
    sort: 'low',
    grade: [],
    categories: ['all'],
    colors: [],
    price: '',
    rating: 0
  };
  const [filter, setFilter] = useState(initialState);

  const filterData = async () => {
    dispatch(filterProducts(filterProductsService(allProducts, filter)));
    setLoading(false);
  };

  useEffect(() => {
    if (allProducts?.length) {
      filterData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  let productResult: ReactElement | ReactElement[] = <></>;
  if (products && products.length > 0) {
    productResult = products.map((product: ProductsType, index: number) => (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <ProductCard
          id={product.id}
          image={product.image}
          name={product.name}
          brand={product.brand}
          offer={product.offer}
          isStock={product.isStock}
          description={product.description}
          offerPrice={product.offerPrice}
          salePrice={product.salePrice}
          rating={product.rating}
          color={product.colors ? product.colors[0] : undefined}
          open={openFilterDrawer}
        />
      </Grid>
    ));
  } else {
    productResult = (
      <Grid item xs={12} sx={{ mt: 3 }}>
        <ProductEmpty handelFilter={() => setFilter(initialState)} />
      </Grid>
    );
  }

  return (
    <Box sx={{ display: 'flex', m: 5 }}>
      <ProductFilterDrawer
        filter={filter}
        setFilter={setFilter}
        openFilterDrawer={openFilterDrawer}
        handleDrawerOpen={handleDrawerOpen}
        setLoading={setLoading}
        initialState={initialState}
      />
      <Main theme={theme} open={openFilterDrawer} container={container}>
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <ProductsHeader filter={filter} handleDrawerOpen={handleDrawerOpen} setFilter={setFilter} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Grid key={item} item xs={12} sm={6} md={4} lg={4}>
                      <SkeletonProductPlaceholder />
                    </Grid>
                  ))
                : productResult}
            </Grid>
          </Grid>
        </Grid>
      </Main>
      <FloatingCart />
    </Box>
  );
};

export default MainStore;
