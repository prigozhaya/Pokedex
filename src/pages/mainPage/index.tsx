import Catalog from '../../components/catalog';
import Header from '../../components/header';
import ElementsPerPageDropDown from '../../components/elementsPerPageDropDown';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setCurrentPage } from '../../store/slices/metaInfoSlice';

export default function HomePage() {
  const params = useParams();
  const currentPage = params?.pageId ? Number(params?.pageId) : 1;
  const dispatch = useAppDispatch();
  dispatch(setCurrentPage({ currentPage }));

  return (
    <>
      <Header />
      <div className="pageContainer">
        <ElementsPerPageDropDown />
        <Catalog />
        <Outlet />
      </div>
    </>
  );
}
