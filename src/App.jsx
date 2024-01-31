import { useState, useEffect } from 'react'
import Postitem from './Componets/postItem'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true)
  useEffect(
    function () {
      Mount(page)
    }, [page]);
  async function Mount(page) {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
      let response = await res.json();
      console.log(response);
      if (response.length == 0) {
        setHasmore(false)
      } else {
        setPosts(response)
      }


    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
      <div>
          <button onClick={function () {
            setPage(page - 1)
          }} disabled={page === 1}>Previous Page</button>
          <p>{page}</p>
          <button onClick={function () {
            setPage(page + 1)
          }} 
            
          >Next Page</button>

        </div>
        {posts.map((post) => (
          <div key={post.id}>
            <Postitem post={post} />
        
          </div>

        ))}

      </div>

    </>
  )
}

export default App
