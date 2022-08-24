import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { useMount } from 'react-use'
import store from 'storejs'

import { favoriteDataState } from 'states/movie'
import { IFavoriteArr } from 'types/home.d'
import { useRecoil } from 'hooks/state'

import MovieItem from 'components/movieItem'
import styles from './favorite.module.scss'

const Favorite = () => {
  const [ifavData, setIFavData] = useState<IFavoriteArr>([])
  const [favData, setFavData] = useRecoil(favoriteDataState)

  useEffect(() => {
    setIFavData(favData)
  }, [favData])

  useMount(() => {
    if (!store.has('favorite')) return
    setFavData(store.get('favorite'))
  })

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) return

    const items = Array.from(ifavData)
    const [reorderData] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderData)

    setIFavData(items)
    store.set('favorite', items)
    setFavData(store.get('favorite'))
  }

  return (
    <div className={styles.container}>
      <div>
        {ifavData.length === 0 && <div>즐겨찾기를 추가해주세요.</div>}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='favorite-dnd'>
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps} className={styles.movielist}>
                {ifavData.map((el, index) => {
                  return (
                    <Draggable key={el.imdbID} draggableId={el.imdbID} index={index}>
                      {(innerprovided) => <MovieItem Item={el} innerProvided={innerprovided} />}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export default Favorite
