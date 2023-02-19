import Image from 'next/image'


function Post({ name, message, email, postImage, image, timestamp }) {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <img
                        className='rounded-full'
                        src={image}
                        width={40}
                        height={40}
                        alt=""
                    />
                    <div>
                        <p className="font-medium">{name}</p>
                        {timestamp ?
                            (
                                <p className='text-xs text-gray-400'>
                                    {new Date(timestamp?.toDate()).toLocaleDateString()}
                                </p>
                            ) : (
                                <p className='text-xs text-gray-400'>Loading</p>
                            )}

                    </div>
                </div>
                <p className='pt-4'>{message}</p>
            </div>
            {postImage && (
                <div>
                    <Image src={postImage} objectFile="cover" layout="fill" />
                </div>
            )}
        </div>

    )
}

export default Post