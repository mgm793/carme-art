import { PhotoCollection } from '../components/PhotoCollection/PhotoCollection';
import { getAllPhotos } from '../lib/api'


export default function Index({ allPhotos }) {
  return (
    <main className='main'>
      <PhotoCollection collection={allPhotos}/>
    </main>
  )
}

export async function getStaticProps({ preview = true }) {
  const allPhotos = (await getAllPhotos(preview)) ?? [];
  return {
    props: { allPhotos },
  }
}
