import type {MetaFunction} from '@remix-run/node';
import {redirect} from '@remix-run/react';
import {useTranslation} from 'react-i18next';

import {Stack, useMediaQuery} from '@mui/material';

import {useQueryProductsList} from '~/services/products';

import {SkeletonOnLoading} from '~/global/components/skeleton-on-loading';
import {AppButton} from '~/global/components/app-button';

import {ProductsTable} from './components/table';
import {ListMobile} from './components/list-mobile';

export const handle = {i18n: ['common', 'products']};
export const meta: MetaFunction = () => [{title: 'Remix App - Products'}];

export const clientLoader = async () => {
  if (!window.localStorage.getItem('_at')) return redirect('/');

  return null;
};

export default function Products() {
  const {t} = useTranslation(['common']);
  const isMobileView = useMediaQuery('(max-width:600px)');
  const {data, isLoading} = useQueryProductsList();

  return (
    <>
      <Stack alignItems="flex-end" my={2}>
        <SkeletonOnLoading isLoading={isLoading}>
          <AppButton to="/products/create" variant="contained">
            {t('common:create')}
          </AppButton>
        </SkeletonOnLoading>
      </Stack>
      {isMobileView ? (
        <ListMobile data={data?.result} />
      ) : (
        <ProductsTable data={data?.result} isLoading={isLoading} />
      )}
    </>
  );
}
