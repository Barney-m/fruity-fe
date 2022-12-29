import { useEffect, useState } from 'react';

// material-ui
import { Box, Checkbox, FormControlLabel, Grid, Rating, Skeleton, Slider, Stack, TextField, Typography } from '@mui/material';

// types
import { ProductsFilter } from '@fruity/types/e-commerce';

// project imports
import Colors from './Colors';

// ==============================|| PRODUCT GRID Grade FILTER ||============================== //

const Grade = ({ Grade, handleFilter }: { Grade: string[]; handleFilter: (type: string, params: string) => void }) => {
  const [isGradeLoading, setGradeLoading] = useState(true);
  useEffect(() => {
    setGradeLoading(false);
  }, []);

  return (
    <Stack>
      {isGradeLoading ? (
        <Skeleton variant="rectangular" width="100%" height={42} />
      ) : (
        <>
          <Typography variant="h5">Grade</Typography>
          <Box sx={{ pl: 0.5 }}>
            <Stack>
              <FormControlLabel
                control={<Checkbox checked={Grade.some((item) => item === 'A')} />}
                onChange={() => handleFilter('grade', 'A')}
                label="A"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Grade.some((item) => item === 'B')}
                    onChange={() => handleFilter('grade', 'B')}
                    color="secondary"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Grade.some((item) => item === 'C')}
                    onChange={() => handleFilter('grade', 'C')}
                    color="error"
                  />
                }
                label="C"
              />
            </Stack>
          </Box>
        </>
      )}
    </Stack>
  );
};

// ==============================|| PRODUCT GRID - CATEGORIES FILTER ||============================== //

const Categories = ({ categories, handleFilter }: { categories: string[]; handleFilter: (type: string, params: string) => void }) => {
  const [isCategoriesLoading, setCategoriesLoading] = useState(true);
  useEffect(() => {
    setCategoriesLoading(false);
  }, []);

  return (
    <Stack>
      {isCategoriesLoading ? (
        <Grid item xs={12}>
          <Skeleton variant="rectangular" width="100%" height={96} />
        </Grid>
      ) : (
        <>
          <Typography variant="h5">Categories</Typography>
          <Box sx={{ pl: 0.5 }}>
            <Stack>
              <FormControlLabel
                control={<Checkbox checked={categories.some((item) => item === 'all')} />}
                onChange={() => handleFilter('categories', 'all')}
                label="All"
              />
              <FormControlLabel
                control={<Checkbox checked={categories.some((item) => item === 'citrus')} />}
                onChange={() => handleFilter('categories', 'citrus')}
                label="Citrus"
              />
              <FormControlLabel
                control={<Checkbox checked={categories.some((item) => item === 'stone-fruits')} />}
                onChange={() => handleFilter('categories', 'stone-fruits')}
                label="Stone Fruits"
              />
              <FormControlLabel
                control={<Checkbox checked={categories.some((item) => item === 'tropical')} />}
                onChange={() => handleFilter('categories', 'tropical')}
                label="Tropical"
              />
              <FormControlLabel
                control={<Checkbox checked={categories.some((item) => item === 'berries')} />}
                onChange={() => handleFilter('categories', 'berries')}
                label="Berries"
              />
              <FormControlLabel
                control={<Checkbox checked={categories.some((item) => item === 'melons')} />}
                onChange={() => handleFilter('categories', 'melons')}
                label="Melons"
              />
            </Stack>
          </Box>
        </>
      )}
    </Stack>
  );
};

// ==============================|| PRODUCT GRID - PRICE FILTER ||============================== //

const Price = ({ price, handleFilter }: { price: string; handleFilter: (type: string, params: string) => void }) => {
  const [isPriceLoading, setPriceLoading] = useState(true);
  useEffect(() => {
    setPriceLoading(false);
  }, []);

  const valuetext = (value: number) => `${value}`;

  const [value, setValue] = useState<number[]>([0, 300]);
  const handleSlider = (event: Event, newValue: any) => {
    setValue(newValue);
    const data = `${newValue[0]}-${newValue[1]}`;
    handleFilter('price', data);
  };

  return (
    <>
      {isPriceLoading ? (
        <Skeleton variant="rectangular" width="100%" height={172} />
      ) : (
        <Stack spacing={1}>
          <Typography variant="h5">Price</Typography>
          <Stack direction="row" spacing={2}>
            <Stack spacing={0.5}>
              <Typography color="textSecondary">Min</Typography>
              <TextField
                value={value[0]}
                InputProps={{
                  readOnly: true
                }}
              />
            </Stack>
            <Stack spacing={0.5}>
              <Typography color="textSecondary">Max</Typography>
              <TextField
                value={value[1]}
                InputProps={{
                  readOnly: true
                }}
              />
            </Stack>
          </Stack>
          <Box sx={{ px: 0.75 }}>
            <Slider min={0} max={1000} value={value} onChange={handleSlider} valueLabelDisplay="auto" getAriaValueText={valuetext} />
          </Box>
        </Stack>
      )}
    </>
  );
};

// ==============================|| PRODUCT GRID - RATING FILTER ||============================== //

const RatingSection = ({
  rating,
  handleFilter
}: {
  rating: number;
  handleFilter: (type: string, params: string, rating: number) => void;
}) => {
  const [isRatingLoading, setRatingLoading] = useState(true);
  useEffect(() => {
    setRatingLoading(false);
  }, []);

  return (
    <>
      {isRatingLoading ? (
        <Skeleton variant="rectangular" width="100%" height={172} />
      ) : (
        <Stack spacing={1}>
          <Typography variant="h5">Rating</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Rating
              precision={0.5}
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => handleFilter('rating', '', newValue!)}
            />
            <Typography component="legend">({rating})</Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
};

// ==============================|| PRODUCT GRID - FILTER ||============================== //

const ProductFilter = ({
  filter,
  handleFilter
}: {
  filter: ProductsFilter;
  handleFilter: (type: string, params: string, rating?: number) => void;
}) => (
  <Grid container direction="column" rowSpacing={3}>
    <Grid item>
      <Grade Grade={filter.grade} handleFilter={handleFilter} />
    </Grid>
    <Grid item>
      <Categories categories={filter.categories} handleFilter={handleFilter} />
    </Grid>
    <Grid item>
      <Colors colors={filter.colors} handleFilter={handleFilter} />
    </Grid>
    <Grid item>
      <Price price={filter.price} handleFilter={handleFilter} />
    </Grid>
    <Grid item>
      <RatingSection rating={filter.rating} handleFilter={handleFilter} />
    </Grid>
  </Grid>
);

export default ProductFilter;
