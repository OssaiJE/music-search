import Title from '../components/Title'
import SearchResult from '../components/SearchResult'

const SearchResultPage = () => {
    return (
      <>
        <div className="bg-black w-full p-4 text-white">
          <Title />
        </div>
        <SearchResult />
      </>
    );
}

export default SearchResultPage
