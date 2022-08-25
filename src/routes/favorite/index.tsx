import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { useMount } from 'react-use'
import store from 'storejs'

import { favoriteDataState } from 'states/movie'
import { useRecoil } from 'hooks/state'

import MovieItem from 'components/movieItem'
import styles from './favorite.module.scss'

const Favorite = () => {
  const [favData, setFavData] = useRecoil(favoriteDataState)

  useMount(() => {
    if (!store.has('favorite')) return
    setFavData(store.get('favorite'))
  })

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) return

    const items = Array.from(favData)
    const [reorderData] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderData)

    setFavData(items)
    store.set('favorite', items)
  }

  return (
    <div className={styles.container}>
      <div>
        {favData.length === 0 && <div>즐겨찾기를 추가해주세요.</div>}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='favorite-dnd'>
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps} className={styles.movielist}>
                {favData.map((el, index) => {
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
