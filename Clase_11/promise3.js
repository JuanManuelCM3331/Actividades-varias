const getData = async () => {
    try{
        const result = await fetch ("https://jsonplaceholder.typicode.com/todos/5");
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error.message);
    }
}
getData();
