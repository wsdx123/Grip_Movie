interface Props {
  isView: 'True' | 'False'
}

const NoSearch = ({ isView }: Props) => {
  return <div>{isView === 'False' && <div>검색어 없음</div>}</div>
}

export default NoSearch
