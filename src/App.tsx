import './App.css'
import MyDay from './pages/MyDayPage'
import PostItImage from './assets/post-it.png';

function App() {
  return (
    <div>
      <div className='flex flex-row gap-3 items-center justify-center my-5'>
        <img src={PostItImage} alt="post-it" width={100}/>
        <h1 className='p-4'>My TODO LIST</h1>
      </div>
      <MyDay />
    </div>
  )
}

export default App
