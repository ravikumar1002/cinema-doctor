import Image from "next/image"

const BannerImage = ({ poster_path, title }: { poster_path: string, title: string }) => {

    return (
        <Image src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} width={700}
            height={800} alt={title} className='rounded-md w-auto' />
    )
}

export default BannerImage