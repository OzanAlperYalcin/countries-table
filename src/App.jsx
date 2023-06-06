import Loading from './components/Loading'
import Error from './components/Error'
import Layout from './layout/Layout'
import Main from './components/Main'
import { useQuery, gql } from '@apollo/client'
import './index.css'


const GET_LOCATIONS = gql`
query Countries {
  countries {
    currency
    emoji
    languages {
      code
      name
    }
    name
  }
}
`;

function App() {

  const { loading, error, data } = useQuery(GET_LOCATIONS)
  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <Layout>
      <Main data={data.countries} />
    </Layout>
  )
}

export default App
