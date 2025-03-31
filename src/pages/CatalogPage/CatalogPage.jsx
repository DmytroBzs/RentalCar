import SearchBar from '../../components/SearchBar/SearchBar';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <SearchBar />
    </div>
  );
};

export default CatalogPage;
