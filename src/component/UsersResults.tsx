import Link from 'next/link';
import Image from 'next/image';
import { GithubUserType } from '@/types/user';


const Cards = ({user}: {user: GithubUserType}) => {

    return(
        <div
        className='p-3 mx-2 bg-indigo-400 rounded-md shadow-sm shadow-gray-200 card'
        key={user.id}
        >
            <div className='flex flex-row items-center justify-start hover:scale-105 hover:pl-5'>
                <div className='flex items-center justify-center pr-6 hover:opacity-100 opacity-90'>
                    <div className='avatar'>
                        <div className='border-b rounded-full shadow-md shadow-gray-600'>
                            <Image width={55} height={55} src={user.avatar_url} alt={user.login} priority={true} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="pb-1 text-lg text-gray-100 md:text-md card-title">{user.login}</h2>
                    <Link href={{
                        pathname: `/users/[slug]`,
                        query: {slug: user.login}
                        }} className='text-gray-900 hover:text-gray-700'>Visit profile</Link>
                </div>
            </div>
        </div>

    )
};

const UserResults = ({users}: {users: GithubUserType[]}) => {

    return (
        <div className='grid grid-cols-1 gap-2 overflow-hidden xl:grid-cols-1 lg:grid-1 md:grid-cols-1'>
            {users.map((user: GithubUserType) => 
                <Cards key={user.id} user={user} />
            )}
        </div>
    );
};

export default UserResults;
