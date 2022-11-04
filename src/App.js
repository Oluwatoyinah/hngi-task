import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import Zuri from './assets/images/zuri-logo.png'
import I4G from './assets/images/I4G.png'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='*' element={<ErrorPage /> } />
      </Routes>
      
      <div className="bg-white">
          <div className="container-fluid mx-auto py-12 ">
              <div className='pt-4 sm:pt-9 flex gap-3 flex-col md:flex-row justify-between  w-[88%]  mx-auto border-t border-solid border-link-gray'>
                  <img src={Zuri} className="w-[180px]  md:mx-0 flex-initial" alt="" />
                  <p className='flex-initial mb-1 font-inter text-sm xl:text-base font-normal not-italic text-light-gray'>HNG Internship 9 Frontend Task</p>
                  <img src={I4G} className='w-[130px]  md:mx-0 flex-initial' alt="" />
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
