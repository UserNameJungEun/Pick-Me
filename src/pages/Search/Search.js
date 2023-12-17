import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('./Search.json'); 
      const data = await response.json();
      const results = data.filter(item => item.Search === searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="Search MarginTop">
      <article>
        <div>
          <div className="Search_Box">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
            <div className="Search_Btn" onClick={handleSearch}>
              검색
            </div>
          </div>
          <div className="Search_Relation">#김정은 #이력서 #경력 #취미 #개발자</div>
        </div>
        <div className='Search_canvas'>
          <ul>
            {searchResults.map(result => (
              <li key={result.id}>
                <strong>{result.Search}</strong>
                <p>{result.Deta}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Search;