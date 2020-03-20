import {useLocation} from 'react-router-dom'

export function useQuery(): { [key: string]: string } {
    const params = new URLSearchParams(useLocation().search);
    const query: { [key: string]: string } = {};
    params.forEach((value, key) => query[key] = value)
    return query;
}
