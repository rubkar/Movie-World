import {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  useCallback,
} from 'react';

import SearchIcon from '../../../search.svg';

interface ISearchInputProps {
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  searchMovies: (s: string) => void;
}

export const SearchInput: FC<ISearchInputProps> = ({
  searchMovies,
  searchTerm,
  setSearchTerm,
}) => {
  const setTerm: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSearch = () => searchMovies(searchTerm);

  const keyEnterHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        value={searchTerm}
        onChange={setTerm}
        placeholder="Search for movies"
        onKeyDown={keyEnterHandler}
      />
      <img src={SearchIcon} alt="search" onClick={handleSearch} />
    </div>
  );
};
