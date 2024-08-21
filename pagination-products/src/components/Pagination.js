import "./Pagination.css";

export default function  Pagination({currentPage, onSelectedPageClick}) {


  return (
    <div class="pagination-component">
      <div class="sub-buttons" onClick={()=> {onSelectedPageClick(currentPage-1)}}>◀️</div>
      {
      
        Array.from({length: 10}, (value, index)=> index+1). map((value) => {
          return <div class="sub-buttons" onClick={()=> {onSelectedPageClick(value-1)}}>{value}</div>
        })
      }
      <div class="sub-buttons" onClick={()=> {onSelectedPageClick(currentPage+1)}}>▶️</div>
    </div>
  )
}