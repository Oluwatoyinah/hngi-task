import React from 'react' 
import ProfileImg from '../assets/images/oluwatoyin.jpg'
import Slack from '../assets/images/slack.png'
import Github from '../assets/images/github.png'
import ShareBtn from '../assets/images/share-button.png'
import MenuBtn from '../assets/images/mobile-share-button.png'


const Home = () => {
  return (
    <div className="container-fluid bg-main-gray pt-10 pb-5 mb-5 sm:mb-10 ">
        <div className="container-xl mx-auto">
            <div className='w-11/12 md:w-4/5 mx-auto'>
                <div className="flex justify-end md:w-4/5 lg:w-3/5 mx-auto mb-[-20px]">
                    <img src={ShareBtn} alt="share button icon" className='hidden md:flex' />
                    <img src={MenuBtn} alt="menu button icon" className='md:hidden' />
                </div>
                <div className="head text-center">
                    <img src={ProfileImg} id="profile__img" className="rounded-full mx-auto w-[80px] mb-1" alt="Profile img" />
                    <p className='profile-text' id='twitter'>o_luwatoyin</p>
                    <p className='profile-text hidden' id='slack'>Oluwatoyinah</p>
                </div>
                <div className="body mt-10">
                    <ul>  
                        <li className="mb-6"> 
                            <a href='https://twitter.com/o_luwatoyin' id='btn__twitter' className='links'>
                                <button>
                                Twitter Link
                                </button>
                            </a>
                        </li>

                        <li className="mb-6"> 
                            <a href='https://training.zuri.team/' id='btn__zuri' title='Where to find books about design and coding' className='links'>
                                <button>
                                Zuri Team
                                </button>
                            </a>
                        </li>

                        <li className="mb-6"> 
                            <a href='http://books.zuri.team' id='books' className='links'>
                                <button>
                                Zuri Books
                                </button>
                            </a>
                        </li>

                        <li className="mb-6"> 
                            <a href='https://books.zuri.team/python-for-beginners?ref_id=Oluwatoyinah' id='book__python' className='links'>
                                <button>
                                Python Books
                                </button>
                            </a>
                        </li>

                        <li className="mb-6"> 
                            <a href='https://background.zuri.team/' id='pitch' className='links'>
                                <button>
                                Background Check for Coders
                                </button>
                            </a>
                        </li>

                        <li className="mb-6"> 
                            <a href='https://books.zuri.team/design-rules' id='book__design' className='links'>
                                <button>
                                Design Books
                                </button>
                            </a>
                        </li>
                    </ul>

                    <div className='flex gap-3 justify-center py-6'>
                        <span>
                            <a href="https://">
                                <img src={Slack} alt="" />
                            </a>
                        </span>
                        <span>
                            <a href="https://github.com/Oluwatoyinah/hngi-task-one">
                                <img src={Github} alt="" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
  )
}

export default Home