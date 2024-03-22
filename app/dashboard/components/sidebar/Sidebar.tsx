import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const usepathname = usePathname();
  const router = useRouter();

  const isActive = (pathname: string) => {
    return usepathname === pathname ? 'bg-gray-100' : '';
  };

  return (
    <div className="w-60 min-h-screen flex-col justify-start items-start inline-flex">
      <div className="w-60 h-16 px-5 py-4 bg-white border-r border-b border-black border-opacity-10 justify-start items-center gap-44 inline-flex">
        <div className="justify-start items-center gap-1.5 flex">
          <div className="w-5 h-6 relative">
          </div>
          <div>
            <Image
              src="/kalburn.svg"
              alt="Kalburn Logo"
              width={100}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="w-60 grow shrink basis-0 p-3 bg-white border-r border-black border-opacity-10 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch h-36 flex-col justify-start items-center gap-1 flex">
          <div className={`self-stretch p-2 rounded justify-start items-center inline-flex ${isActive('/dashboard/meals')}`}>
            <div className="text-stone-500 text-xs font-medium flex justify-between items-center">
              <div className='pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="M19 16H7a2 2 0 0 0-2 2M9 8h6" />
                  </g>
                </svg>
              </div>
              <Link href="/dashboard/meals">
                <div>
                  Meals
                </div>
              </Link>
            </div>
          </div>
          <div className={`self-stretch p-2 rounded justify-start items-center inline-flex ${isActive('/dashboard/user')}`}>
            <div className="text-stone-500 text-xs font-medium flex justify-between items-center">
              <div className='pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <Link href="/dashboard/user">
                <div>
                  User
                </div>
              </Link>
            </div>
          </div>
          <div className={`self-stretch p-2 rounded justify-start items-center inline-flex ${isActive('/dashboard/promo')}`}>
            <div className="text-stone-500 text-xs font-medium flex justify-between items-center">
              <div className='pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2" />
                </svg>
              </div>
              <Link href="/dashboard/promo">
                <div>
                  Promo
                </div>
              </Link>
            </div>
          </div>
          <div className={`self-stretch p-2 rounded justify-start items-center inline-flex ${isActive('/dashboard/delivery')}`}>
            <div className="text-stone-500 text-xs font-medium flex justify-between items-center">
              <div className='pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M6.331 8H17.67a2 2 0 0 1 1.977 2.304l-1.255 8.152A3 3 0 0 1 15.426 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8" />
                    <path d="M9 11V6a3 3 0 0 1 6 0v5" />
                  </g>
                </svg>
              </div>
              <Link href="/dashboard/delivery">
                <div>
                  Delivery
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-60 basis-0 p-3 bg-white border border-black border-opacity-10 flex-col justify-center items-center gap-3 flex">
        <div className="self-stretch h-16 flex-col justify-center items-start gap-0.5 flex">
          <div className={`self-stretch p-2 rounded-md justify-start items-center inline-flex ${isActive('/dashboard/help')}`}>
            <div className="text-stone-500 text-xs font-medium flex justify-between items-center">
              <div className='pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9 4v.01" />
                    <path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483" />
                  </g>
                </svg>
              </div>
              <Link href="/dashboard/help">
                <div>
                  Help Center
                </div>
              </Link>
            </div>
          </div>
          <div className={`self-stretch p-2 rounded-md justify-start items-center inline-flex ${isActive('/dashboard/setting')}`}>
            <div className="text-stone-500 text-xs font-medium flex justify-between items-center">
              <div className='pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
                  </g>
                </svg>
              </div>
              <Link href="/dashboard/setting">
                <div>
                  Setting
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
