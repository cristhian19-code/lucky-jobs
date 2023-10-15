// icons
import MapPin2LineIcon from 'remixicon-react/MapPin2LineIcon'
import Settings2LineIcon from 'remixicon-react/Settings2LineIcon'
import Notification3LineIcon from 'remixicon-react/Notification3LineIcon'
// components
import { IconButton } from '../button/IconButton'
import { Avatar } from '../avatar/Avatar'


export const Navbar = () => {
  return (
    <header className="bg-black px-4 py-8 text-white flex items-center border-b border-b-zinc-800 text-sm">
      <div className="text-2xl font-bold">
        LuckyJob
      </div>
      <nav className="ml-8">
        <ul className="flex gap-5 font-medium">
          <li>Find job</li>
          <li>Messages</li>
          <li>Hiring</li>
          <li>Community</li>
          <li>FAQ</li>
        </ul>
      </nav>

      <div className="ml-auto flex gap-2 items-center">
        <MapPin2LineIcon />
        <span>New York, NY</span>
      </div>

      <div className='ml-10 flex items-center gap-3'>
        <Avatar showBadge color='bg-green-400' image='https://images.pexels.com/photos/17402544/pexels-photo-17402544/free-photo-of-hombre-cara-retrato-sonriente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <IconButton icon={<Settings2LineIcon />} />
        <IconButton icon={<Notification3LineIcon />} />
      </div>
    </header>
  )
}
