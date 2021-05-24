import axios from 'axios'
import useSWR from 'swr'

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await axios.get(url + localStorage.getItem('numRes'))

    return response.data.results
  })

  return { data, error }
}
