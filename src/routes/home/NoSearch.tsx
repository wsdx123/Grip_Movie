interface Props {
  isView: number
}

const NoSearch = ({ isView }: Props) => {
  return <div>{isView === 0 && <div>검색어 없음</div>}</div>
}

export default NoSearch
