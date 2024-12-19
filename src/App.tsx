import { useEffect, useRef, useState,useCallback, useMemo} from 'react'
import './App.css'
import { Details } from './components/details';
import image from "./assets/image.png"
import { Header } from './components/Header';
import { useAuth } from './hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import { ITodo } from './types.ts/types';

function App() {
  const handeLoading = useCallback(() => {
      setDetails(prev => ({...prev, isLoading: !prev.isLoading}))
    }, []);

  const [details, setDetails] = useState({
    isLoading: false,
    title: 'useEffect',  
    description: 'Hello, World!',
    buttonText:  'CLICK ME',
  })

  const imageRef = useRef(null);
  // const onClickImage = () => {
  //    imageRef?.current.style.borderRadius = '50px';
  //    imageRef.current.style.boxShadow = '0 3px 6px rgba(0,0,0, .0.1';


  // }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetails(prev =>({
        ...prev,
        isLoading: true,
      }))

      return () => {
        clearTimeout(timeout);
      }
    }, 1500);
  }, []);

  useEffect(() => {
    console.log("title has changed");
    setDetails(prev => ({...prev, description: "title has changes"}))
  }, [details.title])


  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(10);

  const result = useMemo(() => { return count * multiplier}, [count, multiplier])
  const {isLoggedIn, setIsLoggedIn} = useAuth();
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      setTodos(data);
    }
    fetchData();

  }, [])

  const navigate =  useNavigate()

  useEffect(() => {
    navigate("/")
  }, []);

  return (
    <>
    
  <div className='bg-gray-600 vh-100 '>
  <Header/>
  <Link to="/about-us">GO TO ABOUT US</Link>

  {isLoggedIn ? (<button onClick={() =>  setIsLoggedIn(false)}>Exit</button>) : (<button onClick={() => setIsLoggedIn(true)}>Enter</button>)} 

    {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
    {details.isLoading && (<p>loading</p>)}

     <Details details={details}  handleLoading={handeLoading}/>

    <div>Result : {result} </div>
    <button onClick={() => setCount(count + 1)}>ADD counter</button>
    <button onClick={() => setMultiplier(multiplier + 10)}>ADD multiplier</button>

    <img ref={imageRef} src={image} className='w-200 h-80 flex flex-col' alt="no photo"/>
    {/* <button className='flex flex-col items-center justify-center' onClick={onClickImage}> */}
    Change image
    {/* </button> */}

  </div>
    </>
      
  )
}

export default App
