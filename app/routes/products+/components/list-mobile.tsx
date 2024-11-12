import {useTranslation} from 'react-i18next';

import {Box, Card, CardContent, List, ListItem, Typography} from '@mui/material';

import {ApiProduct} from '~/api-client/types';

type TProps = {
  data?: ApiProduct[];
};

export const ListMobile = ({data = []}: TProps) => {
  const {t} = useTranslation('products');

  return (
    <List>
      {data.map(product => (
        <ListItem key={product.productId} disableGutters>
          <Card sx={{width: '100%'}}>
            <CardContent>
              <Typography variant="h5">{product.title.en || product.title.ar}</Typography>
              {product.image && (
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title.en || product.title.ar}
                  sx={{width: '100%', m: '8px 0'}}
                />
              )}
              <Box>
                <Typography variant="body2">
                  {t('sku')}: {product.sku || '-'}
                </Typography>
                <Typography variant="body2">
                  {t('quantity')}: {product.quantity || '-'}
                </Typography>
                <Typography
                  variant="body2"
                  color={product.isActive ? 'success.main' : 'error.main'}
                >
                  {t('status')}: {product.isActive ? t('active') : t('inactive')}
                </Typography>
                <Typography variant="body2">
                  {t('price')}: {product.price}
                </Typography>
                {product.priceSale && (
                  <Typography variant="body2">
                    {t('priceSale')}: {product.priceSale}
                  </Typography>
                )}
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Box>
                  <Typography mb="8px">
                    {t('created')}: {new Date(product.createdAt).toLocaleString()}
                  </Typography>
                  {product.updatedAt && (
                    <Typography>
                      {t('updated')}: {new Date(product.updatedAt).toLocaleString()}
                    </Typography>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};
