export const fetchJeans = () => (dispatch) => {
    fetch('http://localhost:8000/jeans')
    .then(resp => resp.json())
    .then(jeans => dispatch({type:'FETCH_JEANS', payload: {jeans:jeans}}))
}